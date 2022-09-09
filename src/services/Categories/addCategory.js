import { addDoc } from "firebase/firestore";
import { categoryCollection } from "./categoryCollection";

export const addCategory = async ({content}) => {

    await addDoc(categoryCollection, {
        content
    })

}

