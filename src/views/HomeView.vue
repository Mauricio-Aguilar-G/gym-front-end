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
          <v-tab href="/">HOME</v-tab>
          <v-tab href="/login_admin">ADMIN</v-tab>
          <v-tab href="/member_login">MEMBER</v-tab>
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
      <v-container style="height: 200px;">
        <v-row>
        <v-col>
          <v-card
          title
          shaped
          color="#d676bc"
          >
          <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Trainings</div>
        <v-list-item-title class="text-h5 mb-1">
          Aerobic Training
        </v-list-item-title>
        <v-list-item-subtitle>Here at the gym!</v-list-item-subtitle>
      </v-list-item-content>
      <v-img
      src="https://i0.wp.com/www.hd.com.do/wp-content/uploads/2015/03/crossfit.jpg?w=700&ssl=1"
      height="100px"
      width="50px"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        href="/create_member"
      >
        SIGN UP
      </v-btn>
    </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
      <v-container style="height: 200px;">
        <v-row>
        <v-col>
          <v-card
          title
          shaped
          color="#d676bc"
          >
          <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Trainings</div>
        <v-list-item-title class="text-h5 mb-1">
          Circuit Training
        </v-list-item-title>
        <v-list-item-subtitle>Here at the gym!</v-list-item-subtitle>
      </v-list-item-content>
      <v-img
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2012%2F02%2F03185914%2Fhow-to-build-circuit-workout-.jpg&q=85"
      height="100px"
      width="50px"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        href="/create_member"
      >
        SIGN UP
      </v-btn>
    </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
      <v-container style="height: 200px;">
        <v-row>
        <v-col>
          <v-card
          title
          shaped
          color="#d676bc"
          >
          <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Trainings</div>
        <v-list-item-title class="text-h5 mb-1">
          Fitness Training
        </v-list-item-title>
        <v-list-item-subtitle>Here at the gym!</v-list-item-subtitle>
      </v-list-item-content>
      <v-img
      src="https://media.istockphoto.com/photos/early-30s-male-athlete-doing-renegade-row-pushups-at-gym-picture-id1282804431?b=1&k=6&m=1282804431&s=170667a&w=0&h=jtMcUbGobxeIdYk61QyziWfOEHRlcZmfQUplkiGIdHY="
      height="100px"
      width="50px"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        href="/create_member"
      >
        SIGN UP
      </v-btn>
    </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
      <v-container style="height: 200px;">
        <v-row>
        <v-col>
          <v-card
          title
          shaped
          color="#d676bc"
          >
          <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Trainings</div>
        <v-list-item-title class="text-h5 mb-1">
          Interval Training
        </v-list-item-title>
        <v-list-item-subtitle>Here at the gym!</v-list-item-subtitle>
      </v-list-item-content>
      <v-img
      src="https://images.alphacoders.com/698/698603.jpg"
      height="100px"
      width="50px"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        href="/create_member"
      >
        SIGN UP
      </v-btn>
    </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>
</template>
