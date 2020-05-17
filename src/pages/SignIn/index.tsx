import React from 'react';

import { Container, Content, Backgroung } from './styles';

import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">

            Esqueci minha senha
          </a>
          <a href="#">
            <FiLogIn />
Criar Conta
          </a>
        </form>
      </Content>
      <Backgroung />
    </Container>
  );
};

export default SignIn;
