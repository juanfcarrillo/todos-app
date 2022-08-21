import FormTodoBase from './FormTodoBase'
import { FiTrash } from 'react-icons/fi'
import { doc, deleteDoc } from "firebase/firestore";

import firestore from '../../services/firebase';


const FormTodoEdit = ({id, exitForm}) => {

    const handleDelete = async ({id}) => {
        await deleteDoc(doc(firestore, 'categories', id))
        exitForm()
    }
    
    return(
        <FormTodoBase exitForm={exitForm} id={id}>
            <button className="button shadow border" onClick={() => handleDelete({id})}><FiTrash/></button>
        </FormTodoBase>
    )
}

export default FormTodoEdit