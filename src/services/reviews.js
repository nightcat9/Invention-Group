import { getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./db.js"

const collection_name = "review"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(review => {
        res.push({
            id: review.id, 
            ...review.data()
        })
    })

    return res
}