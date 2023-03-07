import Json from '../abc/dfg';
import React, { useRef, useState } from 'react';
import {Dy} from './Day';
import {Iwd} from './word';
export default function CW(){  
const da:Dy[]= Json('http://localhost:4000/days');
const du:Iwd[] = Json('http://localhost:4000/words');
const [ed,std]=useState(false);
const [es,st]=useState(false);
function se(qw:React.FormEvent){ qw.preventDefault();
if(!ed && idRef.current){std(true);
  const id=idRef.current.value;
fetch(`http://localhost:4000/days/${id}`,{
        method:"DELETE"})
        .then(asw=>{if(asw.ok){ return std(false)}})}}
function ts(qe:React.FormEvent){ qe.preventDefault();
        if(!es && Rrf.current){st(true);
  const id=Rrf.current.value;
fetch(`http://localhost:4000/words/${id}`, {
 method:"DELETE"}).then(asw=>{if(asw.ok){ 
        return st(false)}})}}       

const idRef = useRef(null); 
const Rrf = useRef(null);

return (<div className="input_area"> 
<form onSubmit={se}>
<label>Day</label>
<p><select ref={idRef}>
{da.map(ys=>(
    <option key={ys.id} value={ys.id}>{ys.day} id:{ys.id}</option>
       ))}          
       </select></p><button>삭제</button></form>
 <form onSubmit={ts}> 
 <p><label>Word</label>
<select ref={Rrf}>
{du.map(js=>( 
     <option key={js.id} value={js.id}>day:{js.day} id:{js.id}</option>
       ))}            
       </select></p> 
       <button>삭제</button> </form></div>)}