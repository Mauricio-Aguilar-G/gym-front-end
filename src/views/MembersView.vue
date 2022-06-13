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
          <v-tab href="/view_member">VIEW MEMBERS</v-tab>
          <v-tab href="/view_admin">VIEW ADMIN</v-tab>
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
<v-container>
  <template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>MEMBERS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#9999ff"
              dark
              class="mb-2"
              href="/create_member"
            >
              Create Member
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.number"
                      label="Number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.weight"
                      label="Weight"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.height"
                      label="Height"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editAdmin(editedItem)"
                href="/view_member"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteAdmin(item._id)"
      >
        mdi-delete
      </v-icon>
      <v-icon
        @click="updateMembership(item.number)"
      >
        mdi-plus
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
</v-container>
<v-container style="height: 250px;"></v-container>
</v-sheet>
</v-card>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Id',value: '_id',},
        { text: 'Name',value: 'name',},
        { text: 'Age', value: 'age' },
        { text: 'Number', value: 'number' },
        { text: 'Weight', value: 'weight' },
        { text: 'Height', value: 'height'},
        { text: 'Membership', value: 'membership' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: [],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Edit Member':'Edit Member'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.viewAdmins();
    },

    methods: {
      initialize () {
        },

      editItem (item) {
        this.dialog = true
        console.log(item);
        this.axios.get(`/gym/admin_member/member/${item}`)
        .then(res=>{
            this.editedItem=res.data;
        })
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      viewAdmins(){
            this.axios.get('/gym/admin_member/members')
            .then((response)=>{
                this.desserts=response.data;
            })
            .catch((e)=>{
                console.log('error'+e)
            })
        },
      editAdmin(item){
          this.axios.put(`/gym/admin_member/edit_member/${item._id}`, item)
          .then(res =>{
              const index = this.desserts.findindex(n=>n._id===res.data._id)
              this.desserts[index].name=res.data.name;
              this.desserts[index].age=res.data.age;
              this.desserts[index].number=res.data.number;
              this.desserts[index].weight=res.data.weight;
              this.desserts[index].height=res.data.height;
              alert("Member was updated succesfully!");
              this.$router.push({ path:'/view_member'});
          })
          .catch(e=>{
              console.log(e.response);
              this.$router.push({ path:'/view_member'});
          })
      },
      deleteAdmin(id){
          console.log(id);
          this.axios.delete(`/gym/admin_member/delete_member/${id}`)
          .then(res=>{
              const index = this.desserts.findindex(item=>item._id===res.data._id)
              this.desserts.splice(index,1);
              this.editedIndex=this.desserts.indexOf(item);
              this.editedItem= Object.assign({},item);
              alert("member was deleted succesfully!");
              this.$router.push({ path:'/view_member'});
          })
          .catch(
            e=>{
              console.log(e.response);
              this.$router.push({ path:'/view_member'});
            })
      },
      updateMembership(number){
          this.axios
          .put(`/gym/admin_member/membership_renew/${number}`)
          .then((res)=>{
              alert("Subscription renewed");
              this.$router.push({ path:'/view_member'});
          })
          .catch((e =>{
              console.log(e.response);
              this.$router.push({ path:'/view_member'});
          }))
      }
    },
  }
</script>