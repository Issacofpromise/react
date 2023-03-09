import Json from '../abc/dfg.ts';
import { useRef, useState } from 'react';
import {Dy} from './Day';
import { useHistory } from 'react-router-dom';
import React from 'react';
export default function CW(){
    const da:Dy[] = Json('http://localhost:4000/days');
    const hi=useHistory(); 
const [lo,stL]=useState(false);
function se(qw:React.FormEvent){ qw.preventDefault();
if(!lo && dayRef.current && engRef.current 
  && korRef.current){ stL(true);
  const day = dayRef.current.value;
  const eng = engRef.current.value;
  const kor = korRef.current.value;
fetch('http://localhost:4000/words/', { method:"POST", 
headers:{ "Content-Type":"application/json"},
  body:JSON.stringify({
    day,
    eng,
    kor,
    isDone:false
}),
  }).then(asw=>{if(asw.ok){alert('생성 완료되었습니다.');
hi.push(`/day/${day}`);
stL(false);
}})}}
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
    return ( <form onSubmit={se}>
        <div className="input_area">
        <label>Eng</label>
        <input type='text'ref={engRef}/></div>
        <div className="input_area">
        <label>Kor</label>
        <input type='text'ref={korRef}/></div>
        <div className="input_area">
        <label>day</label>
        <select ref={dayRef}>
        {da.map(ys=>(
     <option key={ys.id} value={ys.day}>{ys.day}</option>
        ))}            
        </select></div>
        <button>저장</button>
    </form>
    )}