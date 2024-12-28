const h = Vue.h;

const app = Vue.createApp({
    data() {
        return {
            title: "Это свойсвто из template"
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Изменили! Лол';
        }
    },
    // template:`
    //   <div class="card center">
    //     <h1>{{ title }}</h1>
    //     <button class="btn" @click="title = 'Изменили!'">Изменить</button>
    //   </div>
    // `
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', { class: 'btn', onClick: this.changeTitle }, 'Изменить')
        ]);
    },
    beforeCreate() {
        console.log('Перед рендером');
    },
    created() {
        console.log('создан');
    },
    beforeMount(){
        console.log('Перед монтированием');
    },
    mounted() {
        console.log('после монтиования');
    },
    beforeUnmount(){
        console.log('Перед удалениеим');
    },
    beforeUnmount(){
        console.log('Удалили');
    },
    beforeUpdate(){
        console.log('Перед обновлением virtual DOM');
    },
    updated(){
        console.log('После обновления virtual DOM');
    }
})


app.mount('#app');
Vue.createApp({
    data(){
        return {
            title: 'New title 2'
        }
    }
}).mount('#app2')