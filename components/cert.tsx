import utilStyles from '../styles/utils.module.css';

export default function Cert({ transaction, artwork }) {
    return (
        <div>
            {transaction && artwork && (
                <div className={utilStyles.cert}>
                    <hr />
                    <h1 className={utilStyles.center}>Certificate of Ownership</h1>
                    <br />
                    <br />
                    <br />
                    <h3 className={utilStyles.center}>Proud Owner of Artwork</h3>
                    <h2 className={utilStyles.center}>"{artwork.label}"</h2>
                    <h3 className={utilStyles.center}>Owned by {transaction.to.username}</h3>
                    <hr />
                </div>
            )
            }
        </div >
    );
}
