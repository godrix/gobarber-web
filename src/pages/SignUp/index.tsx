import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Backgroung } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Backgroung />
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="text" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>

          <a href="account">
            <FiArrowLeft />
            Voltar para Logon
          </a>
        </form>
      </Content>
    </Container>
  );
};

export default SignUp;
