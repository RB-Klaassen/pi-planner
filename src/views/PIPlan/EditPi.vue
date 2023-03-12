<template>
  <v-form @submit.prevent="submitForm"
          ref="form">
    <v-container>
      <v-text-field v-model="pi.name"
                    label="Product Increment name"
                    hint="Typically the year and quarter for the PI e.g. 2023-Q1"
                    id="name"
                    :rules="nameRules" />

      <v-select v-model="pi.status"
                label="Status"
                :items="statusOptions"
                id="status"
                :rules="statusRules" />

      <v-text-field v-model="pi.start"
                    type="date"
                    label="Start date for the PI"
                    hint="Format should be DD/MM/YYYY"
                    id="start"
                    :rules="startRules" />

      <v-text-field v-model="pi.end"
                    type="date"
                    label="End date for the PI"
                    hint="Format should be DD/MM/YYYY"
                    id="end"
                    :rules="endRules" />

      <v-btn type="submit"
             color="primary">Save PI</v-btn>
      <v-btn color="secondary"
             @click="cancelForm">Cancel</v-btn>

    </v-container>
  </v-form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import PiPlan from '@/models/PiPlanModel';

const store = useStore();

const props = defineProps(['id']);

// data for selection fields
const statusOptions = ['New', 'Active', 'Closed'];


// initate the PI object
let pi = null;



/**
 * form initiation for new projects, or to edit existing project
 */
if (props.id !== 'NEW') {
  pi = computed(() => { return store.getters['piPlan/getPi'](props.id) })
} else {
  pi = ref(null);
  const newPi = new PiPlan();
  pi.value = newPi;
}

// Form field validation rules

const nameRules = [
  v => {
    return (v ? true : 'Product Increment must have a name')
  }
];

const statusRules = [
  v => {
    return (v ? true : 'A status must be selected')
  }
];

const startRules = [
  v => {
    // TODO: Startdate should not be before end date
    return (v ? true : 'Product Increment must have a name')
  }
];

const endRules = [
  v => {
    return (v ? true : 'Product Increment must have a name')
  }
];

// Submit the form
function submitForm () {
  console.log(pi.value);
}

// Cancel the submit
function cancelForm () { }

</script>