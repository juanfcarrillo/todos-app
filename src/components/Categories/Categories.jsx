
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from "firebase/firestore";
import CategoryElem from './CategoryElem';
import HorizontalLoader from "../Loaders/HorizontalLoader"
import FormPopUpEdit from "../FormTodoPopUp/PopUpEdit/FormPopUpEdit";

import firestore from '../../services/firebase';
import { useState } from 'react';

const Categories = () => {
    const [snapshot, loading, error] = useCollection(collection(firestore, 'categories'))

    const [popUpProperties, setPopUpProperties] = useState({
        form: {
            open: false,
            currentId: null,
            content: "",
        }
    })

    const openForm = ({id, content}) => {
        setPopUpProperties((popUpProperties) => {return {
            ...popUpProperties,
            form: {
                open: true,
                currentId: id,
                content: content,
            }
        }})
    }
    
    const exitForm = () => {
        setPopUpProperties((popUpProperties) => {return {
            ...popUpProperties,
            form: {
                open: false,
                currentId: null,
                content: "",
            }
        }})
    }

    return(
        <>
            { loading && <HorizontalLoader/>}
            {
                popUpProperties.form.open && (
                    <FormPopUpEdit
                      exitForm={exitForm}
                      content={popUpProperties.form.content}
                      id={popUpProperties.form.currentId}
                    />
                )
            }
            {
                snapshot?.docs?.length ? 
                snapshot.docs.map((doc) => (
                    <CategoryElem key={doc.id} id={doc.id} openForm={openForm} content={doc.data().categoryName}>
                        {doc.data().categoryName}
                    </CategoryElem>
                )):
                !loading && <h2 className='mg-tp-5'>Agregue Categorias</h2>
            }
        </>
    )
}

export default Categories