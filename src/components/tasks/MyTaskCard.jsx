import { CheckIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../Redux/Slice/Taskslice';
import { useState } from 'react';
import TaskForm from '../Form/TaskForm';

const MyTaskCard = ({item}) => {
    let updatedStatusValue; 
    const dispatch = useDispatch();
  
    if (item.status === "pending") {
      updatedStatusValue = "done";
    } else if (item.status === "running") {
      updatedStatusValue = "done";
    } else {
        updatedStatusValue = "archive";
    }

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
      setIsOpen(true)
    }
    return (
        <>
        <TaskForm  isOpen={isOpen} setIsOpen={setIsOpen} item={item}></TaskForm>

        <div
        key={item?.id}
        className="bg-secondary/10 rounded-md p-3 flex justify-between"
      >
        <h1>{item?.title}</h1>
        <div className="flex gap-3">
          <button className="grid place-content-center" title="Details" onClick={openModal}>
            <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
          </button>
          <button className="grid place-content-center" title="Done"  onClick={() =>
            dispatch(updateStatus({ id: item.id, status: updatedStatusValue })) // Use the updatedStatusValue here
          }>
            <CheckIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
      </>
    );
};

export default MyTaskCard;