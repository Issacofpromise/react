import React from 'react';
import { useHistory } from 'react-router-dom';
import {Dy} from './Day';
import Json from '../abc/dfg';
export default function CW(){ 
    const da:Dy[] = Json('http://localhost:4000/days');
    const hi=useHistory();
    const du = Math.max.apply(Math, da.map(o =>o.day));console.log(du);
    function se(){        
fetch('http://localhost:4000/days/', { method:"POST", 
headers:{ "Content-Type":"application/json"},
 body:JSON.stringify({day:du+1}),
 })//.then(asw=>{if(asw.ok){hi.push(`/`)
  }
     return ( 
        <div>
        <h3>현재 일수:{da.length}일</h3>
        <button onClick={se}>Day 추가</button>
    </div>
)}