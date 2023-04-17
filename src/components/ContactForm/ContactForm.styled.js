import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError, Field } from "formik";

export const Form = styled(FormikForm)`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    color: #757575;
    font-weight: 500;
    font-size: 20px;
`;

export const FormLabel = styled.span`
  display: block;
  margin-bottom: 20px;
  color: #757575;
  font-weight: 500;
  font-size: 20px;
`;

export const InputContact = styled(Field)`
    display: block;
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    width: 238px;

    @media screen and (min-width: 481px) {
        width: 298px;
    }

    :focus {
        outline-color: #f50057;
    }
`

export const ErrorMessage = styled(FormikError)`
    color: tomato;
    font-size: 13px;
`

