import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import Contexts from './contexts';
import App from './app';

ReactDOM.render(
  <StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
