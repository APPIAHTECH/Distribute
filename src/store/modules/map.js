const state = ()=> ({
    mapData: {
        data:"hola"
    },
    counter: 0
});
const getters = {
    getMapData(state){ return state.mapData}
};
const actions = {};
const mutations = {
    saveMapData(state, data)
    {
        state.mapData = data;
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}