<template>
  <v-card variant="outlined"
          density="compact">

    <v-card-title>
      <v-row>
        <v-col>
          <v-btn :icon="show ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                 @click="show = !show"
                 size="x-small"
                 variant="flat"></v-btn>
          {{ item.name }}
        </v-col>
        <v-col cols="2">{{ item.status }}</v-col>
        <v-col cols="2">{{ item.start }}</v-col>
        <v-col cols="2">{{ item.end }}</v-col>
      </v-row>
    </v-card-title>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-actions>
          <v-row justify="space-around">
            <v-btn variant="flat"
                   color="primary"
                   rounded="pill"
                   :to="{
                     name: 'EditPi',
                     params:
                     {
                       id:
                         item.id
                     }
                   }">Edit</v-btn>
            <v-btn variant="flat"
                   color="#FF8A80"
                   rounded="pill"
                   @click="deletePi">Delete</v-btn>
          </v-row>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['item']);
const emit = defineEmits(['deletePi']);
const show = ref(false);

function deletePi () {
  emit('deletePi', props.item.id);
}

</script>
