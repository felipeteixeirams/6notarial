import React from 'react';
import './LoadingScreen.css';

loadingScreen = () => {
   let el = document.getElementById("loading-screen");
   el.className = "loading-screen-hidden";
}

const LoadingScreen = () =>{
   

   return(
      <div id="loading-screen"></div>
   );
}

export default LoadingScreen;