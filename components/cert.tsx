

export default function Cert({ transaction }) {
    return (
        <div>
            <h1>Proud Owner of artwork {transaction.artwork.label}</h1>
            <h2>By someone {transaction.to.username}</h2>
        </div>
    );
}