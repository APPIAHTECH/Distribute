<template>
<ion-page>
    <div class="flex">
        <ion-card v-for="item in foods" :key="item.name" class="item" href="#">
            <img :src="item.img" />
            <ion-card-header>
                <ion-card-title>{{item.name}}</ion-card-title>
                <ion-card-subtitle>{{item.desc}}</ion-card-subtitle>
            </ion-card-header>

        </ion-card>
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
            foods: [{
                name: "Burger",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
                desc: "Best burger every. Today 07:00Pm - 8:30 Om * 5.4 km"
            }, {
                name: "Pizza",
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80",
                desc: "Awsome Pizza. Today 07:00Pm - 8:30 Om * 5.4 km"
            }, {
                name: "Spagetti",
                img: "https://images.unsplash.com/photo-1611280422374-fa3c1110c16e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                desc: "Wana eat?. Today 07:00Pm - 8:30 Om * 5.4 km"
            }, {
                name: "Vegeterian",
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=353&q=80",
                desc: "Best vegan food. Today 07:00Pm - 8:30 Om * 5.4 km"
            }]
        }
    },
    components: {},
    setup() {
        return {};
    }
});
</script>

<style scoped>

</style>
