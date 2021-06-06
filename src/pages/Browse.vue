<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Browse</ion-title>
        </ion-toolbar>
    </ion-header>
    <div class="container">
        <ion-content class="ion-padding">
            <p>Brows</p>
        </ion-content>

    </div>
    <tab-menu class="fixed"></tab-menu>
</ion-page>
</template>

<script>
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
        IonToolbar
    },
});
</script>

<style scoped>
.brow {

    overflow: auto;
}
</style>
