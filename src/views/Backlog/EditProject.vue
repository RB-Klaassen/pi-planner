<template>
  <v-form @submit.prevent="submitForm"
          v-model="formIsValid"
          validate-on="submit">
    <v-container>
      <v-text-field v-model="project.projectId"
                    label="Backlog ID"
                    hint="The Jira- or Azure Boards ID for the episode"
                    required />
      <v-text-field v-model="project.name"
                    label="Name"
                    required />
      <v-select v-model="project.status"
                label="Status"
                :items="statusOptions" />
      <v-textarea v-model="project.description"
                  label="Description" />
      <v-text-field v-model="project.lead"
                    label="Lead PO" />
      <v-select v-model="project.type"
                label="Type"
                :items="['KLO', 'LTO', 'MBF']"
                required />
      <v-select v-model="project.PIPlans"
                label="Included in PI planning"
                chips
                multiple
                :items="piPlans" />
      <v-text-field v-model="project.ticketLink"
                    label="Link to Backlog item"
                    hint="URL pointin to the backlog item in Jira or Azure Boards" />
      <v-btn type="submit"
             color="primary"
             block>Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import Project from '@/models/Project.js';

const props = defineProps(['id']);
const store = useStore();
let project = null;


// form validation rules
const projectIdRules = [
  v => {
    return (v ? true : 'Name field is required')
  }
];

const nameRules = [
  v => {
    return (v ? true : 'Name field is required')
  }
]

const statusRules = [
  v => {
    return (v ? true : 'Status field is required')
  }
]

const typeRules = [
  v => {
    return (v ? true : 'Type field is required')
  }
]

const formIsValid = ref(false);

const piPlans = ['2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2']
const statusOptions = ['New', 'In refinement', 'Ready', 'In progress', 'Done', 'On hold'];


if (props.id !== 'NEW') {
  console.log(props.id);
  project = computed(() => { return store.getters['backlog/getProject'](props.id) })
} else {
  project = ref(null);
  const newProject = new Project();
  project.value = newProject;
}

function submitForm () {
  console.log(formIsValid.value)
  console.log(project.value)
  if (formIsValid.value) {
    console.log(project.value)
    store.dispatch('backlog/addProject', project.value)
  } else { console.log('Error in form') }

}


</script>