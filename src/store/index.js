import mapModule from './modules/map';
import {createStore} from 'vuex';

const store = createStore({
    state:{
        counter: 0,
        location: true,
        mapData: {
            dir:  {address: "el Raval, Barcelona"},
            position: {},
            distance: '29 km'
        },
        foods:{
         city: [{
            foodsBarna: {
                foods_dinner: [{
                    name: "Dorada",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/03/19-Listo-para-comer.jpg",
                    desc: "DORADA AL LIMON CON GUARNICION DE BROCOLI. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Lentejas",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/03/33-Lentejas-en-el-Plato.jpg",
                    desc: "LENTEJAS CON ANDROIA O ANDROLLA Y HUEVOS. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Androllas",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/03/10-Androlla-y-Cachelos-emplatados.jpg",
                    desc: "ANDROLLAS O ANDROIAS CON CACHELOS Y TABLA DE QUESOS. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Grelos",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/03/32-En-el-Plato.jpg",
                    desc: "COCIDO DE GRELOS CON BUTELO . Today 07:00Pm - 8:30 Om * 5.4 km"
                }],
                foods_recimmended: [{
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
            },
            foodsVic: {
                foods_dinner: [{
                    name: "Pollo",
                    img: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/06/pollo-a-la-griega.jpg",
                    desc: "POLLO A LA GRIEGA Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Tortillas",
                    img: "https://www.cocinavital.mx/wp-content/uploads/2016/03/recetas-con-papas-comida.jpg",
                    desc: "LENTEJAS CON ANDROIA O ANDROLLA Y HUEVOS. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Spaggeti",
                    img: "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg",
                    desc: "ANDROLLAS O ANDROIAS CON CACHELOS Y TABLA DE QUESOS. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Grelos",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/03/32-En-el-Plato.jpg",
                    desc: "COCIDO DE GRELOS CON BUTELO . Today 07:00Pm - 8:30 Om * 5.4 km"
                }],
                foods_recimmended: [{
                    name: "Caldo Gallego",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/02/261-Caldo-gallego.-Muy-bueno-Impresionante.jpg",
                    desc: "CALDO GALLEGO, CON NABIZAS O GRELOS"
                }, {
                    name: "Patatas",
                    img: "https://joseramonpenaseijo.com/wp-content/uploads/2019/01/22-Patatas-a-la-Riojana-listas-para-comer.jpg",
                    desc: "AUTENTICAS PATATAS A LA RIOJANA"
                }, {
                    name: "Garfield",
                    img: "https://www.picantere.com/wp-content/uploads/2019/09/trozo-cenital-p-img_0901.png",
                    desc: "¡Un plato de película! A. Today 07:00Pm - 8:30 Om * 5.4 km"
                }, {
                    name: "Vegeterian",
                    img: "https://www.picantere.com/wp-content/uploads/2019/09/corte-lateral-p-img_0907.png",
                    desc: "Best vegan food. Today 07:00Pm - 8:30 Om * 5.4 km"
                }]
            }
        }]
        }

    },
    mutations:{
        setMapData(state, data) { state.mapData = data},
        setFoods(state, city) { state.foods.append(city)},
        setLocation(state, location) { 
            state.location = location
        }
    },
    actions:{},
    getters:{},
    modules: {
        map: mapModule
    }
})

export default store;