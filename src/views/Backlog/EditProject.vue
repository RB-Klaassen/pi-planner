<template>
  <v-form @submit.prevent="submitForm"
          ref="form">
    <v-container>
      <v-text-field v-model="project.projectId"
                    label="Backlog ID"
                    hint="The Jira- or Azure Boards ID for the episode"
                    id="backlog-id"
                    :rules="projectIdRules" />
      <v-text-field v-model="project.name"
                    label="Name"
                    id="name"
                    :rules="nameRules" />
      <v-select v-model="project.status"
                label="Status"
                :items="statusOptions"
                id="status"
                :rules="statusRules" />
      <v-textarea v-model="project.description"
                  label="Description" />
      <v-text-field v-model="project.lead"
                    label="Lead PO" />
      <v-select v-model="project.type"
                label="Type"
                :items="['KLO', 'LTO', 'MBF']"
                id="project-type"
                :rules="typeRules" />
      <v-select v-model="project.PIPlans"
                label="Included in PI planning"
                chips
                multiple
                :items="piPlans" />
      <v-text-field v-model="project.ticketLink"
                    label="Link to Backlog item"
                    hint="URL pointin to the backlog item in Jira or Azure Boards" />
      <v-btn type="submit"
             color="primary">Save project</v-btn>
      <v-btn color="secondary"
             @click="cancelForm">Cancel</v-btn>
    </v-container>
  </v-form>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Project from '@/models/Project.js';

const props = defineProps(['id']);
const store = useStore();
const router = useRouter();
let project = null;


// dummy form data
const piPlans = ['2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2']
const statusOptions = ['New', 'In refinement', 'Ready', 'In progress', 'Done', 'On hold'];


/**
 * Form validation logic
 */

// Form validation rules
const projectIdRules = [
  v => {
    return (v ? true : 'Backlog ID field is required')
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

// function to trigger validation, as Vuetify form valdation does not work with pre-populated forms in the current release
const form = ref(null);

function validate () {
  return form.value.validate()
}


/**
 * form initiation for new projects, or to edit existing project
 */
if (props.id !== 'NEW') {
  project = computed(() => { return store.getters['backlog/getProject'](props.id) })
} else {
  project = ref(null);
  const newProject = new Project();
  project.value = newProject;
}

// validate and save the form, then go back to the backlog
async function submitForm () {
  const validationResult = await validate();
  if (validationResult.valid) {
    if (props.id === 'NEW') {
      store.dispatch('backlog/addProject', project.value)
    } else {
      store.dispatch('backlog/updateProject', project.value)
    }
    router.replace({ name: 'Backlog' });
  }
}

// cancel saving the project
async function cancelForm () {
  router.replace({ name: 'Backlog' });
}

</script>