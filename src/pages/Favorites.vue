<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favorites</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">Favorites Tab</ion-content>
    <tab-menu></tab-menu>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>