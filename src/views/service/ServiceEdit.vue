<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useServicesStore } from '@/stores/services';
import { useCategoriesStore } from '@/stores/servicecategories';
import { useSalonStore } from '@/stores/salon';
import { ServiceService } from '@/services/ServiceService';
import { ServiceCategoryService } from '@/services/ServiceCategoryService';
import { SalonService } from '@/services/SalonService';
import type { IService } from '@/domain/IService';

@Options({
  components: {
  },
  props: {
    id: String
  },
  emits: []
})
export default class ServiceEdit extends Vue {
  identityStore = useIdentityStore();
  servicesStore = useServicesStore();
  categoriesStore = useCategoriesStore();
  salonStore = useSalonStore();

  serviceService = new ServiceService();
  categoriesService = new ServiceCategoryService();
  salonService = new SalonService();

  id!: string;

  serviceName: string | undefined = undefined;
  description: string | undefined = undefined;
  categoryId: string | undefined = undefined;
  isTargetGroupM: boolean = false;
  isTargetGroupN: boolean = false;
  targetGroupFinal: string | undefined = undefined;
  serviceDurationInMinutes: number | undefined = undefined;
  preparationTimeInMinutes: number | undefined = undefined;
  cleaningTimeInMinutes: number | undefined = undefined;
  amount: number | undefined = undefined;
  currency: string | undefined = undefined;
  discountPercent: number | undefined = undefined;
  discountName: string | undefined = undefined;
  comment: string | undefined = undefined;
  isPublic: boolean | undefined = false;

  errors: [string] | null = null;

  async mounted(): Promise<void> {
    this.categoriesStore.$state.categories = await this.categoriesService.getAll();
    this.salonStore.$state.salon = await this.salonService.getSalon();

    this.servicesStore.$state.service = await this.serviceService.get(this.id);

    this.serviceName = this.servicesStore.service?.serviceName;
    this.description = this.servicesStore.service?.description;
    this.categoryId = this.servicesStore.service?.serviceCategoryId;
    this.serviceDurationInMinutes = this.servicesStore.service?.serviceDurationInMinutes;
    this.preparationTimeInMinutes = this.servicesStore.service?.preparationTimeInMinutes;
    this.cleaningTimeInMinutes = this.servicesStore.service?.cleaningTimeInMinutes;
    this.amount = this.servicesStore.service?.amount;
    this.currency = this.servicesStore.service?.currency;
    this.discountPercent = this.servicesStore.service?.discountPercent;
    this.discountName = this.servicesStore.service?.discountName;
    this.comment = this.servicesStore.service?.comment;
    this.isPublic = this.servicesStore.service?.isPublic;


    if (this.servicesStore.service?.targetGroup.includes('M')) this.isTargetGroupM = true;
    if (this.servicesStore.service?.targetGroup.includes('N')) this.isTargetGroupN = true;
  }


  async editClicked(): Promise<void> {

    if (this.serviceName && this.categoryId && this.serviceDurationInMinutes &&
      this.preparationTimeInMinutes && this.cleaningTimeInMinutes && this.amount && this.currency &&
      (this.isTargetGroupM || this.isTargetGroupN)) {

      if (this.isTargetGroupM && this.isTargetGroupM) {
        this.targetGroupFinal = "MN";
      } else {
        this.targetGroupFinal = this.isTargetGroupN ? 'N' : 'M';
      }

      var serviceToEdit: IService = {
        id: this.servicesStore.service?.id,
        serviceName: this.serviceName,
        description: this.description,
        serviceCategoryId: this.categoryId,
        targetGroup: this.targetGroupFinal!,
        serviceDurationInMinutes: this.serviceDurationInMinutes,
        preparationTimeInMinutes: this.preparationTimeInMinutes,
        cleaningTimeInMinutes: this.cleaningTimeInMinutes,
        amount: this.amount,
        currency: this.currency,
        discountPercent: this.discountPercent,
        discountName: this.discountName,
        comment: this.comment,
        isPublic: this.isPublic!,
        salonId: this.salonStore.$state.salon?.id!
      }

      var res = await this.serviceService.edit(serviceToEdit, this.servicesStore.service?.id!);

      if (res.status >= 300) {
        this.errors = [res.status + ' ' + res.errorMsg];
      } else {
        this.servicesStore.$state.services =
          await this.serviceService.getAll();

        this.$router.push('/minuteenused');
      }

    } else {
      this.errors = ["Palun täida kõik kohustuslikud väljad"];
    }
  }
}
</script>

<template>
  <template v-if="identityStore.$state.response != null && identityStore.$state.response.isBeautician">
    <div style="height: 50px;"></div>
    <br>
    <section class="vh-100% gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-md-10">
            <div class="card">
              <div class="card-body p-4">
                <div class="col-md-2"></div>


                <div class="row">

                  <div class="col-md-2"></div>
                  <div class="col-md-8">
                    <h3>Muuda teenust - {{ servicesStore.service?.serviceName }}</h3>
                    <RouterLink :to="{ name: 'servicedelete', params: { id: id } }" class="nav-link" active-class="active"
                      style="text-decoration: underline;">Soovid teenust kustutada?</RouterLink>
                    <hr />
                    <div v-if="errors != null" class="text-danger validation-summary-errors" data-valmsg-summary="true">
                      <ul v-for="error of errors">
                        <li>{{ error }}</li>
                      </ul>
                    </div>

                    <div>
                      <div>
                        <div class="form-group">
                          <label class="control-label" for="ServiceName">Teenuse nimi *</label>
                          <input v-model="serviceName" class="form-control" type="text" />
                        </div>


                        <div class="form-group">
                          <label class="control-label" for="Cateogry">Kategooria *</label>
                          <select v-model="categoryId" class="form-control">
                            <option v-for="serviceCategory in categoriesStore.categories" :value="serviceCategory.id">
                              {{ serviceCategory.categoryName }}
                            </option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label class="control-label" for="description">Kirjeldus</label>
                          <textarea v-model="description" class="form-control"></textarea>
                        </div>

                        <div class="form-group" style="margin-bottom: 10px; margin-top: 10px;">
                          <label for="targetGroup">Sihtgrupp: *</label><br>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input pink-checkbox" type="checkbox" id="targetGroupM"
                              v-model="isTargetGroupM">
                            <label class="form-check-label" for="targetGroupM">Mehed</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input pink-checkbox" type="checkbox" id="targetGroupN"
                              v-model="isTargetGroupN">
                            <label class="form-check-label" for="targetGroupN">Naised</label>
                          </div>
                        </div>

                        <div class="form-group">
                          <label class="control-label" for="serviceDurationInMinutes">Kestus (min) *</label>
                          <input v-model="serviceDurationInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="preparationTimeInMinutes">Ettevalmistusaeg (min) *</label>
                          <input v-model="preparationTimeInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="cleaningTimeInMinutes">Koristusaeg (min) *</label>
                          <input v-model="cleaningTimeInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="amount">Hind (€) *</label>
                          <input v-model="amount" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="discountPercent">Soodustuse %</label>
                          <input v-model="discountPercent" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="discountName">Soodustuse nimi</label>
                          <input v-model="discountName" class="form-control" type="text" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="comment">Kommentaar</label>
                          <input v-model="comment" class="form-control" type="text" />
                        </div>
                        <div class="form-group" style="margin-bottom: 10px; margin-top: 10px;">
                          <label for="isPublic">On kliendile nähtav: *</label><br>
                          <div class="form-check form-check-inline">
                            <label class="form-check-label" for="isPublic">Jah</label>
                            <input class="form-check-input pink-checkbox" type="checkbox" id="isPublic"
                              v-model="isPublic">
                          </div>
                        </div>
                      </div>
                      <br>
                      <div class="form-group">
                        <input @click="editClicked()" type="submit" value="Muuda" class="btn btn-warning" />
                      </div>
                      <br>
                    </div>
                    <div>
                      <RouterLink :to="{ name: 'servicedetails', params: { id: id } }" class="nav-link"
                        active-class="active" style="text-decoration: underline;">Tagasi</RouterLink>
                    </div>
                    <br>
                  </div>

                </div>


              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  </template>
  <template v-else>
    <div style="height: 50px;"></div>
  </template>
</template>

<style scoped>
.pink-checkbox:checked {
  background-color: #f8c6d3 !important;
  border-color: #f8c6d3 !important;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.1rem #f8c6d3 !important;
}

.form-group {
  margin-bottom: 0.75rem;
}
</style>
