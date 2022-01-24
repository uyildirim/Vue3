import { ref } from "vue";
import { db, timestamp } from "./config";

const userCollection = db.collection("users")

export const createUser = function (user) { 
    userCollection.add({ ...user, date: timestamp() })
}
export const getAllUsers = () => {
    const users = ref([])

    const allUsers = async () => {

        let user = await userCollection.get();
        users.value = user.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
    }

    return { users, allUsers }

}
export const deleteUser = (id) => {
    return userCollection.doc(id).delete()
}