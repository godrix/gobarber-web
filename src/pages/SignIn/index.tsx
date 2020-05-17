import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Backgroung } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
          <a href="account">
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
