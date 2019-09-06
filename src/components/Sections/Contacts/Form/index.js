import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { addContact as addContactAction } from 'redux/Contacts/Contacts.actions';

import { Form } from 'components/Form';
import Heading from 'components/Heading';
import Input from 'components/Input';

import Button from 'components/Button';

import useForm from 'hooks/useForm';
import Card from 'components/Card';

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const SubmitButton = styled(Button)`
  margin-top: 15px;
  width: 50%;
`;

const ContactAddForm = ({ addContact }) => {
  const [isFormShown, setShow] = useState(false);
  const [updateValue, values, submitForm] = useForm({
    name: '',
    email: '',
    city: '',
  });
  const submitFunc = e => {
    e.preventDefault();
    submitForm();

    const { name, email, city } = values;
    addContact(name, email, city);
  };

  const renderInputs = () => {
    const valuesArray = Object.keys(values);
    return valuesArray.map(value => (
      <Input
        key={value}
        id={value}
        name={value}
        type="text"
        required
        placeholder={value}
        onChange={updateValue}
        onBlur={updateValue}
      />
    ));
  };

  return (
    <Card>
      <Heading small>Add contact</Heading>
      <FormStyled isShown={isFormShown} onSubmit={submitFunc}>
        {renderInputs()}

        <SubmitButton type="submit">add</SubmitButton>
      </FormStyled>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  addContact: (username, email, city) => dispatch(addContactAction(username, email, city)),
});

ContactAddForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default connect(
  null,
  mapDispatchToProps,
)(ContactAddForm);
