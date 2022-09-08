import firestore from "../firebase";
import { collection } from "firebase/firestore";

export const categoryCollection = collection(firestore, "categories")

