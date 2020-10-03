import React, { Component } from 'react';

import api from '../../services/api';
import Container from '../../components/Container';
import Teclado from '../../components/Teclado';
import Top from '../../components/Top';

import { Form, SubmitButton } from './styles';

export default class Main extends Component {

  handleSubmit = async e => {
    e.preventDefault();
  };

  handleButton2 = async e => {

  }

  render() {

    return (
      <Container>
        <Top />

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder=""
          />

          <SubmitButton >
            Enviar
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
