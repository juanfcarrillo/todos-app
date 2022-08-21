
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from "firebase/firestore";
import CategoryElem from './CategoryElem';

import firestore from '../../services/firebase';
import { useState } from 'react';

const Categories = () => {
    const [snapshot, loading, error] = useCollection(collection(firestore, 'categories'))
    const [openEdit, setOpenEdit] = useState(false)
    const openForm = () => {
        setOpenEdit(true)
    }
    
    const exitForm = () => {
      setOpenEdit(false)
    }

    return(
        <>
            {snapshot?.docs?.map((doc) => (
                <CategoryElem key={doc.id} id={doc.id} openForm={openForm} exitForm={exitForm} openEdit={openEdit}>
                    {doc.data().categoryName}
                </CategoryElem>
            ))}
        </>
    )
}

export default Categories