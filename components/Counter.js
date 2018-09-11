const Counter = {
    data() {
        return {
            localCount: 2
        }
    },
    template: `<div>The value of sample VueX state variable is {{ doneCount }} <br /><a class="button" href="javascript:;" v-on:click="incrementCount">Increase Value using VueX actions</a></div>`,
    methods: {
        incrementCount: function (event) {
            store.dispatch('incrementCount')
        }
    },
    computed: {
        ...Vuex.mapState({
            count: state => state.count
        }),
        ...Vuex.mapGetters({
            doneCount: 'count'
        })
    }
};