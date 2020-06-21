import React, { useCallback, useState, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Backgroung } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email valido')
          .required('Informe seu e-mail'),
        password: Yup.string().required('A senha é obrigatoria'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const err = getValidationErrors(error);

      formRef.current?.setErrors(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit} ref={formRef}>
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
        </Form>
      </Content>
      <Backgroung />
    </Container>
  );
};

export default SignIn;
