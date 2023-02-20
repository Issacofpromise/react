import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Wrd from './word';

export default function Tal(){//const a=useParams();console.log(a);
const {day} =useParams();
 var [ws, setD]=useState([]);

  useEffect(()=>{ fetch(`http://localhost:3001/words?day=${day}`)
  .then(my =>{return my.json()})
  .then(dt =>{setD(dt)}) //(dt.filter(ord=>ord.day==day))
}, []);
//var ws=ws.filter(ord=>ord.day==day);
return (<><h2>Day {day}</h2><table><tbody>
  {ws.map(dd =>(
    <Wrd sd={dd} key={dd.id}/>
    ))}</tbody></table></>)}
