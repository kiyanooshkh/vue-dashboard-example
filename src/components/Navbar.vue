<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed>
        <span class="font-weight-light">Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-row justify="center">
        <v-col>
          <div class="text-center">
            <v-avatar size="80">
              <img src="https://i.pravatar.cc/300?img=5" alt="avatar" />
            </v-avatar>
            <div class="white--text">Developer</div>
          </div>
        </v-col>
      </v-row>
      <v-list dense>
        <v-list-item color="primary" v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Projects", icon: "folder", route: "/projects" },
        { title: "Team", icon: "person", route: "/team" }
      ]
    };
  }
};
</script>