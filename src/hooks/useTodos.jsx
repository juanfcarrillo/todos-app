import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { todosSearchQuery } from "../services/Todos";


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
        const snap = captureSnapshot()
        return () => snap.then((unsubscribe) => unsubscribe())
    }, [])

    return { snapshot, loading }
}