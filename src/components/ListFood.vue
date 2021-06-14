<template>
<ion-page>
    <div class="flex">
        <span v-if="$store.state.location">
            <span v-if="type== 'recommended'">
                <ion-card v-for="item in $store.state.foods.city[0].foodsBarna.foods_recimmended" :key="item.name" class="item" href="#">
                    <img :src="item.img" />
                    <ion-card-header>
                        <ion-card-title>{{item.name}}</ion-card-title>
                        <ion-card-subtitle>{{item.desc}}</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </span>
            <span v-if="type== 'dinner'">
                <ion-card v-for="item in $store.state.foods.city[0].foodsBarna.foods_dinner" :key="item.name" class="item" href="#">
                    <img :src="item.img" />
                    <ion-card-header>
                        <ion-card-title>{{item.name}}</ion-card-title>
                        <ion-card-subtitle>{{item.desc}}</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </span>
        </span>
        <span v-else>
            <span v-if="type== 'recommended'">
                <ion-card v-for="item in $store.state.foods.city[0].foodsVic.foods_recimmended" :key="item.name" class="item" href="#">
                    <img :src="item.img" />
                    <ion-card-header>
                        <ion-card-title>{{item.name}}</ion-card-title>
                        <ion-card-subtitle>{{item.desc}}</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </span>
            <span v-if="type== 'dinner'">
                <ion-card v-for="item in $store.state.foods.city[0].foodsVic.foods_dinner" :key="item.name" class="item" href="#">
                    <img :src="item.img" />
                    <ion-card-header>
                        <ion-card-title>{{item.name}}</ion-card-title>
                        <ion-card-subtitle>{{item.desc}}</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </span>
        </span>
    </div>
</ion-page>
</template>

<script>
import {
    defineComponent
} from 'vue';

export default defineComponent({
    props: ['type'],
    data() {
        return {
            location: true
        }
    },
    components: {},
    setup() {
        return {};
    }
});
</script>

<style scoped>
ion-card {}
</style>
