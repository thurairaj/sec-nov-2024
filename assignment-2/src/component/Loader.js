export default function Loader({ isLoading, children }) {
  return (
    <div>
      {isLoading && <p>Loading.. </p>}
      {!isLoading && children}
    </div>
  );
}
