export default function Cert({ transaction, artwork }) {
  console.log(artwork);
  console.log(transaction);
  return (
    <div>
      {transaction && artwork && (
        <>
          <h1>Proud Owner of artwork {artwork.label}</h1>
          <h2>By someone {transaction.to.username}</h2>
        </>
      )}
    </div>
  );
}
