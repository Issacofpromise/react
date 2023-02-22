import Json from '../hooks/useFetch';
import {Link} from 'react-router-dom';

export default function DayList(){ 
  const days = Json('http://localhost:3001/days');
  return (<>
    <ul className='list_day'>
    {days.map(dd =>(
      <li key={dd.id}>
      <Link to={`/day/${dd.day}`}>Day {dd.id}</Link></li>
    ))}</ul>
  </>
  )
}
