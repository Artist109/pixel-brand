import React from "react";

const Loader = () => {
   return ( 
   <div className="m-4" style={{ color: "#ccc" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div>Загрузка...</div>
  </div>
  )
}


export default Loader;