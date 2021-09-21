import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => {
  return (
    <div>
      <p>Onboarding</p>

      <Link to="/authentication/login">SIGNIN/SIGNUP</Link>
    </div>
  );
};

export default Onboarding;
