import PropTypes from 'prop-types';
import { DeleteButton } from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </>
  );
};

ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
