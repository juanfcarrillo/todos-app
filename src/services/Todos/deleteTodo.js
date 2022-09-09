import { deleteDoc } from "firebase/firestore"
import { getTodoRef } from "./getTodoRef"

export const deleteTodo = async (id) => {

    const todoDocRef = getTodoRef(id)

    await deleteDoc(todoDocRef)
}