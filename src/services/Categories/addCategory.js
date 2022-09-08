import { collection, addDoc, doc} from "firebase/firestore";
import firestore from "../firebase";

export const addCategory = async ({content}) => {

    const collectionName = 'categories'

    const categoryCollection = collection(firestore, collectionName)
    const docRef = await addDoc(categoryCollection, {
        content
    })

}

