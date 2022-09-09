import firestore from "../firebase"
import { updateDoc, doc } from "firebase/firestore"


export const updateCategory = async ({id, content}) => {

    const collectionName = 'categories'

    const docRef = doc(firestore, collectionName, id)
    await updateDoc(docRef, {
      content
    })
}

