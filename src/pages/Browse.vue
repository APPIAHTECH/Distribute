<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Browse</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Browse Tab</ion-content>
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
    name: 'browse',
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>