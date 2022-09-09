import { getTodoRef } from "./getTodoRef";
import { getDoc } from "firebase/firestore";

export const getTodo = (id, options) => getDoc(getTodoRef(id))
