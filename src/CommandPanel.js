import PropTypes from 'prop-types';

function CommandPanel({ changeHandler, submitHandler, currTask }) {
  return (
    <div className="CommandPanel">
      <h2>Command Panel</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={currTask} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

CommandPanel.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  currTask: PropTypes.string.isRequired,
};

export default CommandPanel;
