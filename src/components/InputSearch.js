// import React, { useEffect, useState } from 'react'

// const UseEffectHook = () => {
//     const [itemData,setItemData] = useState([]);
//     useEffect(()=>{
//         async function fetchItemData(){
//             //console.log("intial rendering");
//             const response=await fetch("https://fakestoreapi.com/products");
//             const data = await response.json();
//             setItemData(data);
//             console.log(data);
//         }
//         fetchItemData();
// },[])
//   return (
//     <div>
//         {
//       itemData.map((item,index)=>{
//             return(
//                 <li>{item.category}</li>
//             )
            
//       })
//     }
//     </div>

//   )
// }

// export default UseEffectHook
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const people = [
    {
      "name":"Raj",
      "region":"Indian"
    },
    {
      "name":"Raghava",
      "region":"Indian"
    }
    // "Ram",
    // "Ranjan"
  ];
  //const [name,setName] = useState();
  const [listData,setListData] = useState(people);

   const searchName =(e)=>{
    
    if(e.target.value === ""){
      setListData(people);
      return;
    }

   
   const data = people.filter((d)=>{
    //d.indexOf(e.target.value)!=-1);
    return d.name.includes(e.target.value);
   }) 
    
    setListData(data);
   }


  return (
    <div>
      <h1>Application Box</h1>
      <input type="text" name="name"
      onChange={searchName}
      ></input> 
         
      
        <ul>
          {listData.map((item)=>
          <li>
            <span>{item.name}</span>
          </li>
        )}
    
        </ul>
      
      
  
    </div>
  );
};

export default UseEffectHook;
