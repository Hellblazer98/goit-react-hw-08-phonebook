import PropTypes from 'prop-types';
import { Formik, Field} from 'formik';

import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, SubmitBtn } from './ContactForm.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';


const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  number: Yup.string()
    .min(2, 'Number is too short!')
    .max(50, 'Number is too long!')
    .required('Number is required'),
});


export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const findName = values.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === findName)) {
      alert(`${values.name} is already in contacts`);
      return
    }

    dispatch(addContact(values));
    actions.resetForm();

  }


    return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      validationSchema={ContactShema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormField>
            Name
            <Field name="name"/>
            <ErrorMessage name="name" component="span"/>
        </FormField>
        <FormField>
            Number
            <Field name="number" type="tel"/>
            <ErrorMessage name="number" component="span"/>
        </FormField>
            <SubmitBtn type="submit" onSubmit={onSubmit}>
                <BsFillPersonPlusFill size="15" />
                <span>Add contact</span>
            </SubmitBtn>
      </Form>
    </Formik>
    )
}

ContactsForm.propTypes = {
    onAddContact: PropTypes.func
}