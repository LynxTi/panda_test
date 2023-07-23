import Vuex from "vuex";
import axios from "axios";

let loading = false

export default new Vuex.Store({
    state: {
        tasks: []
    },
    actions: {
        async getTasks (context) {
            loading = true
            const {data} = await axios.get('https://649c70a40480757192382a02.mockapi.io/tasks')
            context.commit('setTasks', data)
            loading = false

        },
         async getTaskById ({state}, id) {
            const task = await state.tasks.find(item => item.id === id)
             return task
         },
        async createNewTask (_, task) {
            if (loading) return
            loading = true
            await axios.post(`https://649c70a40480757192382a02.mockapi.io/tasks`, {title: task.title, content: task.content })
            loading = false
        },
        async editTask (_, task) {
            if (loading) return
            loading = true
            await axios.put(`https://649c70a40480757192382a02.mockapi.io/tasks/${task.id}`, {title: task.title, content: task.content })
            loading = false
        },
        async deleteTask (context, id) {
            if (loading) return
            loading = true
            await axios.delete(`https://649c70a40480757192382a02.mockapi.io/tasks/${id}`)
            loading = false

        }
    },
    mutations: {
        setTasks (state, tasks) {
            state.tasks = tasks
        },
    }
})