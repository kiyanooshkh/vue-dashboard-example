<template>
  <nav>
    <v-app-bar flat app>
    <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed >
        <span class="font-weight-light">Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
        <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    }
};
</script>