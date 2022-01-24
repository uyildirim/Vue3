import { ref } from "vue";
import { db, timestamp } from "./config";

const postCollection = db.collection("posts")

export const createPost = (data) => {
    console.log(data)
    postCollection.add({ ...data, createAt: timestamp() });
}
export const getPost = () => {
    const post = ref([])
    const error = ref()

    const getAllPost = async () => {
        let res = await postCollection.get()
        post.value = res.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })


    }
    return { post, error, getAllPost }
}