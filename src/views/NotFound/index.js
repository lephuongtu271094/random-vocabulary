
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Not Found</h1>
    <p>
      <Link to="/">Go back</Link>
    </p>
  </div>
);

export default NotFound;