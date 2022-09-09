import { getDoc } from "firebase/firestore";
import firestore from "../firebase";
import { getTodoRef } from "./getTodoRef";
import { updateTodo } from "./updateTodo";

export const toggleCompleteTodo = async (id) => {

    const docRef = getTodoRef(id)
    const todoDoc = await getDoc(docRef)

    const completed = todoDoc.data().completed

    await updateTodo(id, {
        completed: !completed
    })
} 