import React from 'react';
import ClobalStyle from './styles/global';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <SignIn />
    <ClobalStyle />
  </>
);

export default App;
