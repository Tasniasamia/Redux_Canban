import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; // Import useEffect
import { collectTask } from '../../Redux/Slice/UserSlice';
import MyTaskCard from './MyTaskCard';

const MyTasks = () => {
  const { Task } = useSelector((state) => state.TaskSlice);
  const { username} = useSelector((state) => state.userSlice);
  const specificUser=useSelector((state=>state.userSlice));
  console.log(specificUser);
  const MyTask = Task.filter((item) => item.assign_person === username);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action when the component is mounted
    dispatch(collectTask(MyTask));
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className="h-[750px] overflow-auto space-y-3">
     { MyTask.map((item) => (
          <MyTaskCard key={item.id} item={item}/>
        
        ))

     }  
      </div>
    </div>
  );
};

export default MyTasks;
