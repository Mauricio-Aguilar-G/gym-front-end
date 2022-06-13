<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://wallpapercave.com/wp/wp1854228.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
        <v-spacer></v-spacer>
      <v-app-bar-title>CROSSARENA</v-app-bar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab href="/member_login">MEMBER</v-tab>
          <v-tab href="/">HOME</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="800"
      color="#9999ff"
    >
      <v-container style="height: 250px;"></v-container>
      <v-container style="height: 200px;">
      <h1>Member Login</h1>
        <v-form @submit.prevent="createAdmin()">
            <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="attributes.number"
                    label="Phone Number"
                    outlined
                ></v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-card-actions>
                    <v-btn text>
                    Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="primary"
                    text
                    type="submit"
                    >
                    Submit
                    </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
            </v-container>
        </v-form>
      </v-container>
      <v-container style="height: 200px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return{
      Attributes:[],

      attributes:{
        number:""
      },

    }
    
  },
  methods:{
      createAdmin(){
          console.log(this.attributes);
          this.axios
          .put(`/gym/member/login/${this.attributes.number}`)
          .then((res)=>{
              alert("Thanks!");
              this.$router.push({ path:'/member_login'});
          })
          .catch((e =>{
              console.log(e.response);
              alert(":(");
          }))
      }
  }
}
</script>

