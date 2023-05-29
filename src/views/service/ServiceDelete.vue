<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import InfoRow from '@/components/InfoRow.vue';

@Options({
  components: {
    InfoRow
  },
  props: {
    id: String
  },
  emits: []
})
export default class ServiceDelete extends Vue {
  id!: string;

  errors: [string] | null = null;

  identityStore = useIdentityStore();

  servicesStore = useServicesStore();
  serviceService = new ServiceService();

  async mounted(): Promise<void> {
    this.servicesStore.$state.service = await this.serviceService.get(this.id);
  }

  async deleteClicked(): Promise<void> {
    var res = await this.serviceService.delete(this.id);

    if (res.status >= 300) {
      this.errors = [res.status + ' ' + res.errorMsg];
    } else {
      this.servicesStore.$state.services =
        await this.serviceService.getAll();

      this.$router.push('/minuteenused');
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
                    <template v-if="servicesStore.service">
                      <h3>Kustuta teenus - {{ servicesStore.service.serviceName }}?</h3>
                      <hr />

                      <dl class="row">
                        <InfoRow infoType="Kategoooria" :infoString=servicesStore.service.categoryName />
                        <InfoRow infoType="Kirjeldus" :infoString=servicesStore.service.description />
                        <dt class="col-sm-6">Sihtgrupp</dt>
                        <dd class="col-sm-6">
                          <div v-if="servicesStore.service.targetGroup.toLowerCase() == 'n'">naised</div>
                          <div v-else-if="servicesStore.service.targetGroup.toLowerCase() == 'm'">mehed</div>
                          <div v-else>naised ja mehed</div>
                        </dd>
                        <InfoRow infoType="Kestus (min)" :infoNumber=servicesStore.service.serviceDurationInMinutes />
                        <InfoRow infoType="Ettevalmistusaeg (min)"
                          :infoNumber=servicesStore.service.preparationTimeInMinutes />
                        <InfoRow infoType="Koristusaeg (min)" :infoNumber=servicesStore.service.cleaningTimeInMinutes />
                        <InfoRow infoType="Hind" :infoString=servicesStore.service.amount +
                          servicesStore.service.currency />
                        <InfoRow infoType="Soodustuse %" :infoNumber=servicesStore.service.discountPercent />
                        <InfoRow infoType="Soodustuse nimi" :infoString=servicesStore.service.discountName />
                        <InfoRow infoType="Lõplik hind" :infoString=servicesStore.service.finalPrice +
                          servicesStore.service.currency />
                        <InfoRow infoType="Kommentaar" :infoString=servicesStore.service.comment />
                        <dt class="col-sm-6">On nähtav kliendile</dt>
                        <dd class="col-sm-6">
                          <div v-if="servicesStore.service.isPublic == true">Jah</div>
                          <div v-else>Ei</div>
                        </dd>
                      </dl>
                      <div>
                        <br>
                        <div class="form-group">
                          <input @click="deleteClicked()" type="submit" value="Jah, kustuta" class="btn btn-danger" />
                        </div>
                        <br>
                        <RouterLink :to="{ name: 'serviceedit', params: { id: id } }" class="nav-link"
                          active-class="active" style="text-decoration: underline;">Tagasi</RouterLink>
                      </div>
                      <br>
                    </template>
                    <div v-else>
                      <i class="fa fa-spinner fa-spin"></i> Laeb...
                    </div>
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
