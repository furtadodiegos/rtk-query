import type { PartialRouteObject } from 'react-router-dom';

import auth from '../app/auth';
import posts from '../app/cars';
import guestRoutes from '../app/common/pages';

export default [guestRoutes, auth, posts] as PartialRouteObject[];
