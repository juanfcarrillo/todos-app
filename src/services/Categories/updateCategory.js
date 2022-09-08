import firestore from "../firebase"
import { updateDoc, doc } from "firebase/firestore"


export const updateCategory = async ({id, content}) => {

    const collectionName = 'categories'

    const categoryDocument = doc(firestore, collectionName, id)
    const docRef = await updateDoc(categoryDocument, {
      content
    })
}

