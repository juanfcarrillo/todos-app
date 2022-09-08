import { query, where, getDoc, getDocs, collection, doc } from "firebase/firestore";
import { todoCollection } from "./todoCollection";
import firestore from "../firebase";

export const todosSearchQuery = async ( categoryID ) => {
    const docRef = doc(firestore, 'categories', categoryID)

    const docSnap = await getDoc(docRef)

    return query(todoCollection, where("category_id", "==", docRef))
}
