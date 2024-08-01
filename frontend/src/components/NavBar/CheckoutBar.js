import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutBar() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row items-center bg-primary-500 p-4 text-white">
        <div className="flex justify-center w-full">
        <button className="flex-shrink-0">
            <Link to="/">
              <img src='/assets/logo-white.png' alt="Logo" className="w-[120px]" />
            </Link>
          </button>
        </div>
        <div className="flex flex-row space-x-10">
        <div>
            <button className="hover:bg-primary-400 rounded-full p-2">
              <Link to="/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBar;
