import Cateogory from "../Cateogory.ts";
import {useForm} from 'react-hook-form';
interface expenseFormdata{
    Description:string;
    Price:number;
    Category:string;
}
interface Props {
    onUpdateList:(data:expenseFormdata)=>void;
}

function Form({onUpdateList}:Props)
{
    const { register,handleSubmit,formState: { errors },reset} = useForm();
     function onhandleSubmit(data)
     {
       onUpdateList(data);
       reset();
     }
    return(
        <>
        <h3 className="mb-4"> Expense Form </h3>
        <form className="mb-4" onSubmit={handleSubmit(onhandleSubmit)}>
        <div className="form-group mb-3">
            <label className="mb-1" htmlFor="Description">Description</label>
            <input  {...register("Description")} type="text" className="form-control" id="Description" aria-describedby="emailHelp"
                   placeholder="Enter description"></input>
        </div>
        <div className="form-group mb-3">
            <label   className="mb-1" htmlFor="Price">Price </label>
            <input {...register("Price")} type="number" className="form-control" id="Price" placeholder="Enter Price"></input>
        </div>
        <label  className="mb-1" htmlFor="Category">Category</label>
        <select {...register("Category")} id ="Category" className="form-select mb-3" aria-label="Categories">
            {Cateogory.map((val) => {
                return <option key={val} value={val}>{val}</option>
            })}
        </select>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form></>)
}

export default Form;