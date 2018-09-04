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
        ]
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