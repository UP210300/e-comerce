import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl font-bold mb-2">Lo sentimos, ha ocurrido un error inesperado.</p>
      <p className="text-lg italic mb-6">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
        <Link to="/">Regresar a la página principal</Link>
      </button>
    </div>
  );
}
