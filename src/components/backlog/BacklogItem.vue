<template>
  <v-card variant="outlined"
          density="compact">
    <v-card-title>

      <v-row>
        <v-col cols="3">
          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-right'"
                 @click="show = !show"
                 size="x-small"
                 variant="flat"></v-btn>
          {{ item.id }}
        </v-col>
        <v-col cols="1">
          {{ item.type }}
        </v-col>
        <v-col cols="6">
          {{ item.name }}
        </v-col>
        <v-col cols="2">
          {{ item.lead }}
        </v-col>
      </v-row>

    </v-card-title>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>{{ item.description }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['item']);
const show = ref(false);

</script>