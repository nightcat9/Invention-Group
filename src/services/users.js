import { getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./db.js"

const collection_name = "users"

export const findAllUsers = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(users => {
        res.push({
            id: users.id, 
            ...users.data()
        })
    })

    return res
}