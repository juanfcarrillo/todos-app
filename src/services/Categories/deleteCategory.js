import { doc, deleteDoc } from "firebase/firestore";
import firestore from "../firebase";

export const deleteCategory = async ({id}) => {

    const collectionName = 'categories'
    const docRef = doc(firestore, collectionName, id)

    await deleteDoc(docRef)
}

