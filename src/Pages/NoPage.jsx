// src/components/NoPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-grey-500 hover:underline">
        Go back to Home pge
      </Link>
    </div>
  );
};

export default NoPage;
