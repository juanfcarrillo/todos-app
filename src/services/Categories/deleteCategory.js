import { doc, deleteDoc } from "firebase/firestore";
import firestore from "../firebase";

export const deleteCategory = async ({id}) => {

    const collectionName = 'categories'

    await deleteDoc(doc(firestore, collectionName, id))
}

