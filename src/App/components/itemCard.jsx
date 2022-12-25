import React, { useEffect, useState } from "react";
import { ITEMS_URL } from "../utils/constants/itemsUrl";
// import { fetchData } from "../utils/fetchData";


const ItemCard = () => {
    // const [singleItem, setSingleItem] = useState()

    // useEffect(()=>{
    //   const res = fetchData(`${ITEMS_URL}`)
    //   res.then(data => setSingleItem(data) )
    // }, [console.log('singleItem', Object.keys(singleItem))])
  const res = fetch(`${ITEMS_URL}/1`)
     const dataRes =  res.then(data => data)
     let param = Object.keys(dataRes)
     console.log(param);
    return (
     <h1>{param.id}</h1>
    )
}

export default ItemCard