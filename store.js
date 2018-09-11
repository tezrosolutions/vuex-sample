const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        count: state => {
            return state.count
        }
    },
    mutations: {
        incrementCount(state) {
            // mutate state
            state.count++
        }
    },
    actions: {
        incrementCount(context) {
            context.commit('incrementCount')
        }
    }
});