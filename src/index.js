import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import Sow from './heading';
// import A1 from './careerobj';
// import A2 from './education';
// import A3 from './technicalskills';
// import A4 from './projects';
// import A5 from './strengths';
// import Pello from './pello.jsx';
// import Kello from './kello.jsx';
import Kello from './kello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Sow/>
    <A1/>
    <A2/>
    <A3/>
    <A4/>
    <A5/>
     */}
     {/* <Pello/> */}
     {/* <Kello/> */}
     <Kello/>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
