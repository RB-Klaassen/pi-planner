<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="primary" disable-route-watcher>
      <v-list :items="menuItems"></v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>PI Planning tool</v-app-bar-title>
      <v-avatar color="grey" size="48">
        <v-img src="@/assets/cthulhu.jpeg" />
      </v-avatar>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// import { useStore } from 'vuex';

// const store = useStore();
const route = useRoute();

const drawer = ref(null);

// the list of menu items for the navigation drawer
const menuItems = [
  {
    title: 'Home',
    value: 1,
    props: {
      prependIcon: 'mdi-home',
      to: { name: 'Home' },
    }
  },
  {
    title: "Backlog",
    value: 2,
    props: {
      prependIcon: "mdi-list-box-outline",
      to: { name: 'Backlog' }
    }
  },
  {
    title: "PI Overview",
    value: 3,
    props: {
      prependIcon: "mdi-chart-gantt",
      to: { name: 'PiOverview' },
    }
  },
  {
    title: 'About',
    value: 10,
    props: {
      prependIcon: 'mdi-information',
      to: { name: 'About' },
    }
  },
]

// close the drawer when the route changes
watch(route, () => {
  drawer.value = false;
})

// watch(drawer, () => { console.log(drawer) })

// get the userprofile from the store
// const user = computed(function get () { return store.getters.getUserProfile });

</script>

