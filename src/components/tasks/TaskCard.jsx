import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { RemoveData, updateStatus } from '../../Redux/Slice/Taskslice'; // Import your updateStatus action creator
import { useDispatch } from 'react-redux';

const TaskCard = ({ task }) => {
  let updatedStatusValue; // Rename the variable to avoid conflict
  const dispatch = useDispatch();

  if (task.status === "pending") {
    updatedStatusValue = "running";
  } else if (task.status === "running") {
    updatedStatusValue = "done";
  } else {
    updatedStatusValue = "archive";
  }

  return (
    <>
    <div className="bg-secondary/10 rounded-md p-5">
    <h1
      className={`text-lg font-semibold mb-3  ${
        task.priority === 'High' ? 'text-red-500' : ''
      } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
        task.priority === 'Low' ? 'text-green-500' : ''
      }`}
    >
      {task?.title}
    </h1>
    <p className="mb-3">{task?.description}</p>
    <p className="text-sm">Assigned to - {task?.assign_person}</p>
    <div className="flex justify-between mt-3">
      <p>{task?.deadline}</p>
      <div className="flex gap-3">
        <button onClick={() => dispatch(RemoveData(task.id))} title="Delete">
          <TrashIcon className="h-5 w-5 text-red-500" />
        </button>
        <button
          onClick={() =>
            dispatch(updateStatus({ id: task.id, status: updatedStatusValue })) // Use the updatedStatusValue here
          }
          title="In progress"
        >
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </button>
      </div>
    </div>
  </div> 
    
   
    </>
    
    
  );
};

export default TaskCard;
