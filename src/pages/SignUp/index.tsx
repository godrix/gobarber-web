import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Backgroung } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSumit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string()
          .required('Email Obrigatorio')
          .email('Digite um email valido'),
        password: Yup.string().min(
          6,
          'A senha deve ter no minimo 6 caracteres',
        ),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const err = getValidationErrors(error);
      formRef.current?.setErrors(err);
    }
  }, []);

  return (
    <Container>
      <Backgroung />
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSumit} ref={formRef}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
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
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
