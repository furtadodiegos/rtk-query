import { Link } from 'react-router-dom';

import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <p>Home</p>

      <Link to="/authentication/onboarding">Login</Link>
    </div>
  );
};

export default Home;
