interface Expense{
    id:number,
    Description:string,
    Price:number,
    Category:string,
}
interface Props {
    expense:Expense[],
    onDelete:(id:number)=>void,
}
function ExpenseList({expense,onDelete}:Props)
{
    return (<table className="table table-bordered">
        <thead>
        <tr>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {expense.map((val)=>{
          return  (<tr key={val.id}>
              <td>{val.Description}</td>
              <td>{val.Price}</td>
              <td>{val.Category}</td>
              <td>
                  <button type="button" onClick={()=>{
                      onDelete(val.id);
                  }} className="btn btn-danger">Delete</button>
              </td>

          </tr>)
        })}
        </tbody>
        <tfoot>
        <tr>
            <td>Total</td>
            <td>{expense.reduce((acc,result)=> acc + result.Price,0)}</td>
        </tr>
        </tfoot>
    </table>);
}

export default ExpenseList;