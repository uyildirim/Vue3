import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        name: "Vuex",
        userData: []
    },
    getters: {
        name: state => state.name,
        getUserData: state => state.userData
    },
    mutations: {
        setUpdateUserData(state, item) {
            state.userData.push(item)
        },
        setGetAllUserData(state, item) {
            state.userData = item
        }
    },
    actions: {
        getAllUserData() {
            axios
                .get("http://localhost:3000/users")
                .then((res) => {
                    store.commit("setGetAllUserData", res.data)
                });
        },
        saveData({ commit }, item) {
            axios.post("http://localhost:3000/users", item).then((res) => {
                commit("setUpdateUserData", res.data)
            });
        }
    }
})

export default store