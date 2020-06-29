import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/AuthContext';

import { Container, Content, Backgroung } from './styles';

interface SigInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { sigIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: SigInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Informe um email valido')
            .required('Informe seu e-mail'),
          password: Yup.string().required('A senha é obrigatoria'),
        });

        await schema.validate(data, { abortEarly: false });

        sigIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const err = getValidationErrors(error);

          formRef.current?.setErrors(err);
        }

        // TODO
        // [] DISPARAR UM TOAST
      }
    },
    [sigIn],
  );

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
