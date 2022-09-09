import { query, where, doc } from "firebase/firestore";
import { todoCollection } from "./todoCollection";
import firestore from "../firebase";

export const todosSearchQuery = async ( categoryID ) => {
    
    const docCategoryRef = doc(firestore, 'categories', categoryID)

    return query(todoCollection, where("category_id", "==", docCategoryRef))
}
