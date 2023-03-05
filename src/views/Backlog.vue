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
               ghost-class="ghost"
               @end="onDragEnd">
      <template #item="{ element }">
        <backlog-item :item="element"></backlog-item>
      </template>
    </draggable>

  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import BacklogItem from '@/components/backlog/BacklogItem.vue';
import dummy from '@/assets/dummyData.js';

const projectlist = ref([]);

const show = ref(false);

// use dummy data for now
projectlist.value = dummy;

// Update the order field based on array index when draggin stops
const onDragEnd = async () => {
  for (let i = 0; i < projectlist.value.length; i++) {
    projectlist.value[i].order = i;
    console.log(projectlist.value[i]);
  }
}
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>