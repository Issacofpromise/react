import {Link} from 'react-router-dom';
export default function Header(){
  return (
  <div className="header">
  <h1><Link to='/'>토익 영단어(고급)</Link></h1>
  <div className="menu">
  <a href='#x'className="link">Add Word</a>
  <a href='#x'className="link">Add Day</a>
  </div>    </div> )}