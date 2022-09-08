import { useEffect } from "react";
import { todoCollection, todosSearchQuery } from "../services/Todos";
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { useState } from "react";


export const useTodos = (categoryID) => {

    const [snapshot, setSnapshot] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const captureSnapshot = async () => {
            const query = await todosSearchQuery(categoryID)
            const unsubscribe = onSnapshot(query, (querySnapshot) => {
                setSnapshot(querySnapshot)
                setLoading(false)
            });
            return unsubscribe
        }
        captureSnapshot()
        return () => captureSnapshot().then((unsubscribe) => unsubscribe())
    }, [])

    return { snapshot, loading }
}