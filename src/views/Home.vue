<template>
  <v-container>
    <v-row justify="center">
      <v-card width="90%" color="blue-lighten-4">
        <v-card-title>Home screen</v-card-title>
        <v-card-text>this is the home page</v-card-text>
        <!-- <VNumberInput numberValue=10 @numberUpdate="handleNumberUpdate"></VNumberInput> -->
        <v-card-actions>
          <v-btn>Save</v-btn>
          <v-btn>Discard</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
// import VNumberInput from '@/components/formcontrols/V-NumberInput.vue';

function handleNumberUpdate (e) {
  console.log(e);
}

</script>