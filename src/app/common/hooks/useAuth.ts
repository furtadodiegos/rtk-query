import { useContext } from 'react';

import { AuthContext } from '../../../contexts/auth';
import type { AuthProps } from '../../../contexts/auth';

const useAuth = (): AuthProps => useContext(AuthContext);

export default useAuth;
