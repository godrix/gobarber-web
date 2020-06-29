import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
import Toast from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <Toast />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
