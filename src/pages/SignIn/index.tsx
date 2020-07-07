import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, AnimationContainer, Backgroung } from './styles';

interface SigInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { sigIn } = useAuth();
  const { addToast } = useToast();
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

        await sigIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const err = getValidationErrors(error);

          formRef.current?.setErrors(err);
          return;
        }

        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description:
            'Ocorreu um erro ao fazer o login, verifique suas credenciais',
        });
      }
    },
    [sigIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
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
            <Link to="signup">
              <FiLogIn />
              Criar Conta
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
      <Backgroung />
    </Container>
  );
};

export default SignIn;
