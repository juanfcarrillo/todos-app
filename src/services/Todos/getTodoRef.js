import { doc } from "firebase/firestore";
import firestore from "../firebase";

export const getTodoRef = (id, options) => {

    const collectionName = 'todos'

    const docRef = doc(firestore, collectionName, id)
    return docRef
}