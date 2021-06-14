<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Discover</ion-title>
        </ion-toolbar>
    </ion-header>
    <div class="ion-padding container">

        <div class="location-change">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-text color="dark">
                            <h6 id="locationText">
                                <ion-icon :icon="locationOutline"></ion-icon>{{$store.state.mapData.dir.address}}
                            </h6>
                            <h6 id="locationText-sub">{{$store.state.mapData.distance}}</h6>
                        </ion-text>
                    </ion-col>
                    <ion-col></ion-col>
                    <ion-col></ion-col>
                    <ion-col>
                        <ion-button color="medium" fill="outline" shape="round" href="/location">Change</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>

        <div class="foods">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-text color="dark">
                            <h4 class="bold">Recommended for you <ion-button size="small" id="btn-see" shape="round" color="none">See all</ion-button>
                            </h4>
                        </ion-text>
                        <ListFood type="recommended" :location='$store.state.foods.city.localization'></ListFood>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-text color="dark">
                            <h4 class="bold">Pick up for dinner <ion-button size="small" id="btn-see" shape="round" color="none">See all</ion-button>
                            </h4>
                        </ion-text>
                        <ListFood type="dinner" :location='$store.state.foods.city.localization'></ListFood>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </div>
    <tab-menu class="fixed"></tab-menu>
</ion-page>
</template>

<script>
/*import {
    mapGetters
} from 'vuex';*/
import ListFood from './../components/ListFood'
import {
    defineComponent,
} from 'vue';
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/vue';
import {
    locationOutline

} from 'ionicons/icons';

export default defineComponent({
    components: {
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        ListFood,
        IonButton
    },
    data() {
        return {
            address: "el Raval, Barcelona",
            distance: "within 1.2 km"
        }
    },
    created() {
        if (this.$route.params && !this.$route.params != "") {
            console.log(this.$route.params.location);
            this.address = this.$route.params.location
        }
    },
    setup() {

        return {
            locationOutline
        }
    },
});
</script>

<style scoped>
#locationText,
#locationText-sub {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

#locationText {
    font-size: 10pt;
}

#locationText-sub {
    font-size: 8pt;
    padding: 0;
    margin: 0;
}

#btn-see {
    margin-top: -15px;
}
</style>
