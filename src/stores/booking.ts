import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IBooking } from '@/domain/IBooking';

export const useBookingStore = defineStore({
  id: "bookings",
  state: () => ({
    bookings: [] as IBooking[],
    booking: null as IBooking | null,
  }),
  getters: {
    bookingCount: (state) => state.bookings.length,
    bookingsInFuture: (state) => state.bookings.filter(booking => booking.from > new Date().toISOString()).sort((a,b) => (a.from > b.from) ? 1 : -1 ),
    bookingsInPast: (state) => state.bookings.filter(booking => booking.from <= new Date().toISOString()),
  },
  actions: {
    add(booking: IBooking) {
      this.bookings.push(booking);
    },
  },
});
