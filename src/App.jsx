import { useRef, useState } from "react"

function App() {


  const Inputtag=useRef()

   // Initialize state with an array
   const initialArray = [];
   const [dataArray, setDataArray] = useState(initialArray);
   const [title,setTitle]=useState()
   const [Id,setId]=useState(1)
   const [state,setState]=useState(0)
   const [btn,setBtn]=useState(false)
   const [passId,setPassId]=useState()
 
   // Function to add more data to the array
   const addData = () => {

      setId(Id+1)
      // Create a new array by spreading the existing data array and appending new data
      const newDataArray = [...dataArray, title];
  
      // Update the state with the new array
      setDataArray(newDataArray);
  
 
   };
console.log("how is it",dataArray);



function deleteData(Id){
  console.log("Id is where",Id);
dataArray.splice(dataArray.findIndex((index)=>index.Id===Id),1) 
setState(state+1)

}

function updateApi(Id){
 Inputtag.current.focus()
   setBtn(!btn)
   setPassId(Id)
}

function UpdateData(){
console.log("passid where",passId);
 dataArray.splice(dataArray.findIndex((index)=>index.Id===passId),1,title) 
  setState(state+1)
  setBtn(!btn)
}

  return (
    <>
    <div>
    <input ref={Inputtag} type="text" placeholder="please note ..........."  onChange={(e)=>setTitle({Id:Id,value:e.target.value})}/>
   {!btn ?<button onClick={addData}>Add</button> : <button onClick={UpdateData}>Update</button>}
    </div>

<table>
  <tr>
  <th>Title</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
  {dataArray.map((li)=>(
  <tr>

  <td>{li.value}</td>
  <td><button onClick={()=>updateApi(li.Id)}>Update</button></td>
  <td><button onClick={()=>deleteData(li.Id)}>Delete</button></td>
</tr>
  ))}

</table>

    </>
  )
}

export default App
