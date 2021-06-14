<template>
<ion-page>
    <div class="map" ref="mapDivRef"></div>
    <div class="ion-padding ">
        <!-- Default Searchbar -->
        <ion-toolbar>
            <ion-searchbar placeholder="Search for a city" v-model="address" @change="getLocation()"></ion-searchbar>
            <ion-list class="items" v-if="address">
                <ion-item @click="setAddress(item.formatted_address)" v-for="item in items" :key="item.formatted_address">
                    <ion-label>{{item.formatted_address}}</ion-label>
                </ion-item>
            </ion-list>
            <ion-button expand="full" fill="outline" color="success" shape="round" @click="getCurrentLocation()"> Use my current location</ion-button>
            <ion-button expand="full" color="success" shape="round" @click="setLocation()">CHOOSE THIS LOCATION</ion-button>
            <span v-if="locResult"> {{locResult.address}}</span>
        </ion-toolbar>
    </div>
</ion-page>
</template>

<script>
let geoCoderService = null;
const address = ref("")

// the google map object
let map = ref(null);
let locResult = ref(null)
// the map element in the templste
const mapDivRef = ref(null);
let markers = [{
    lat: 41.3851,
    lng: 2.1734,
    title: "Barcelona"
}]

import {
    ref
} from "vue";
import {
    IonSearchbar,
} from '@ionic/vue';
export default {
    name: "location",
    components: {
        IonSearchbar
    },
    props: {
        center: {
            lat: Number,
            lng: Number
        },
        zoom: Number,
        mapType: String,
        disableUI: Boolean
    },
    methods: {
        fitMapBounds() {
            const bounds = new window.google.maps.LatLngBounds();
            markers.forEach((m) => {
                bounds.extend(new window.google.maps.LatLng(m.lat, m.lng))
            })
            map.value.fitBounds()
        },
        setAddress(address) {
            console.log("the ", address);
            this.finalAddress = address
            this.address = ""
        },
        changeFood(val) {
            this.$store.commit('setLocation', val)
        },
        setLocation() {
            if (this.currentLocation) {
                alert("You have choosen " + this.currentLocation)
            } else {
                let res = this.result
                locResult.value = {
                    position: res[0].geometry.location.toJSON(),
                    address: res[0].formatted_address
                }
                let mapData = {
                    dir: locResult.value,
                    position: locResult.value.position,
                    distance: ""
                }
                this.$store.commit('setMapData', mapData)
                alert("You have choosen " + mapData.dir.address)
            }

        },
        loadMapMarkers(markers, callback) {
            console.log("list ", markers);
            markers.forEach(markerInfo => {
                const mapMarker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(
                        markerInfo.lat,
                        markerInfo.lng
                    ),
                    map: map.value,
                    title: markerInfo.title
                });

                mapMarker.infoWindow = new window.google.maps.InfoWindow({
                    content: markerInfo.title
                })
                mapMarker.addListener('click', () => {
                    if (mapMarker.infoWindow !== null) mapMarker.infoWindow.open(map.value, mapMarker)
                })
                callback()
            });
        },

        getCurrentLocation() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    let currentLatitude = position.coords.latitude;
                    let currentLongitude = position.coords.longitude;

                    this.findLocationByLatLan(currentLatitude, currentLongitude, (res) => {
                        this.loadMapMarkers([{
                            lat: currentLatitude,
                            lng: currentLongitude,
                            title: ""
                        }], () => {
                            let mapData = {
                                dir: res,
                                position: position,
                                distance: "1.2 km"
                            }

                            this.$store.commit('setMapData', mapData)
                            this.changeFood(false);
                            this.currentLocation = mapData.dir.address
                            this.fitMapBounds();
                        })

                    })

                });
            }
        },

        getLocation() {
            this.findLocation((res) => {
                this.items = res
                this.result = res
                this.changeFood(true);
                this.fitMapBounds();
            })
        },
        addLocation(location) {
            console.log("local : ", location);
            markers.value = [
                ...markers.value,
                {
                    ...location.position,
                    title: `<strong>${location.address}</strong>`
                }
            ];
        },
        findLocation(callback) {
            this.handleMapDidLoad()
            geoCoderService.geocode({
                address: address.value
            }, (results, status) => {
                if (status === "OK") {
                    locResult.value = {
                        position: results[0].geometry.location.toJSON(),
                        address: results[0].formatted_address
                    }
                    callback(results)
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        },

        findLocationByLatLan(currentLatitude, currentLongitude, callback) {
            this.handleMapDidLoad()
            geoCoderService.geocode({
                address: currentLatitude + ' ' + currentLongitude
            }, (results, status) => {
                if (status === "OK") {
                    locResult.value = {
                        position: results[0].geometry.location.toJSON(),
                        address: results[0].formatted_address
                    }
                    callback(locResult.value)
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        },
        handleMapDidLoad() {
            geoCoderService = new window.google.maps.Geocoder();
        }

    },

    data() {
        return {
            items: [{
                formatted_address: ""
            }],
            finalAddress: "",
            currentLocation: "",
            result: {}
        }
    },

    // load in the google script
    mounted() {
        // key is is the .env file
        const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
        // create the script element to load
        const googleMapScript = document.createElement("SCRIPT");
        googleMapScript.setAttribute(
            "src",
            `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
        );
        googleMapScript.setAttribute("defer", "");
        googleMapScript.setAttribute("async", "");
        document.head.appendChild(googleMapScript);
    },
    setup(props) {

        /**
         * this function is called as soon as the map is initialized
         */
        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapTypeId: props.mapType || "hybrid",
                zoom: props.zoom || 8,
                disableDefaultUI: props.disableUI || false,
                center: props.center || {
                    lat: 38.0,
                    lng: -77.01
                }
            });
            //loadMapMarkers(markers);
            this.handleMapDidLoad();
            this.fitMapBounds();
        };

        return {
            mapDivRef,
            address,
            locResult
        };
    }
};
</script>

<style lang="css" scoped>
.map {
    width: 100%;
    height: 350px;
    background-color: azure;
}

#items {}
</style>
