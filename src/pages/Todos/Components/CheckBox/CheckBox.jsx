import { forwardRef } from 'react';
import styles from './styles/CheckBox.module.css';

const CheckBox = forwardRef(({...props}, ref) => { 
	return <input ref={ref} name="complete" type="checkbox" className={`${styles.CheckBox}`} {...props}/>
});

export default CheckBox;