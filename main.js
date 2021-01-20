const app = Vue.createApp({
    data() {
        return {
            data: {},
        }
    },
    beforeMount() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const res = await fetch('./nemocnice.json')
            const data = await res.json()
            this.data = data
        }
    }
})
