import React, { Component } from 'react';

import api from '../../services/api';
import Container from '../../components/Container';

import { Form, SubmitButton } from './styles';

export default class Main extends Component {

  handleSubmit = async e => {
    e.preventDefault();
  };

  render() {

    return (
      <Container>
        <h1>
          Nokia
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder=""
          />

          <SubmitButton>
            Enviar
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
