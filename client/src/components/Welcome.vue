<template>
  <v-container>
    
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-10"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to cloth - INIT
        </h1>
      </v-flex>
    </v-layout>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.userName"
            :rules="nameRules"
            :counter="10"
            label="Your Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.userAddress"
            label="Address"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
        <v-btn @click="setInfo()">Confirm</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
var store = require('store')
export default {
  name: 'Welcome',

  data: () => ({
   form: {
       userName: '',
       userAddress: '',
       userContact: '',
   }
  }),
  methods: {
      setInfo() {
          store.set('user', 
            { name: this.form.userName, 
              address: this.form.userAddress,
              contact: this.form.userContact
            })
      },
  }
};
</script>
