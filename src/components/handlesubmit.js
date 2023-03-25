import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const handleSubmit = (review) => {
    const ref = collection(firestore, review.db) // Firebase creates this automatically
    
    try {
        addDoc(ref, review)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit