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
          <v-tab href="/create_admin">CREATE ADMIN</v-tab>
          <v-tab href="/">HOME</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
      color="#9999ff"
    >
      <v-container style="height: 250px;"></v-container>
      <v-container style="height: 200px;" color="#bb7cff">
      <h1>Create Admin</h1>
        <v-form @submit.prevent="createAdmin()">
            <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="attributes.name"
                    label="Name"
                    outlined
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="attributes.email"
                    label="Email"
                    outlined
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="attributes.password"
                    label="Password"
                    outlined
                ></v-text-field>
                <h3>Already registered?</h3>
                <v-card-actions>
                    <v-btn href="/login_admin" text>
                    Login admin
                    </v-btn>
                    <v-spacer></v-spacer>
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
        name:"",
        email:"",
        password:""
      },

    }
    
  },
  methods:{
      createAdmin(){
          console.log(this.attributes);
          this.axios
          .post("/gym/admin/create_admin", this.attributes)
          .then((res)=>{
              this.Attributes.push(res.data);
              alert("Admin created succesfully!");
              this.$router.push({ path:'/view_admin'});
          })
          .catch((e =>{
              console.log(e.response);
              alert("Admin could not be created :(");
          }))
      }
  }
}
</script>
