<template>
<ion-page>
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="discover" href="/discover">
                <ion-icon :icon="compassOutline"></ion-icon>
                <ion-label>Discover</ion-label>

            </ion-tab-button>

            <ion-tab-button tab="browse" href="/browse">
                <ion-icon :icon="bagOutline"></ion-icon>
                <ion-label>Browse</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="favorites" href="/favorites">
                <ion-icon :icon="heartOutline"></ion-icon>
                <ion-label>Favorites</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="more" href="/more">
                <ion-icon :icon="ellipsisHorizontalOutline"></ion-icon>
                <ion-label>More</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</ion-page>
</template>

<script>
import {
    defineComponent,
} from 'vue';
import {
    IonIcon,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/vue';
import {
    compassOutline,
    bagOutline,
    heartOutline,
    ellipsisHorizontalOutline

} from 'ionicons/icons';

export default defineComponent({
    name: 'tab',
    components: {
        IonIcon,
        IonLabel,
        IonPage,
        IonTabBar,
        IonTabButton,
        IonTabs
    },
    setup() {
        const beforeTabChange = () => {
            // do something before tab change
        }
        const afterTabChange = () => {
            // do something after tab change
        }
        return {
            compassOutline,
            bagOutline,
            heartOutline,
            ellipsisHorizontalOutline,
            beforeTabChange,
            afterTabChange
        }
    }
});
</script>
