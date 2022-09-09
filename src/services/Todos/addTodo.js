import { todoCollection } from "./todoCollection"
import { addDoc, doc } from "firebase/firestore"
import firestore from "../firebase"

export const addTodo = ( content, CategoryID ) => {

    const categoryDocRef = doc(firestore, 'categories', CategoryID)
    const actualDate = new Date().valueOf()

    addDoc(todoCollection, {
        category_id: categoryDocRef,
        content: content,
        completed: false,
        created_at: actualDate
    })

}