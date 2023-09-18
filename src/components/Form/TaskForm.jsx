import { Controller, useForm } from 'react-hook-form';
import MyModal from '../../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { AddSlice } from '../../Redux/Slice/Taskslice';

const TaskForm = ({ isOpen, setIsOpen ,item}) => {
    const dispatch=useDispatch();
  const { register, handleSubmit, control, reset } = useForm();
  const onSubmit = (data) =>{ console.log(data);
dispatch(AddSlice(data))
reset();
closeModal();

};
  function closeModal() {
    setIsOpen(false);
  }
  const handleCancelClick = () => {
    reset();
    closeModal();
  };

  return (
    <MyModal setIsOpen={setIsOpen} isOpen={isOpen} title={"Add New Task"} closeModal={closeModal}>
      {/* Move the <form> outside of the <p> element */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" defaultValue={item?item.title:""} {...register("title")} />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="description">Description</label>
          <Controller
            name="description"
            control={control}
            defaultValue={item?item.description:""}
            render={({ field }) => (
              <textarea {...field} rows="4" cols="50" />
            )}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="deadline">Deadline</label>
          <input type="date" id="deadline" defaultValue={item?item.deadline:""} {...register("deadline")} />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="assign_person">Assign to</label>
          <select {...register("assign_person")} id="assign_person" defaultValue={item?item.assign_person:""}>
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Tasnia Sharin">Tasnia Sharin</option>
            <option value="Tasnim Akter">Tasnim Akter</option>
            <option value="Shabbir Hossain">Shabbir Hossain</option>
            <option value="Nowshin Anjum">Nowshin Anjum</option>
            <option value="Fahim Khan">Fahim Khan</option>
          </select>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="priority">Priority</label>
          <select {...register("priority")} id="priority" defaultValue={item?item.priority:""}>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="medium">medium</option>

          </select>
        </div>

        <div className='flex flex-row justify-end gap-3'>
          <input
            type="button"
            onClick={handleCancelClick}
            value="Cancel"
            className='btn btn-danger'
          />
{item?"":<input type="submit" value="Submit" className='btn btn-primary' />
}
        </div>
      </form>
    </MyModal>
  );
};

export default TaskForm;
