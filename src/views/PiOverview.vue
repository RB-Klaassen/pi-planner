<template>
  <v-container>
    <draggable v-model="projectlist" item-key="id" ghost-class="ghost">
      <template #item="{ element }">
        <div>
          <p>{{ element.name }}</p>
          <p>{{ element.description }}</p>
        </div>
      </template>
    </draggable>

  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import dummy from '@/assets/dummyData.js';
import draggable from 'vuedraggable';

const projectlist = ref([]);

projectlist.value = dummy;

console.log(projectlist.value)


</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>