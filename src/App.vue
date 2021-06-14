<template>
  <v-app>
    <v-app-bar 
      app 
      color="primary" 
      dark
    >
      <v-toolbar-title>MY VUETIFY PAGE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>
    
    <v-content>
      <v-card width="400px" class="mt-5 mx-auto my-auto">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" 
            prepend-icon="mdi-account-circle"/>
            <v-text-field 
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"/>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    
    <v-footer 
      color="primary 
      lighten-1" 
      padless
      app
      src="https://picsum.photos/1920/1080?random"
    >
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links" 
          :key="link"
          color="white"
          text
          rounded
        >
          {{ link }}
        </v-btn>
        <v-col
          class="text-center py-4"
          cols="12"
        >
          {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    showPassword: false,
    links: ['github', 'twitter', 'instagram', 'facebook']
  }),
};
</script>
