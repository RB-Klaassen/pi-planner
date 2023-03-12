<template>
  <v-container fluid>
    <v-card>
      <v-card-actions>
        <v-btn variant="flat"
               color="primary"
               rounded="pill"
               :to="{
                 name: 'EditProject',
                 params:
                 {
                   id:
                     'NEW'
                 }
               }">New project</v-btn>
      </v-card-actions>
    </v-card>

    <v-card variant="outlined"
            density="compact">
      <v-card-title style="background-color: lightblue">
        <v-row>
          <v-col cols="2">        ID</v-col>
          <v-col cols="1">Type</v-col>
          <v-col cols="6">Project</v-col>
          <v-col cols="2">Lead</v-col>
          <v-col cols="1">Status</v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <draggable v-model="projectlist"
               item-key="id"
               ghost-class="ghost">
      <template #item="{ element }">
        <backlog-item :item="element"
                      @delete-project="deleteProject"></backlog-item>
      </template>
    </draggable>

  </v-container>
</template>

<script setup>
// TODO: filtering on columns
// TODO: export function for backlog

import { computed } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';
import BacklogItem from '@/components/backlog/BacklogItem.vue';

const store = useStore();

// need to define a getter and setter for the projectList, so updates in the order are written back to the vuex store
const projectlist = computed({
  get () { return store.getters['backlog/fullBacklog'] },
  set (value) { store.dispatch('backlog/saveBacklog', value) }
})

// TODO: delete option should only be available for admins or project leads
// delete the project
function deleteProject (id) {
  store.dispatch('backlog/deleteProject', id)
}

</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>