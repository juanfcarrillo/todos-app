import { updateDoc } from "firebase/firestore";
import { getTodoRef } from "./getTodoRef";

export const updateTodo = async (id, options) => {

    const docRef = getTodoRef(id)

    await updateDoc(docRef, {
        ...options
    })
}