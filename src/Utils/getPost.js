
import { ref } from "vue"
import { db } from "../firebase/config.js"

const getPost = () => {
    const post = ref([])
    const error = ref()

    const getAllPost = async () => {
        let res = await db.collection("posts").orderBy("date", "desc").get()
        post.value = res.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })

    }
    return { post, error, getAllPost }
}

export default getPost