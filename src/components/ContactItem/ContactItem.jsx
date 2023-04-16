import PropTypes from 'prop-types';
import { BsPersonLinesFill, BsFillPersonXFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
    const dispatch = useDispatch();

    return (
        <>
            <BsPersonLinesFill size="20"/>
            <span>{name}: </span>
            <span>{number}</span>
            <DeleteBtn type='button' onClick={() => dispatch(deleteContact(id))}>
                <BsFillPersonXFill size="15" />
                <span>Delete</span>
            </DeleteBtn>
        </>
    )
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
};