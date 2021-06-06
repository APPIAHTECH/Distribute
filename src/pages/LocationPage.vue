<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Location</ion-title>
        </ion-toolbar>
    </ion-header>
    <div class="container">
        <Location :disableUI="true" :zoom="12" mapType="roadmap" :center="{ lat: 41.3851, lng: 2.1734 }">
        </Location>
        <span v-if="address"> {{address}}</span>
    </div>
    <tab-menu class="fixed"></tab-menu>
</ion-page>
</template>

<script>
import Location from './../components/Location'

import {
    defineComponent

} from 'vue';

import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/vue';

export default defineComponent({
    name: 'browse',
    components: {
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        Location
    },
});
</script>

<style scoped>
.brow {

  overflow: auto;
}
</style>
