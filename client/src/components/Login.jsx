import { useState } from 'react';
import styles from '../styles/Main.module.css'
import { Link } from 'react-router-dom';

const FIELDS = {
    USERNAME: 'username',
    ROOM: 'room',
}

const Login = () => {
    const {USERNAME, ROOM} = FIELDS;
    const [chatValues, setChatValues] = useState({[USERNAME]: '', [ROOM]: ''});

    const handleChange = ({target: {value, name}}) => {
        setChatValues({...chatValues, [name]: value})
    }
    console.log(chatValues)
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Login</h1>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <input 
                            type="text" 
                            name={'username'} 
                            placeholder='Username'
                            value={chatValues[USERNAME] }
                            className={styles.input} 
                            onChange={handleChange}
                            autoComplete='off'
                            required    
                        />
                    </div>
                    <div className={styles.group}>
                        <input 
                            type="text" 
                            name={'room'}
                            placeholder='Room'
                            value={chatValues[ROOM]} 
                            className={styles.input} 
                            onChange={handleChange}
                            autoComplete='off'
                            required                            
                        />
                    </div>

                    <Link to={`/chat?name=${chatValues[USERNAME]}&room=${chatValues[ROOM]}}`}>
                        <button type='submit' className={styles.button}>Sing In</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;