import { FormEvent } from 'react';

import utilStyles from '../styles/utils.module.css';

export default function SignupForm({
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
                <span>Confirm Password</span>
                <input type='password' name='confirmPassword' required />
            </label>
            <div className={utilStyles.row}>
                <div className={utilStyles.item}>
                    <input className={utilStyles.radio} type='radio' id='artist' name='userType' value='ARTIST' />
                </div>
                <div className={utilStyles.item}>
                    <label>Artist</label>
                </div>
            </div>
            <div className={utilStyles.row}>
                <div className={utilStyles.item}>
                    <input className={utilStyles.radio} type='radio' id='collector' name='userType' value='COLLECTOR' />
                </div>
                <div className={utilStyles.item}>
                    <label>Collector</label>
                </div>
            </div>

            <button className={utilStyles.center} type='submit'>Sign Up</button>

            {errorMessage && <p className={`error ${utilStyles.center}`}>{errorMessage}</p>}
        </form>
    );
}
