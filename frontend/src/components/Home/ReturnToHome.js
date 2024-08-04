import React from 'react';
import { Link } from 'react-router-dom';

function returnToHome({message}) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <p className="text-2xl text-gray-600 font-bold mb-2">{message}</p>
            <Link to="/" className="w-full max-w-xs">
                <button className="w-full px-6 py-2 text-lg font-bold text-white bg-primary-500 rounded">
                    Regresar a la página principal
                </button>
            </Link>
        </div>
    )
}

export default returnToHome;