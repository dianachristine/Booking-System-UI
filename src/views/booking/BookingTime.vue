<script lang="ts">
import router from "@/router";
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import { useWorkSchedulesStore } from '@/stores/workschedules.js';
import { WorkScheduleService } from '@/services/WorkScheduleService';
import type { IWorkSchedule } from '@/domain/IWorkSchedule';

@Options({
  components: {
  },
  props: {
    id: String
  },
  emits: []
})
export default class BookingTime extends Vue {
  format = (date: any) => {
    if (date) {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    }
  }

  disabledDates = [
    new Date(),
  ]

  id!: string;
  errors: [string] | null = null;
  date: string | null = null;
  previousDate: string | null = null;
  timeAndSchedule: { workScheduleId: string, time: Date } | null = null;
  minDate: Date | string = new Date();
  maxDate: Date | string = new Date();
  availableTimes: IWorkSchedule[] | null = null;
  availableTimesForSelectedDate: { workScheduleId: string, time: Date }[] = [];


  servicesStore = useServicesStore();
  ServiceService = new ServiceService();

  workScheduleStore = useWorkSchedulesStore();
  workScheduleService = new WorkScheduleService();

  async beforeCreate(): Promise<void> {
    this.servicesStore.$state.service = await this.ServiceService.get(this.id);
    
    var dateNow = new Date();

    var availableTimesCurrentMonth = await this.workScheduleService.getAvailabletimes(dateNow.getFullYear(), (dateNow.getMonth() + 1), this.id)
    var availableTimesNextMonth = await this.workScheduleService.getAvailabletimes(dateNow.getFullYear(), (dateNow.getMonth() + 2), this.id);

    if (availableTimesCurrentMonth.length > 0) {
      this.minDate = new Date(availableTimesCurrentMonth[0].from);
    } else {
      this.minDate = new Date(availableTimesNextMonth[0].from);
    }

    if (availableTimesNextMonth.length > 0) {
      this.maxDate = new Date(availableTimesNextMonth[availableTimesNextMonth.length - 1].from);
    } else {
      this.maxDate = new Date(availableTimesCurrentMonth[availableTimesCurrentMonth.length - 1].from);
    }

    this.workScheduleStore.$state.availableTimes = [...availableTimesCurrentMonth, ...availableTimesNextMonth];
    this.availableTimes = [...availableTimesCurrentMonth, ...availableTimesNextMonth]


    const datesInRange: Date[] = [];
    let currentDate = new Date(this.minDate);

    while (currentDate <= this.maxDate) {
      datesInRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.disabledDates = datesInRange.filter((date) => {
      return !this.availableTimes?.some((time) => {
        return date.toDateString() == new Date(time.from).toDateString();
      });
    });
  }

  getAvailableTimesForSchedule(schedule: IWorkSchedule, servicesStore: any) {
    const availableTimes = [];
    const startDate = new Date(new Date(schedule.from).getTime() + servicesStore.$state.service?.preparationTimeInMinutes * 60000);
    const endDate = new Date(schedule.to);

    // Round the start date up to the nearest half hour
    if (startDate.getMinutes() <= 30) {
      startDate.setMinutes(30);
    } else {
      startDate.setHours(startDate.getHours() + 1);
      startDate.setMinutes(0);
    }

    // Round the end date down to the nearest half hour
    if (endDate.getMinutes() > 30) {
      endDate.setMinutes(30);
    } else {
      endDate.setMinutes(0);
    }

    const serviceDurationInMinutes = servicesStore.$state.service?.serviceDurationInMinutes;
    const cleaningTimeInMinutes = servicesStore.$state.service?.cleaningTimeInMinutes;

    let currentServiceStartTime = startDate;
    let currentServiceEndTime = new Date(startDate.getTime() + (serviceDurationInMinutes + cleaningTimeInMinutes) * 60000);

    // Loop through the available half hours and add them to the array
    while (currentServiceEndTime <= endDate) {

      availableTimes.push({
        workScheduleId: schedule.workScheduleId,
        time: new Date(currentServiceStartTime), // brauser local time
        //time: (new Date(startDate).toLocaleTimeString("et-EE", {timeZone: "Europe/Tallinn"})).slice(0, -3),
      });

      //availableTimes.push((new Date(startDate).toLocaleTimeString("et-EE", {timeZone: "Europe/Tallinn"})).slice(0, -3));
      currentServiceStartTime.setMinutes(currentServiceStartTime.getMinutes() + 30);

      currentServiceEndTime.setMinutes(currentServiceEndTime.getMinutes() + 30);
    }

    return availableTimes;
  }

  updated(): void {
    if (this.date && this.date != this.previousDate) {
      var dateAsDate = new Date(this.date!);


      var availableWorkSchedulesForSelectedDate = this.availableTimes?.filter((time) => {
        var timeAsDate = new Date(time.from);
        return timeAsDate.getDate() == dateAsDate.getDate() &&
          timeAsDate.getMonth() == dateAsDate.getMonth();
      });

      this.availableTimesForSelectedDate = [];

      availableWorkSchedulesForSelectedDate?.forEach((schedule) => {
        const timesForSchedule = this.getAvailableTimesForSchedule(schedule, this.servicesStore);

        timesForSchedule.forEach((time) => {
          this.availableTimesForSelectedDate.push({
            workScheduleId: time.workScheduleId!,
            time: time.time,
          });
        });
      });

      this.previousDate = this.date;
    }
  }

  async submitClicked(): Promise<void> {
    this.errors = null;

    if (
      this.date == null ||
      this.timeAndSchedule == null) {

      this.errors = ["Palun täida kõik väljad"];

    } else {
      let dateDate: Date = new Date(this.date);
      let dateString: string = `${dateDate.getFullYear()}-${('0' + (dateDate.getMonth() + 1)).slice(-2)}-${('0' + dateDate.getDate()).slice(-2)}`
      let timeStringLocal = this.timeAndSchedule.time.toLocaleTimeString("et-EE").slice(0, -3)
      router.push({name: "bookingclient", params: { id: this.id, date: dateString, time: timeStringLocal, workScheduleid: this.timeAndSchedule.workScheduleId}})

    }
  }
}
</script>

<template>
  <div style="height: 50px;"></div>
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
                  <br>
                  <h4>Valitud teenus: {{ servicesStore.service?.serviceName }}</h4>
                  <span class="text-muted">Kestus: {{ servicesStore.service?.serviceDurationInMinutes }} min</span><br>
                  <span class="text-muted">Hind: {{ servicesStore.service?.amount }}{{ servicesStore.service?.currency
                  }}</span>
                  <hr />

                  <div v-if="errors != null" class="text-danger validation-summary-errors" data-valmsg-summary="true">
                    <ul v-for="error of errors">
                      <li>{{ error }}</li>
                    </ul>
                  </div>
                  <div>
                    <div class="form-group">
                      <label class="control-label" for="date">Vali kuupäev *</label>
                      <VueDatePicker v-model="date" auto-apply locale="et-ee" :enable-time-picker="false"
                        :format="format" :disabled-dates="disabledDates"
                        :min-date="minDate" :max-date="maxDate">
                      </VueDatePicker>
                    </div>
                    <div class="form-group">
                      <label class="control-label" for="Cateogry">Vali kellaaeg *</label>
                      <select v-model="timeAndSchedule" :disabled="date == null" class="form-control">
                        <option v-for="timeAndSchedule in availableTimesForSelectedDate" :value="timeAndSchedule">
                          {{ timeAndSchedule.time.toLocaleTimeString("et-EE", { timeZone: "Europe/Tallinn" }).slice(0, -3)
                          }}
                        </option>
                      </select>
                    </div>


                    <br />
                    <br>
                    <div class="form-group">
                      <input @click="submitClicked()" type="submit" value="Jätka" style="background-color: #fce7ec;"
                        class="btn" />
                    </div>
                    <br>
                    <RouterLink to="/broneering/teenused" class="nav-link" active-class="active"
                      style="text-decoration: underline;">Tagasi</RouterLink>
                  </div>
                  <br />
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  </section>
</template>

<style>
.form-group {
  margin-bottom: 0.75rem;
}
</style>
