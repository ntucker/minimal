import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import RootProvider from './RootProvider';
import App from './App';

const content = (
  <RootProvider>
    <App />
  </RootProvider>
);

ReactDOM.render(
  <StrictMode>{content}</StrictMode>,
  document.getElementById('react'),
);
