import PropTypes from 'prop-types';

function Task({
  id, name, isComplete, editHandler, deleteHandler,
}) {
  return (
    <li className={['Task', isComplete ? 'complete' : ''].join(' ')}>
      {name}
      <button type="button" onClick={() => editHandler(id)}>✔</button>
      <button type="button" onClick={() => deleteHandler(id)}>X</button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Task;
