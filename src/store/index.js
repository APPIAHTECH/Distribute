import mapModule from './modules/map';
import {createStore} from 'vuex';

const store = createStore({
    state:{
        counter: 0,
        mapData: {
            dir:  {address: "el Raval, Barcelona"},
            position: {},
            distance: '29 km'
        },
    },
    mutations:{
        setMapData(state, data) { state.mapData = data}
    },
    actions:{},
    getters:{},
    modules: {
        map: mapModule
    }
})

export default store;