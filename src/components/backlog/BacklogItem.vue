<template>
  <v-card variant="outlined"
          density="compact">
    <v-card-title>

      <v-row>
        <v-col cols="3">
          <v-btn :icon="show ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                 @click="show = !show"
                 size="x-small"
                 variant="flat"></v-btn>
          {{ item.projectId }}
        </v-col>
        <v-col cols="1">
          <v-chip :color="item.type">{{ item.type }}</v-chip>
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
        <v-card-text>
          <v-row>
            <v-col cols="3"
                   offset="1">
              <h4>Description</h4>
            </v-col>
            <v-col>{{ item.description }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="3"
                   offset="1">
              <h4>Active in PI plannings</h4>
            </v-col>
            <v-col>
              <v-chip v-for="pi in item.PIPlans"
                      color="secondary">{{ pi }}</v-chip>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-row justify="space-around">

              <v-btn variant="flat"
                     color="primary"
                     rounded="pill"
                     :to="{
                       name: 'EditProject',
                       params:
                       {
                         id:
                           item.id
                       }
                     }">Edit</v-btn>
              <v-btn variant="flat"
                     color="#FF8A80"
                     rounded="pill"
                     @click="deleteProject">Delete</v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
// TODO: details in the expanded card
// TODO: emitting events for button clicks

import { ref } from 'vue';

const props = defineProps(['item']);
const emit = defineEmits(['deleteProject']);
const show = ref(false);

function deleteProject () {
  emit('deleteProject', props.item.id);
}

</script>

