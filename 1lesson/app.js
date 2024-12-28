const App = {
    // data(){
    //     return {

    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Ivan',
            lastName: 'Esin',
            age: 20
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value='';
            console.log(event.key);
        },
        remove(index){
            this.items.splice(index, 1);
        },
        log(item){
            console.log('log item:', item);
        }
    },
    computed: {
        eventItems() {
            return this.items.filter(item => {
                return item % 2 === 0;
            })
        }
    }
}

const app = Vue.createApp(App);
app.mount('#app');