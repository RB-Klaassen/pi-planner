<template>
  <v-container fluid>

    <v-card variant="outlined"
            density="compact">
      <v-card-title style="background-color: lightblue">
        <v-row>
          <v-col cols="3">        ID</v-col>
          <v-col cols="1">Type</v-col>
          <v-col cols="6">Project</v-col>
          <v-col cols="2">Lead</v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <draggable v-model="projectlist"
               item-key="id"
               ghost-class="ghost">
      <template #item="{ element }">
        <backlog-item :item="element"></backlog-item>
      </template>
    </draggable>

  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';
import BacklogItem from '@/components/backlog/BacklogItem.vue';

const store = useStore();

// need to define a getter and setter for the projectList, so updates in the order are written to the vuex store
const projectlist = computed({
  get () { return store.getters['backlog/fullBacklog'] },
  set (value) { store.dispatch('backlog/saveBacklog', value) }
})

</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>