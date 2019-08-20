<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="success" dark v-on="on">Click Me</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <h5>Add a New Project</h5>
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :rules="nameRules"
                    :counter="20"
                    label="Title"
                    prepend-icon="folder"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="content"
                    :rules="nameRules"
                    :counter="200"
                    label="Information"
                    prepend-icon="edit"
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="12">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="due"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="formattedDate"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(due)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12">
                  <v-btn class="mr-2" depressed color="success" @click="submit">
                    <v-icon left>save</v-icon>
                    <span class="font-weight-light">Add new project</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  data() {
    return {
      valid: false,
      due: null,
      title: "",
      content: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      dialog: false
    };
  },
  methods: {
    submit() {
     // console.log(this.title, this.content);
    }
  },
  computed:{
      formattedDate(){
          return this.due? format(this.due, 'Do MMM YYY'):'';
      }
  }
};
</script>

<style>
</style>