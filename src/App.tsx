import ExpenseList from "./Expense/ExpenseList.tsx";
import {useState} from "react";
import Filter from "./Expense/Filter.tsx";
import Form from "./Expense/Form.tsx";

function  App(){

    const [category, setCategory] = useState('')
    const [Expense, setExpense] = useState([
        {   id:1,
            Description:"expense-1",
            Price:30,
            Category:"Entertainment"
        },
        {   id:2,
            Description:"expense-2",
            Price:30,
            Category:"Grocery"
        },
        {   id:3,
            Description:"expense-3",
            Price:30,
            Category:"Food"
        },
        {   id:4,
            Description:"expense-4",
            Price:30,
            Category:"Food"
        },
        {   id:5,
            Description:"expense-5",
            Price:80,
            Category:"Entertainment",
        }


    ])
    function handleDelete(id:number)
    {
        console.log(id);
        setExpense(Expense.filter((val)=>{ return val.id!=id}));
    }
    const visibleExpense= (category&&category !="All")?Expense.filter((vals)=>{ return vals.Category==category}):Expense;

    return <><Form onUpdateList={(data)=>{
        setExpense([...Expense,{...data,Price: parseInt(data.Price),id:Expense.length+1}]);
    }}/><Filter onChangeCat={(val:string)=>{setCategory(val)}}/><ExpenseList onDelete={handleDelete} expense={visibleExpense}/></>
}
export default App;