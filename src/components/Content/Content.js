import React, { useState, useEffect } from "react";

const Content = () => {
   
   const [users, setUsers] = useState([]);
    
   useEffect(() => {
      fetch('./servicos.json',{
      headers: {
         Accept: "application/json"
      }
      }).then(res => res.json())
         .then(res => setUsers(res.data))
   },[]);
   
   return (
      {users}
   );
}

export default Content;