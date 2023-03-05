import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Wrd from './word';
import Json from '../abc/dfg';
export default function Tal(){ const hi=useHistory();
  const da = Json('http://localhost:4000/days');
const du = Math.max.apply(Math, da.map(o =>o.day));
const pj = Math.min.apply(Math, da.map(o =>o.day));
  const {day}=useParams();
  const er={day}; const ed=Number(er.day);const df=ed+1;
  const ws = Json(`http://localhost:4000/words?day=${day}`);
 // if(ws.length==0){ return <span>Loading...</span>} 
 function del(){ if(df < du) { hi.push(`/day/${df}`)
 }}
return (<><h2>Day {day}</h2>
{ws.length==0 && <span>Loading...</span>}
<table><tbody>{ws.map(dd =>(<Wrd sd={dd} key={dd.id}/>
    ))}</tbody></table>  
  <a href={`/day/${day-1}`}className="link">Before Day</a>
  <button onClick={del}>After Day</button>  
    </>)}
