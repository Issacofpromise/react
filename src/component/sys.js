import {useParams} from "react-router-dom";
import Wrd from './word';
import Json from '../hooks/useFetch';
export default function Tal(){
  const {day}=useParams();
  const ws = Json(`http://localhost:3001/words?day=${day}`);

return (<><h2>Day {day}</h2><table><tbody>
  {ws.map(dd =>(
    <Wrd sd={dd} key={dd.id}/>
    ))}</tbody></table></>)}
