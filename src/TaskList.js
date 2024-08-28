import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ tasks, editHandler, deleteHandler }) {
  return (
    <div className="TaskList">
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          isComplete={task.isComplete}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TaskList;
