import { useGetPostQuery } from "../Redux/Slice/Api";

const RTK_Part = () => {
    const {data,isLoading,isError} =useGetPostQuery();
    console.log(data);
    if(isLoading){
        return <p>Loading</p>
    }
    if(isError && !isLoading){
return <p>Something went wrong</p>
    }
    return (
        <div>
            
        </div>
    );
};

export default RTK_Part;