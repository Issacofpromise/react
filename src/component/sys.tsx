import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Wrd,{Iwd} from './word.tsx';
import {Dy} from './Day';
import Json from '../abc/dfg.ts';
import React from "react";
export default function Tal(){ const hi=useHistory();
  const da:Dy[] = Json('http://localhost:4000/days');
const du = Math.max.apply(Math, da.map(o =>o.day));
const pj = Math.min.apply(Math, da.map(o =>o.day));
  const {day}=useParams<{day:string}>();
  const er={day};
  const ws:Iwd[] = Json(`http://localhost:4000/words?day=${day}`);
 // if(ws.length==0){ return <span>Loading...</span>} 
 //function del(){hi.push(`/day/${Number(er.day)+1}`)}
// <button onClick={del}>After Day</button>
return (<><h2>Day {day}</h2>
{ws.length==0 && <span>Loading...</span>}
<table><tbody>{ws.map(dd =>(<Wrd sd={dd} key={dd.id}/>
    ))}</tbody></table>  
  <a href={`/day/${Number(er.day)-1}`}className="link">Before Day</a>
  <a href={`/day/${Number(er.day)+1}`}className="link">After Day</a>
      </>)}
