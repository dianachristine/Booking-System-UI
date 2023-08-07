<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useServicesStore } from '@/stores/services';

@Options({
  components: {
  },
  props: {},
  emits: []
})
export default class CategoryCreate extends Vue {
  servicesStore = useServicesStore();
  //personService = new PersonService();


  categoryName: string = '';
  errorMsg: string | null = null;


  async submitClicked(): Promise<void> {

    if (this.categoryName.length > 0 && this.categoryName.length > 0) {


      /* var res = await this.personService.add(
           {
               firstName: this.firstName,
               lastName: this.lastName,
           }
       );

       if (res.status >= 300) {
           this.errorMsg = res.status + ' ' + res.errorMsg;
       } else {
           this.servicesStore.$state.services =
               await this.personService.getAll();

           this.$router.push('/persons');
       }*/
    } else {
      this.errorMsg = 'Too short!';
    }
  }

}
</script>

<template>
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
                  <h3>Loo uus kategooria</h3>
                  <hr />
                  <div v-if="errorMsg != null" class="text-danger validation-summary-errors" data-valmsg-summary="true">
                    <ul>
                      <li>{{ errorMsg }}</li>
                    </ul>
                  </div>

                  <div>
                    <div class="form-group">
                      <label class="control-label" for="CategoryName">CategoryName</label>
                      <input v-model="categoryName" class="form-control" type="text" />
                    </div>
                    <br>
                    <div class="form-group">
                      <input @click="submitClicked()" type="submit" value="Create" class="btn btn-success" />
                    </div>
                    <br>
                  </div>
                  <div>
                    <a href="/minuteenused" style="color:#191919;">Tagasi</a>
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
