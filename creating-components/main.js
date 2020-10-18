Vue.component('task-list', {
    template: '<task v-for="task in tasks">  {{ task.description }} </task>',
    data() {
        return {
            tasks: [
                { description: 'Go to Bank in Brazil' },
                { description: 'Go do other stuff' },
                { description: 'Go to another bullshit stuff' }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li> <slot></slot> </li>'
});

new Vue({
    el: '#root',
});