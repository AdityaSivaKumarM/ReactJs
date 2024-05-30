import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [itemData,setItemData] = useState([]);
    useEffect(()=>{
        async function fetchItemData(){
            //console.log("intial rendering");
            const response=await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setItemData(data);
            console.log(data);
        }
        fetchItemData();
},[])
  return (
    <div>
        {
      itemData.map((item,index)=>{
            return(
                <li>{item.category}</li>
            )
            
      })
    }
    </div>

  )
}

export default UseEffectHook
