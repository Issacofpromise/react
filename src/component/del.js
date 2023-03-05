import Json from '../abc/dfg';
import { useRef } from 'react';
export default function CW(){  
const da = Json('http://localhost:4000/days');
const du = Json('http://localhost:4000/words');
function se(qw){ qw.preventDefault();
fetch(`http://localhost:4000/days/${idRef.current.value}`,{
        method:"DELETE"})
        .then(asw=>{if(asw.ok){ return ts()
}})}
function ts(qe){ qe.preventDefault();
fetch(`http://localhost:4000/words/${Rrf.current.value}`, {
 method:"DELETE"}).then(asw=>{if(asw.ok){ return console.log(Rrf.current.value);
}})}

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