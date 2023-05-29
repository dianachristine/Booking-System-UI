<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useSalonStore } from '@/stores/salon';
import { SalonService } from '@/services/SalonService';
import InfoRow from '@/components/InfoRow.vue';
import PinkButton from '@/components/PinkButton.vue';

@Options({
    components: {
        InfoRow,
        PinkButton
    },
    props: {},
    emits: []
})
export default class SalonInfo extends Vue {

    identityStore = useIdentityStore();

    salonStore = useSalonStore();
    salonService = new SalonService();

    async mounted(): Promise<void> {
        this.salonStore.$state.salon = await this.salonService.getSalon();
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
                      <template v-if="salonStore.salon">
                        <h3>{{ salonStore.salon.salonName }}</h3>
                        <hr />
  
                        <dl class="row">
                          <InfoRow infoType="Salongi nimi" :infoString=salonStore.salon.salonName />
                          <InfoRow infoType="Aadress" :infoString=salonStore.salon.address />
                          <InfoRow infoType="Alates" :infoString="salonStore.salon.from?.slice(0, 10)" />
                        </dl>
                        <br/>
                        <div>
                          <PinkButton buttonPathName="salonedit" buttonText="Muuda" />
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
