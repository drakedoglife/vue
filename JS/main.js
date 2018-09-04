var app = new Vue({
    el: '#app',
    data: {
        name: 'Yo.'
    }
})

var bpp = new Vue({
    el: '#bpp',
    data: {
        message: new Date().toLocaleString()
    }
})

var dpp = new Vue({
    el: '#dpp',
    data: {
        foods: [
            {menu: 'egg'},
            {menu: 'humber'},
            {menu: 'rice'}
        ],
        colorList: 'color: red'
    }
})

var cpp = new Vue({
    el: '#cpp',
    data: {
        seen: true
    }
})

var epp = new Vue({
    el: '#epp',
    data: {
        message: 'hello'
    },
    methods: {
        fanzhuan: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var fpp = new Vue({
    el: '#fpp',
    data: {
        groceryalist: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '热狗'}
        ]
    }
})