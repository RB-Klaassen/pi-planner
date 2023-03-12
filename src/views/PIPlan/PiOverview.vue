<template>
  <v-container fluid>

    <v-card>
      <v-card-actions>
        <v-btn variant="flat"
               color="primary"
               rounded="pill"
               :to="{
                 name: 'EditPi',
                 params:
                 {
                   id:
                     'NEW'
                 }
               }">New PI plan</v-btn>
      </v-card-actions>
    </v-card>

    <v-card variant="outlined"
            density="compact">
      <v-card-title style="background-color: lightblue">
        <v-row>
          <v-col>PI Name</v-col>
          <v-col cols="2">Status</v-col>
          <v-col cols="2">Start date</v-col>
          <v-col cols="2">End date</v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <PiItem v-for="pi in piList"
            :key="pi.id"
            :item="pi"></PiItem>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
// import draggable from 'vuedraggable';
import PiItem from '@/components/Pi/PiItem.vue';

const store = useStore();

const piList = computed(() => { return store.getters['piPlan/listPi'] });

</script>