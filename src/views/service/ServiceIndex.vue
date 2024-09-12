<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import ServiceFilters from '@/components/service/ServiceFilters.vue';
import TargetServicesInCategory from '@/components/service/TargetServicesInCategory.vue';
import ServiceInList from '@/components/service/ServiceInList.vue';
import PinkButton from '@/components/PinkButton.vue';

@Options({
    components: {
        ServiceFilters,
        PinkButton,
        TargetServicesInCategory,
        ServiceInList
    },
    props: {},
    emits: []
})
export default class ServiceIndex extends Vue {
    identityStore = useIdentityStore();

    servicesStore = useServicesStore();
    ServiceService = new ServiceService();

    this.servicesStore.$state.services = [
      {
        "serviceName": "Käeküünte geellakkimine oma küünele",
        "description": null,
        "targetGroup": "N",
        "serviceDurationInMinutes": 90,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T20:29:37.255227Z",
            "to": null,
            "comment": null,
            "serviceId": "a9b57488-c09b-45b6-9939-157d58f153bc",
            "priceId": "9ecb6278-2cb9-4dfe-8393-42ad3d789dca",
            "id": "c3f9b5ab-a064-444c-acf9-1e823b67d9e8"
          }
        ],
        "serviceDiscounts": [],
        "id": "a9b57488-c09b-45b6-9939-157d58f153bc"
      },
      {
        "serviceName": "Käeküünte geellakkimine oma küünele eri stiilis",
        "description": "Kassisilm, prantsuse maniküür",
        "targetGroup": "N",
        "serviceDurationInMinutes": 120,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 30,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T20:48:09.923067Z",
            "to": null,
            "comment": null,
            "serviceId": "b469d87a-26df-40e7-8cf0-361ef2a604e2",
            "priceId": "cd081951-dc0b-42fe-8118-0f399ba39423",
            "id": "9d558c4e-d759-4695-a5f0-66ee28dec18a"
          }
        ],
        "serviceDiscounts": [],
        "id": "b469d87a-26df-40e7-8cf0-361ef2a604e2"
      },
      {
        "serviceName": "Käeküünte geellakkimine oma küünele tugevdava aluslakiga",
        "description": null,
        "targetGroup": "N",
        "serviceDurationInMinutes": 105,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 30,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T20:33:42.067366Z",
            "to": null,
            "comment": null,
            "serviceId": "381b8777-9036-4503-8f1e-f989067be561",
            "priceId": "2b809dc1-2b01-462c-a0df-3474c5507cda",
            "id": "3329a23d-fbc8-4f92-96ff-69818560c555"
          }
        ],
        "serviceDiscounts": [],
        "id": "381b8777-9036-4503-8f1e-f989067be561"
      },
      {
        "serviceName": "Käeküünte geellakkimine oma küünele tugevdava aluslakiga eri stiilis",
        "description": "Kassisilm, prantsuse maniküür",
        "targetGroup": "N",
        "serviceDurationInMinutes": 120,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 35,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 35,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T20:59:36.089657Z",
            "to": null,
            "comment": null,
            "serviceId": "0c215e30-8d5f-4635-be9f-4b1e32ae408a",
            "priceId": "a83cca38-8dea-4c25-b05e-3413787961b5",
            "id": "6f479c3c-3ba6-4f84-9dbe-107e9b7093f5"
          }
        ],
        "serviceDiscounts": [],
        "id": "0c215e30-8d5f-4635-be9f-4b1e32ae408a"
      },
      {
        "serviceName": "Käeküüntelt geellaki eemaldus",
        "description": "Geellaki viilimine ja kiire kuivmaniküür",
        "targetGroup": "N",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 20,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 20,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T21:08:25.709596Z",
            "to": null,
            "comment": null,
            "serviceId": "52e1eaf6-aedc-4198-b713-5e3829e31533",
            "priceId": "61ce6b8f-248f-4760-b44f-85d39d1e4dcf",
            "id": "6fca96c9-91fe-4921-b062-c2f9243ecee6"
          }
        ],
        "serviceDiscounts": [],
        "id": "52e1eaf6-aedc-4198-b713-5e3829e31533"
      },
      {
        "serviceName": "Varbaküüntelt geellaki eemaldus",
        "description": "Geellaki viilimine ja kiire kuivpediküür",
        "targetGroup": "N",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "ce4264e2-9b04-49a8-986d-cc249533a2af",
        "categoryName": "Geellakkimine",
        "categoryDescription1": "Geellakkimisele eelneb kuivmaniküür. Võimalik lisada kivikesi, kleepse tasuta",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-03T21:23:03.788191Z",
            "to": null,
            "comment": null,
            "serviceId": "78ffdb4c-ad1a-41ba-9441-245cee4362f0",
            "priceId": "3f7440c0-dcfd-4401-bfb6-240514485f7c",
            "id": "856dc09c-066e-4509-91cf-4f60d28f3c98"
          }
        ],
        "serviceDiscounts": [],
        "id": "78ffdb4c-ad1a-41ba-9441-245cee4362f0"
      },
      {
        "serviceName": "Klassikaline maniküür oma küünele",
        "description": "",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 60,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 45,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-01T23:53:02.821764Z",
            "to": null,
            "comment": null,
            "serviceId": "c0d5383f-9e50-40b5-b030-97032cee0d1b",
            "priceId": "c97353e8-f4e4-44a5-b589-5a329938639c",
            "id": "25208525-9404-46c3-b729-d4bbc68b8156"
          }
        ],
        "serviceDiscounts": [],
        "id": "c0d5383f-9e50-40b5-b030-97032cee0d1b"
      },
      {
        "serviceName": "Klassikaline maniküür oma küünele koos geellakiga ",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 90,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 35,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 35,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T00:31:49.780125Z",
            "to": null,
            "comment": null,
            "serviceId": "5011baec-1803-4c99-a09b-6035048cabac",
            "priceId": "a73cf5dd-bf5b-4d97-90cd-5b6834f4bbdf",
            "id": "58edff24-5637-4b06-8afb-5357026055c2"
          }
        ],
        "serviceDiscounts": [],
        "id": "5011baec-1803-4c99-a09b-6035048cabac"
      },
      {
        "serviceName": "Klassikaline maniküür oma küünele tugevdava alusgeellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 105,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 40,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 40,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T00:42:23.338236Z",
            "to": null,
            "comment": null,
            "serviceId": "40527856-ef67-4252-a0f5-aaa8e015896c",
            "priceId": "ac688b29-78a3-4b71-a19d-355e957f3970",
            "id": "065e46dc-6e78-4718-9e4d-ce0f5ada03bd"
          }
        ],
        "serviceDiscounts": [],
        "id": "40527856-ef67-4252-a0f5-aaa8e015896c"
      },
      {
        "serviceName": "Spa maniküür oma küünele",
        "description": "",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 75,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 45,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 30,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T00:48:53.036943Z",
            "to": null,
            "comment": null,
            "serviceId": "6937509f-1953-4d14-b164-a2f739594104",
            "priceId": "a0929b88-f9b4-4096-a84f-c7d59be36ae0",
            "id": "eb7a7c49-857a-4915-89a5-d6c8c96bf6fc"
          }
        ],
        "serviceDiscounts": [],
        "id": "6937509f-1953-4d14-b164-a2f739594104"
      },
      {
        "serviceName": "Spa maniküür oma küünele koos geellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 105,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 40,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 40,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T00:51:28.112429Z",
            "to": null,
            "comment": null,
            "serviceId": "612bfe97-d6b3-40d1-af4d-1c7f9b8ef5bd",
            "priceId": "3cb838f7-0dac-458e-9572-ea0176dcdfa7",
            "id": "1d7ab403-0daa-41fc-a990-0b91f8952820"
          }
        ],
        "serviceDiscounts": [],
        "id": "612bfe97-d6b3-40d1-af4d-1c7f9b8ef5bd"
      },
      {
        "serviceName": "Spa maniküür oma küünele tugevdava alusgeellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 120,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 45,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 45,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "6d36a0d9-95c4-4c05-8c63-604c7e3ad51c",
        "categoryName": "Maniküür",
        "categoryDescription1": "Soojaveevann, küünte ja -nahkade korrastamine, 15 min kätemassaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T00:52:53.595463Z",
            "to": null,
            "comment": null,
            "serviceId": "a1b00c35-6eb5-4441-9b71-1c41d9c9ec0b",
            "priceId": "3e543985-b282-448e-9487-09b542378a1d",
            "id": "bdd1d3c6-3c47-486e-bdce-19624e3cf71e"
          }
        ],
        "serviceDiscounts": [],
        "id": "a1b00c35-6eb5-4441-9b71-1c41d9c9ec0b"
      },
      {
        "serviceName": "Käte soe parafiinihooldus",
        "description": null,
        "targetGroup": "MN",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "b843ba62-f6da-4ca4-af6a-5d26008cf7a1",
        "categoryName": "Parafiinihooldus",
        "categoryDescription1": "Desinfitseerimine, koorimine, kreemitamine, soe parafiinivann",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:04:41.212677Z",
            "to": null,
            "comment": null,
            "serviceId": "bd47edc1-c831-4dc7-a986-c8912a539eb7",
            "priceId": "fe1dcebf-ef3b-44b1-acb9-3e7a150f2fa8",
            "id": "40319778-897b-4128-84fb-2447463e04e3"
          }
        ],
        "serviceDiscounts": [],
        "id": "bd47edc1-c831-4dc7-a986-c8912a539eb7"
      },
      {
        "serviceName": "Käte soe parafiinihooldus osana kuurist",
        "description": "Kuur sisaldab 5 hooldust, hind kokku 110€ (eeldab ettemaksu)",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": "Parafiinihoolduse kuur",
        "discountPercent": 12,
        "finalPrice": 22,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "b843ba62-f6da-4ca4-af6a-5d26008cf7a1",
        "categoryName": "Parafiinihooldus",
        "categoryDescription1": "Desinfitseerimine, koorimine, kreemitamine, soe parafiinivann",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:14:28.714217Z",
            "to": null,
            "comment": null,
            "serviceId": "71220d6e-eccc-4356-a576-d3bb0f199daf",
            "priceId": "51dbcea6-3de8-4cb7-9922-9722b3e9be85",
            "id": "93a97d29-2bb8-431c-bac9-3c1ed98fbc47"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T22:14:28.858196Z",
            "to": null,
            "comment": null,
            "serviceId": "71220d6e-eccc-4356-a576-d3bb0f199daf",
            "discountId": "a7e4119d-c171-4315-9e4d-25fc91830084",
            "id": "278424e6-dc34-4406-af9f-6b8520a89bdd"
          }
        ],
        "id": "71220d6e-eccc-4356-a576-d3bb0f199daf"
      },
      {
        "serviceName": "Soe parafiinihooldus jalgadele",
        "description": null,
        "targetGroup": "MN",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 30,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "b843ba62-f6da-4ca4-af6a-5d26008cf7a1",
        "categoryName": "Parafiinihooldus",
        "categoryDescription1": "Desinfitseerimine, koorimine, kreemitamine, soe parafiinivann",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:06:39.858298Z",
            "to": null,
            "comment": null,
            "serviceId": "e31ab965-1ee1-4c4c-8bd0-6b17ff9b9092",
            "priceId": "6a5cdddd-ccd5-443e-90a0-95c7a180dbfc",
            "id": "eacd6d0d-a332-48b1-bb6c-b4cee3b5bd03"
          }
        ],
        "serviceDiscounts": [],
        "id": "e31ab965-1ee1-4c4c-8bd0-6b17ff9b9092"
      },
      {
        "serviceName": "Soe parafiinihooldus jalgadele osana kuurist",
        "description": "Kuur sisaldab 5 hooldust, hind kokku 135€ (eeldab ettemaksu)",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": "Parafiinihoolduse kuur",
        "discountPercent": 10,
        "finalPrice": 27,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "b843ba62-f6da-4ca4-af6a-5d26008cf7a1",
        "categoryName": "Parafiinihooldus",
        "categoryDescription1": "Desinfitseerimine, koorimine, kreemitamine, soe parafiinivann",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:20:23.927605Z",
            "to": null,
            "comment": null,
            "serviceId": "1c0e2661-9d5f-47ad-972c-4472402f342f",
            "priceId": "72f62fdd-9187-4cd6-9516-e04588bd3281",
            "id": "efc074fc-243c-4d35-8545-640ac9a0e194"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T22:20:23.947542Z",
            "to": null,
            "comment": null,
            "serviceId": "1c0e2661-9d5f-47ad-972c-4472402f342f",
            "discountId": "9ff4226b-0ead-4e16-9f9a-70f5e9cfeaf7",
            "id": "12c709bd-4ef3-413d-8549-2eaf675acb81"
          }
        ],
        "id": "1c0e2661-9d5f-47ad-972c-4472402f342f"
      },
      {
        "serviceName": "Klassikaline pediküür oma küünele",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 90,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 35,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 35,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:30:15.638241Z",
            "to": null,
            "comment": null,
            "serviceId": "fb9f5321-1ed0-4d17-bd4e-fe77c8b010a2",
            "priceId": "ed286ed5-cd7e-4ed0-a4bc-2c4d7e90352c",
            "id": "83c7c492-bee1-4f39-a807-7c98a7f014da"
          }
        ],
        "serviceDiscounts": [],
        "id": "fb9f5321-1ed0-4d17-bd4e-fe77c8b010a2"
      },
      {
        "serviceName": "Klassikaline pediküür oma küünele koos geellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 120,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 75,
        "comment": null,
        "isPublic": true,
        "amount": 45,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 45,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:32:25.555968Z",
            "to": null,
            "comment": null,
            "serviceId": "03fe232d-1dd3-43dc-92c0-350fac3c7d02",
            "priceId": "fff1135b-5370-4900-9440-c8626eb12b71",
            "id": "7de74cb2-c9ef-4eba-9269-ffeb1b3e35a8"
          }
        ],
        "serviceDiscounts": [],
        "id": "03fe232d-1dd3-43dc-92c0-350fac3c7d02"
      },
      {
        "serviceName": "Klassikaline pediküür oma küünele tugevdava alusgeellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 120,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 75,
        "comment": null,
        "isPublic": true,
        "amount": 50,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 50,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:34:46.290959Z",
            "to": null,
            "comment": null,
            "serviceId": "133a510d-914e-496f-bc1d-e2fcc30ba9af",
            "priceId": "ec9a2192-6aa0-4d2f-b7c1-1f8026366fb5",
            "id": "4229a5c3-ed8a-4036-acbf-98711657f49b"
          }
        ],
        "serviceDiscounts": [],
        "id": "133a510d-914e-496f-bc1d-e2fcc30ba9af"
      },
      {
        "serviceName": "Meeste klassikaline pediküür",
        "description": "",
        "targetGroup": "M",
        "serviceDurationInMinutes": 90,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 40,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 40,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:52:01.618238Z",
            "to": null,
            "comment": null,
            "serviceId": "7cfffe1e-7314-4553-ae7f-94edb84d2358",
            "priceId": "b713b97f-0f3e-4f64-a0cc-b606557b3187",
            "id": "90d547bf-fcd9-422e-a3b2-33c9d1c15cad"
          }
        ],
        "serviceDiscounts": [],
        "id": "7cfffe1e-7314-4553-ae7f-94edb84d2358"
      },
      {
        "serviceName": "Meeste spa pediküür",
        "description": "",
        "targetGroup": "M",
        "serviceDurationInMinutes": 105,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 45,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 45,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:54:48.771553Z",
            "to": null,
            "comment": null,
            "serviceId": "a5c9e51f-64e2-493a-b01e-96b6295968ae",
            "priceId": "f4276781-c510-4b2e-a7ed-42a1f6ce3242",
            "id": "3f1f44d1-9e5c-4f62-9cfd-2f424ad25129"
          }
        ],
        "serviceDiscounts": [],
        "id": "a5c9e51f-64e2-493a-b01e-96b6295968ae"
      },
      {
        "serviceName": "Spa pediküür oma küünele",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 105,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 60,
        "comment": null,
        "isPublic": true,
        "amount": 40,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 40,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:40:12.918818Z",
            "to": null,
            "comment": null,
            "serviceId": "76bafa0e-01b5-48b5-b2b8-26df38a91cae",
            "priceId": "baf4a415-cbda-4ef2-b02b-67fecfeb0c88",
            "id": "89171c37-9e71-4139-8969-e52ba276d6c7"
          }
        ],
        "serviceDiscounts": [],
        "id": "76bafa0e-01b5-48b5-b2b8-26df38a91cae"
      },
      {
        "serviceName": "Spa pediküür oma küünele koos geellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 135,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 75,
        "comment": null,
        "isPublic": true,
        "amount": 50,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 50,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:44:15.416022Z",
            "to": null,
            "comment": null,
            "serviceId": "e8b5492d-7f57-41dc-a7b5-527beb582d97",
            "priceId": "5328acf8-fe85-47f5-86bf-72fb21e6536b",
            "id": "1b2d5948-3c02-4634-8bf7-2fea4076dc81"
          }
        ],
        "serviceDiscounts": [],
        "id": "e8b5492d-7f57-41dc-a7b5-527beb582d97"
      },
      {
        "serviceName": "Spa pediküür oma küünele tugevdava alusgeellakiga",
        "description": "",
        "targetGroup": "N",
        "serviceDurationInMinutes": 135,
        "preparationTimeInMinutes": 15,
        "cleaningTimeInMinutes": 75,
        "comment": null,
        "isPublic": true,
        "amount": 55,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 55,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "35f30387-563c-41a5-8b29-49164d0664bb",
        "categoryName": "Pediküür",
        "categoryDescription1": "Soojaveevann, raspeldamine, koorimine, küünte ja -nahkade korrastamine, 15 min massaaž",
        "categoryDescription2": "Vana geellaki eemaldamine + 5-15 € ja kuni 30 min, sõltuvalt töömahust",
        "servicePrices": [
          {
            "from": "2023-06-02T01:47:04.139429Z",
            "to": null,
            "comment": null,
            "serviceId": "c76b2b5e-0ffe-4854-95c7-0dcb92352366",
            "priceId": "cd2e0b79-ac5e-4ee3-b6f9-8fdccea180cb",
            "id": "928ad012-8e25-49cf-92f3-84ad55d03b7b"
          }
        ],
        "serviceDiscounts": [],
        "id": "c76b2b5e-0ffe-4854-95c7-0dcb92352366"
      },
      {
        "serviceName": "Kulmude keemiline värvimine",
        "description": null,
        "targetGroup": "N",
        "serviceDurationInMinutes": 20,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 15,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 15,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T23:16:40.28318Z",
            "to": null,
            "comment": null,
            "serviceId": "6e918403-a92b-4363-80ee-4c02f7c79811",
            "priceId": "86e61373-2414-4479-9c00-15391da17b55",
            "id": "a1b9f563-55df-4778-a009-fe651dc636c8"
          }
        ],
        "serviceDiscounts": [],
        "id": "6e918403-a92b-4363-80ee-4c02f7c79811"
      },
      {
        "serviceName": "Kulmude korrigeerimine",
        "description": "Pintsetiga",
        "targetGroup": "N",
        "serviceDurationInMinutes": 30,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 15,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 15,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:53:38.601648Z",
            "to": null,
            "comment": null,
            "serviceId": "836c434d-19de-44ed-884d-8ceccb5ed017",
            "priceId": "e70f7aba-072b-4aa0-8187-166766afa1d2",
            "id": "c54ea955-0530-41db-99fa-ddebcd757791"
          }
        ],
        "serviceDiscounts": [],
        "id": "836c434d-19de-44ed-884d-8ceccb5ed017"
      },
      {
        "serviceName": "Kulmude korrigeerimine ja keemiline värvimine",
        "description": "Pintsetiga",
        "targetGroup": "N",
        "serviceDurationInMinutes": 50,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": 16.7,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T23:00:09.157021Z",
            "to": null,
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "priceId": "29c6f0f9-8396-4420-a678-c9dc89e23a6d",
            "id": "18604bf0-d56c-4815-8104-a503543dbc7a"
          },
          {
            "from": "2023-06-03T22:59:39.03755Z",
            "to": "2023-06-03T23:00:09.175977Z",
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "priceId": "e8fb566a-7447-4a1b-8890-0a063d4b48de",
            "id": "703d6be0-40aa-4ccc-95d2-875f1e91f4e2"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T23:01:40.186949Z",
            "to": "2023-06-03T23:01:59.783197Z",
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "discountId": "86bf265a-bd3f-4c6f-9fce-8b1325c68bc0",
            "id": "106209eb-3446-4228-8ae8-2ace71542c17"
          },
          {
            "from": "2023-06-03T23:04:09.34414Z",
            "to": null,
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "discountId": "172805f8-69d0-47b4-ab57-39b44f42d8ae",
            "id": "2b72de72-e539-46ef-b238-3845e1e42142"
          },
          {
            "from": "2023-06-03T23:01:59.783193Z",
            "to": "2023-06-03T23:02:56.070673Z",
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "discountId": "670ad049-4203-4892-8e95-a514a21e72c8",
            "id": "6ab90e52-073c-4315-adf6-6bab18d931fa"
          },
          {
            "from": "2023-06-03T22:59:39.098896Z",
            "to": "2023-06-03T23:01:40.187163Z",
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "discountId": "d432154a-0614-4e82-b934-958b852f7f68",
            "id": "7b20be9b-cd77-4120-952d-52536d225afb"
          },
          {
            "from": "2023-06-03T23:02:56.070667Z",
            "to": "2023-06-03T23:04:09.344145Z",
            "comment": null,
            "serviceId": "300d3710-225c-4f83-ba39-b4b9fe2282e1",
            "discountId": "c7d07d0b-1e7b-45e7-80ea-ddd1def610d0",
            "id": "a100de4c-fe3c-440c-bdde-9581c898c810"
          }
        ],
        "id": "300d3710-225c-4f83-ba39-b4b9fe2282e1"
      },
      {
        "serviceName": "Kulmude modelleerimine",
        "description": "Pintsetiga",
        "targetGroup": "N",
        "serviceDurationInMinutes": 35,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 20,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 20,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:55:56.055043Z",
            "to": null,
            "comment": null,
            "serviceId": "0675d539-8024-46fa-b3cf-44776290d557",
            "priceId": "c8b719be-6d34-421b-acfb-31664791a24a",
            "id": "a851afed-04ac-4f8c-9ee0-cf7e913d9f8b"
          }
        ],
        "serviceDiscounts": [],
        "id": "0675d539-8024-46fa-b3cf-44776290d557"
      },
      {
        "serviceName": "Kulmude modelleerimine ja keemiline värvimine",
        "description": "Pintsetiga",
        "targetGroup": "N",
        "serviceDurationInMinutes": 55,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 35,
        "currency": "€",
        "discountName": null,
        "discountPercent": 14,
        "finalPrice": 30,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T23:07:59.656917Z",
            "to": null,
            "comment": null,
            "serviceId": "cca7a367-3207-49aa-9375-fd8aff5229fe",
            "priceId": "31618f5f-7a31-478f-be40-93c677b5a558",
            "id": "b8a887e0-f842-4ee6-95d5-74604d84a4ad"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T23:07:59.657107Z",
            "to": null,
            "comment": null,
            "serviceId": "cca7a367-3207-49aa-9375-fd8aff5229fe",
            "discountId": "ae1a11ab-4d62-4caa-981e-f1226638c246",
            "id": "4959856a-6e0d-42a6-a1a9-e1a0d0021006"
          }
        ],
        "id": "cca7a367-3207-49aa-9375-fd8aff5229fe"
      },
      {
        "serviceName": "Ripsmete ja kulmude keemiline värvimine",
        "description": "Pintsetiga",
        "targetGroup": "N",
        "serviceDurationInMinutes": 45,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 30,
        "currency": "€",
        "discountName": null,
        "discountPercent": 16.7,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T23:18:24.718247Z",
            "to": null,
            "comment": null,
            "serviceId": "cdde3781-79ed-442f-bfb8-dec7b87639b9",
            "priceId": "12c8f3e8-d4b9-4355-bc28-65bea8cad874",
            "id": "184e5d69-cd3a-424b-9cda-7e1dc17ca77a"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T23:18:24.789946Z",
            "to": null,
            "comment": null,
            "serviceId": "cdde3781-79ed-442f-bfb8-dec7b87639b9",
            "discountId": "b6e87e7f-0e1c-4a9b-87e9-a2b6901ebdd3",
            "id": "0fe91cbd-78ae-46e2-b528-c2bf062754ac"
          }
        ],
        "id": "cdde3781-79ed-442f-bfb8-dec7b87639b9"
      },
      {
        "serviceName": "Ripsmete keemiline värvimine",
        "description": null,
        "targetGroup": "N",
        "serviceDurationInMinutes": 25,
        "preparationTimeInMinutes": 5,
        "cleaningTimeInMinutes": 15,
        "comment": null,
        "isPublic": true,
        "amount": 15,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 15,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "0595cc0c-9df6-4d3a-809c-c8b840df3da8",
        "categoryName": "Ripsmed ja kulmud",
        "categoryDescription1": "Konsultatsioon, vajadusel meigieemaldus, värvi valimine ja peale kandmine",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T23:14:57.990732Z",
            "to": null,
            "comment": null,
            "serviceId": "f72604eb-44b1-4da3-88fb-4ac4e0625e98",
            "priceId": "853e0069-2b36-4aa8-88b8-4354103d3da8",
            "id": "73caea35-da25-4b63-afce-102ff2700f15"
          }
        ],
        "serviceDiscounts": [],
        "id": "f72604eb-44b1-4da3-88fb-4ac4e0625e98"
      },
      {
        "serviceName": "Lõõgastav käte massaaž",
        "description": "",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 20,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 20,
        "comment": null,
        "isPublic": true,
        "amount": 20,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 20,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "4fa5ac53-b1b1-4e45-acd4-4af77ca0a205",
        "categoryName": "Soojaveevanniga massaaž",
        "categoryDescription1": "Soojaveevann, koorimine, 15 min lõõgastav massaaž",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-02T02:14:07.788385Z",
            "to": null,
            "comment": null,
            "serviceId": "46dc180a-6f51-443e-8207-075613aca977",
            "priceId": "a357abe1-ae33-4acd-92cb-5030400978e6",
            "id": "256562e2-6fec-4497-95a9-1c86fa9cc76e"
          }
        ],
        "serviceDiscounts": [],
        "id": "46dc180a-6f51-443e-8207-075613aca977"
      },
      {
        "serviceName": "Lõõgastav käte massaaž osana kuurist",
        "description": "Kuur sisaldab 5 hooldust, hind kokku 90€ (eeldab ettemaksu)",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 20,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 20,
        "comment": null,
        "isPublic": true,
        "amount": 20,
        "currency": "€",
        "discountName": "Massaaži kuur",
        "discountPercent": 10,
        "finalPrice": 18,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "4fa5ac53-b1b1-4e45-acd4-4af77ca0a205",
        "categoryName": "Soojaveevanniga massaaž",
        "categoryDescription1": "Soojaveevann, koorimine, 15 min lõõgastav massaaž",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:35:09.641116Z",
            "to": null,
            "comment": null,
            "serviceId": "133c605e-3d4e-477b-94c9-c66d8e6e5b18",
            "priceId": "93be904e-6207-46e5-abc9-9efd50991254",
            "id": "1799dd8e-a114-49d2-aa2b-e129edc2a246"
          },
          {
            "from": "2023-06-03T22:28:07.098963Z",
            "to": "2023-06-03T22:35:09.641348Z",
            "comment": null,
            "serviceId": "133c605e-3d4e-477b-94c9-c66d8e6e5b18",
            "priceId": "5e226726-c1f7-4236-a030-007072382fd1",
            "id": "e65b7060-59b0-450c-b88e-05d2464d41b0"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T22:28:07.099135Z",
            "to": "2023-06-03T22:37:10.285017Z",
            "comment": null,
            "serviceId": "133c605e-3d4e-477b-94c9-c66d8e6e5b18",
            "discountId": "e163e331-0906-4a5b-82f1-b5f2cb289127",
            "id": "2c1d399f-ff43-4ad4-9cf6-64256f36049f"
          },
          {
            "from": "2023-06-03T22:37:10.285012Z",
            "to": null,
            "comment": null,
            "serviceId": "133c605e-3d4e-477b-94c9-c66d8e6e5b18",
            "discountId": "82cea9fd-bb32-47ff-8d18-c6cc5d6ee77c",
            "id": "1a824f97-0bb2-4552-b3e0-bed8ba34bc13"
          }
        ],
        "id": "133c605e-3d4e-477b-94c9-c66d8e6e5b18"
      },
      {
        "serviceName": "Lõõgastav massaaž jalataldadele",
        "description": "",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 30,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": null,
        "discountPercent": null,
        "finalPrice": 25,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "4fa5ac53-b1b1-4e45-acd4-4af77ca0a205",
        "categoryName": "Soojaveevanniga massaaž",
        "categoryDescription1": "Soojaveevann, koorimine, 15 min lõõgastav massaaž",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-02T02:05:47.867336Z",
            "to": null,
            "comment": null,
            "serviceId": "9aa4ca80-fc42-4670-8b8b-fd66664052ab",
            "priceId": "5970199a-a986-41f5-886d-c1fc4c99c822",
            "id": "456f9ca8-8ab5-43cf-bc1f-b7096b77b415"
          }
        ],
        "serviceDiscounts": [],
        "id": "9aa4ca80-fc42-4670-8b8b-fd66664052ab"
      },
      {
        "serviceName": "Lõõgastav massaaž jalataldadele osana kuurist",
        "description": "Kuur sisaldab 5 hoodust, hind kokku 110€ (eeldab ettemaksu)",
        "targetGroup": "MN",
        "serviceDurationInMinutes": 30,
        "preparationTimeInMinutes": 10,
        "cleaningTimeInMinutes": 30,
        "comment": null,
        "isPublic": true,
        "amount": 25,
        "currency": "€",
        "discountName": "Massaaži kuur",
        "discountPercent": 12,
        "finalPrice": 22,
        "beauticianId": "03dbeb6e-17ef-4e3f-9df9-0001e5704ea3",
        "salonId": "f6dcf15d-9ace-4531-b1c8-f49b80b050bd",
        "serviceCategoryId": "4fa5ac53-b1b1-4e45-acd4-4af77ca0a205",
        "categoryName": "Soojaveevanniga massaaž",
        "categoryDescription1": "Soojaveevann, koorimine, 15 min lõõgastav massaaž",
        "categoryDescription2": null,
        "servicePrices": [
          {
            "from": "2023-06-03T22:35:40.944756Z",
            "to": null,
            "comment": null,
            "serviceId": "aacc8a88-fed6-4c1d-8a96-f76a2c37e749",
            "priceId": "5a6057ed-2c56-401a-898d-f3484ccd77cb",
            "id": "5ae9e593-a48c-4c50-8a96-1d1370334c33"
          },
          {
            "from": "2023-06-03T22:31:08.168658Z",
            "to": "2023-06-03T22:35:40.944761Z",
            "comment": null,
            "serviceId": "aacc8a88-fed6-4c1d-8a96-f76a2c37e749",
            "priceId": "1c59c575-1534-4833-943e-906562d3acef",
            "id": "e3736db8-2e65-40c9-8a7f-35e7357f8ec8"
          }
        ],
        "serviceDiscounts": [
          {
            "from": "2023-06-03T22:31:08.168806Z",
            "to": "2023-06-03T22:39:00.235615Z",
            "comment": null,
            "serviceId": "aacc8a88-fed6-4c1d-8a96-f76a2c37e749",
            "discountId": "cae112b2-6183-4a9a-938c-ba12ad406eab",
            "id": "9fa1acd1-6dc0-496b-9e01-096438043551"
          },
          {
            "from": "2023-06-03T22:39:00.23561Z",
            "to": null,
            "comment": null,
            "serviceId": "aacc8a88-fed6-4c1d-8a96-f76a2c37e749",
            "discountId": "77a51ba6-31cf-4c67-ab3b-665038929479",
            "id": "10001f36-27aa-40e6-afbf-56c557cb47b8"
          }
        ],
        "id": "aacc8a88-fed6-4c1d-8a96-f76a2c37e749"
      }
    ];
}
</script>

<template>
    <template v-if="identityStore.$state.response != null && identityStore.$state.response.isBeautician">
        <div style="height: 30px;"></div>
        <br>
        <section class="vh-100% gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body p-4">
                                <PinkButton buttonPathName="servicecreate" buttonText="Lisa uus teenus"
                                        :onRight="true" />
                                    <PinkButton buttonPathName="categoryindex" buttonText="Muuda kategooriaid"
                                        :onRight="true" />
                                <template v-if="servicesStore.serviceCategories.length > 0">
                                    
                                    <ServiceFilters />

                                    <div class="tab-content" id="target-content">
                                        <div class="tab-pane fade show active" id="target-tabs-all" role="tabpanel"
                                            aria-labelledby="target-tab-all">

                                            <!--<TargetServicesInCategory :services="servicesStore.services" :serviceCategories="servicesStore.serviceCategories" targetGroup="MN" ></TargetServicesInCategory>-->

                                            <div class="row pb-3" v-for="category of servicesStore.serviceCategories"
                                                :key="category.categoryName">
                                                <div class="col-md-12">

                                                    <div class="list-group mb-0">
                                                        <div class="list-group-item" style="background-color: #f8dae2;">
                                                            <b>{{ category.categoryName }}</b>
                                                            <small v-if="category.description1"><br>{{ category.description1
                                                            }}</small>
                                                            <small v-if="category.description2"><br><b>{{
                                                                category.description2
                                                            }}</b></small>
                                                        </div>

                                                        <div class="list-group-item"
                                                            v-for="service of servicesStore.services.filter(service => service.categoryName === category.categoryName)"
                                                            :key="service.id">

                                                            <template v-if="service.isPublic">
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#191919;">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small class="text-muted">{{
                                                                        service.description }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
                                                            </template>
                                                            <template v-else>
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#b9bdc0">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small style="color:#b9bdc0">{{ service.description
                                                                    }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
                                                            </template>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="target-tabs-n" role="tabpanel"
                                            aria-labelledby="target-tab-n">
                                            <div class="row pb-3" v-for="category of servicesStore.serviceCategoriesTargetN"
                                                :key="category.categoryName">
                                                <div class="col-md-12">

                                                    <div class="list-group mb-0">
                                                        <div class="list-group-item" style="background-color: #f8dae2;">
                                                            <b>{{ category.categoryName }}</b>
                                                            <small v-if="category.description1"><br>{{ category.description1
                                                            }}</small>
                                                            <small v-if="category.description2"><br><b>{{
                                                                category.description2
                                                            }}</b></small>
                                                        </div>

                                                        <div class="list-group-item"
                                                            v-for="service of servicesStore.services.filter(service =>
                                                                service.categoryName === category.categoryName &&
                                                                (service.targetGroup == 'N' || service.targetGroup == 'MN'))" :key="service.id">

                                                            <template v-if="service.isPublic">
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#191919;">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small class="text-muted">{{
                                                                        service.description }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
                                                            </template>
                                                            <template v-else>
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#b9bdc0">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small style="color:#b9bdc0">{{ service.description
                                                                    }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
                                                            </template>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="target-tabs-m" role="tabpanel"
                                            aria-labelledby="target-tab-m">
                                            <div class="row pb-3" v-for="category of servicesStore.serviceCategoriesTargetM"
                                                :key="category.categoryName">
                                                <div class="col-md-12">

                                                    <div class="list-group mb-0">
                                                        <div class="list-group-item" style="background-color: #f8dae2;">
                                                            <b>{{ category.categoryName }}</b>
                                                            <small v-if="category.description1"><br>{{ category.description1
                                                            }}</small>
                                                        </div>

                                                        <div class="list-group-item"
                                                            v-for="service of servicesStore.services.filter(service =>
                                                                service.categoryName === category.categoryName && (service.targetGroup == 'M' || service.targetGroup == 'MN'))"
                                                            :key="service.id">

                                                            <template v-if="service.isPublic">
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#191919;">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small class="text-muted">{{
                                                                        service.description }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
                                                            </template>
                                                            <template v-else>
                                                                <RouterLink
                                                                    :to="{ name: 'servicedetails', params: { id: service.id } }"
                                                                    style="text-decoration: none; color:#b9bdc0">
                                                                    {{ service.serviceName }}
                                                                    <br>
                                                                    <small style="color:#b9bdc0">{{ service.description
                                                                    }}</small>
                                                                    <br> {{ service.serviceDurationInMinutes }} min <small
                                                                        class="text-muted">(enne: {{
                                                                            service.preparationTimeInMinutes }} min, koristus:
                                                                        {{ service.cleaningTimeInMinutes }} min) </small>
                                                                </RouterLink>
                                                                <span class="float-end" v-if="service.discountPercent">
                                                                    <s>{{ service.amount }}{{ service.currency }}</s>
                                                                    &nbsp;
                                                                    <b>{{ service.finalPrice }}{{ service.currency }}</b>
                                                                </span>
                                                                <span class="float-end" v-else>
                                                                    {{ service.finalPrice }}{{ service.currency }}
                                                                </span>
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
                                </template>


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
