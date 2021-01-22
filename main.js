const app = Vue.createApp({
    data() {
        return {
            hospitals: null,
            picked: null,
        }
    },
    beforeMount() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const res = await fetch('./nemocnice.json')
            const data = await res.json()
            this.hospitals = data
        },
        pickHospital() {
            const randomIndex = Math.floor(Math.random() * this.hospitals.length)
            this.picked = this.hospitals[randomIndex]
        },
        reset() {
            this.picked = null
        },
        scrollToPicker() {
            const picker = document.getElementById('picker')
            picker.scrollIntoView({ behavior: 'smooth' })
        }
    }
})
