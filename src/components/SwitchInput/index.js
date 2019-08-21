import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input + span {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: #2196f3;
  }
  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const SpanStyled = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const InputStyled = styled.input``;

const Switch = ({ value }) => (
  <LabelStyled>
    <InputStyled type="checkbox" name={value} />
    <SpanStyled />
  </LabelStyled>
);

export default Switch;
