import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';


export default function Header() {
    return (
        <header>
            <nav>
                <ul className={utilStyles.navbar}>
                    <li className={utilStyles.navbar}>
                        <Link href="/">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className={utilStyles.navbar}>
                        <Link href="/login">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Login
                            </a>
                        </Link>
                    </li>
                    <li className={utilStyles.navbar}>
                        <Link href="/artworks">
                            <a className={utilStyles.navbar} rel="noopener noreferrer">
                                Artworks
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}