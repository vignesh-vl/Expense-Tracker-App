import Cateogory from "../Cateogory.ts";
interface Props{
    onChangeCat:(val:string)=>void,
}
function Filter({onChangeCat}:Props)
{
    return (<><h3 className="mb-4">Table Filter</h3><select className="form-select mb-5" aria-label="Categories" onChange={(event)=>{onChangeCat(event.target.value)}}>
        {Cateogory.map((val)=>{return <option key={val} value={val} >{val}</option>})}
    </select></>)
}

export default Filter;