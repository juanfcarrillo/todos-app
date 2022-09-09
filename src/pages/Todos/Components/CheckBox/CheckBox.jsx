import styles from './styles/CheckBox.module.css';
import { getTodoRef, toggleCompleteTodo } from '../../../../services';
import { useRef } from 'react';
import { useEffect } from 'react';

const CheckBox = ({id, ...props}) => { 

	const handleComplete = async () => {
		checkboxRef.current.parentElement.classList.toggle('crossed')
		await toggleCompleteTodo(id)
	}

	useEffect(() => {
		checkboxRef.current.checked = props.completed ? true : false;
		checkboxRef.current.parentElement.classList.add(props.completed && 'crossed')
	},[])

	const checkboxRef = useRef()

	return <input ref={checkboxRef} name="complete" type="checkbox" onClick={handleComplete} className={`${styles.CheckBox}`}/>
};

export default CheckBox;

 