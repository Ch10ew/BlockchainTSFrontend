import { FormEvent } from 'react';

import utilStyles from '../styles/utils.module.css';

export default function Form({
    errorMessage,
    onSubmit,
}: {
    errorMessage: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
    return (
        <form onSubmit={onSubmit}>
            <label className={utilStyles.center}>
                <span>Username</span>
                <input type='text' name='username' required />
                <span>Password</span>
                <input type='password' name='password' required />
            </label>

            <button className={utilStyles.center} type='submit'>Login</button>

            {errorMessage && <p className={`error ${utilStyles.center}`}>{errorMessage}</p>}
        </form>
    );
}
