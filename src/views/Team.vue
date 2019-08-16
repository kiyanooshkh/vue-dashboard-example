<template>
  <div class="team">
    <h1 class="headline grey--text">Team</h1>

    <v-container class="my-5">
      <v-row wrap>
        <v-col xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3">
            <v-responsive class="pt-4">
              <div class="text-center">
                <v-avatar size="150">
                  <img :src="person.url" alt="avatar" />
                </v-avatar>
              </div>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-row justify="center">
                <v-btn small depressed color="grey lighten-3">
                  <v-icon small left>message</v-icon>
                  <span class="caption grey--text">Message</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "James",
          role: "Web developer",
          url: "https://i.pravatar.cc/300?img=7"
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          url: "https://i.pravatar.cc/300?img=62"
        },
        {
          name: "Chun Li",
          role: "Web developer",
          url: "https://i.pravatar.cc/300?img=31"
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          url: "https://i.pravatar.cc/300?img=1"
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          url: "https://i.pravatar.cc/300?img=5"
        }
      ]
    };
  }
};
</script>

<style>
</style>
