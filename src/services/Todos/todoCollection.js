import firestore from "../firebase";
import { collection } from "firebase/firestore";

export const todoCollection = collection(firestore, 'todos')

