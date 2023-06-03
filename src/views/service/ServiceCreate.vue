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
  props: {},
  emits: []
})
export default class ServiceCreate extends Vue {
  identityStore = useIdentityStore();
  servicesStore = useServicesStore();
  categoriesStore = useCategoriesStore();
  salonStore = useSalonStore();

  serviceService = new ServiceService();
  categoriesService = new ServiceCategoryService();
  salonService = new SalonService();

  serviceName: string | null = null;
  description: string | undefined = undefined;
  categoryId: string | null = null;
  isTargetGroupM: boolean = false;
  isTargetGroupN: boolean = false;
  targetGroupFinal: string | null = null;
  serviceDurationInMinutes: number | null = null;
  preparationTimeInMinutes: number | null = null;
  cleaningTimeInMinutes: number | null = null;
  amount: number | null = null;
  currency: string = '€';
  discountPercent: number | undefined = undefined;
  discountName: string | undefined = undefined;
  comment: string | undefined = undefined;
  isPublic: boolean = true;

  errors: [string] | null = null;

  async mounted(): Promise<void> {
    this.categoriesStore.$state.categories = await this.categoriesService.getAll();
    this.salonStore.$state.salon = await this.salonService.getSalon();
  }


  async submitClicked(): Promise<void> {

    if (this.serviceName && this.categoryId && this.serviceDurationInMinutes &&
      this.preparationTimeInMinutes && this.cleaningTimeInMinutes && this.amount && this.currency &&
      (this.isTargetGroupM || this.isTargetGroupN)) {

      if (this.isTargetGroupM && this.isTargetGroupN) {
        this.targetGroupFinal = "MN";
      } else {
        this.targetGroupFinal = this.isTargetGroupN ? 'N' : 'M';
      }

      var serviceToAdd: IService = {
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
        isPublic: this.isPublic,
        salonId: this.salonStore.$state.salon?.id!
      }

      var res = await this.serviceService.add(serviceToAdd);

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
                    <h3>Lisa uus teenus</h3>
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
                          <label class="control-label" for="description">Kestus (min) *</label>
                          <input v-model="serviceDurationInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Ettevalmistusaeg (min) *</label>
                          <input v-model="preparationTimeInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Koristusaeg (min) *</label>
                          <input v-model="cleaningTimeInMinutes" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Hind (€) *</label>
                          <input v-model="amount" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Soodustuse %</label>
                          <input v-model="discountPercent" class="form-control" type="number" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Soodustuse nimi</label>
                          <input v-model="discountName" class="form-control" type="text" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" for="description">Kommentaar</label>
                          <input v-model="comment" class="form-control" type="text" />
                        </div>
                        <div class="form-group" style="margin-bottom: 10px; margin-top: 10px;">
                          <label for="targetGroup">On kliendile nähtav: *</label><br>
                          <div class="form-check form-check-inline">
                            <label class="form-check-label" for="targetGroupM">Jah</label>
                            <input class="form-check-input pink-checkbox" type="checkbox" id="targetGroupM"
                              v-model="isPublic">
                          </div>
                        </div>
                      </div>
                      <br>
                      <div class="form-group">
                        <input @click="submitClicked()" type="submit" value="Lisa" class="btn btn-success" />
                      </div>
                      <br>
                    </div>
                    <div>
                      <RouterLink to="/minuteenused" class="nav-link" active-class="active"
                        style="text-decoration: underline;">Tagasi</RouterLink>
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
  <template v-else><div style="height: 50px;"></div></template>
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