import React from 'react';
import {Link} from 'react-router-dom';
export default function Header(){
  return (
  <div className="header">
  <h1><Link to='/'>토익 영단어(고급)</Link></h1>
  <div className="menu">
  <Link to='/crea_w'className="link">단어 추가</Link>
  <a href='/cre_D'className="link">Day 추가</a>
  <a href='/del'className="link">Day 삭제</a>
  </div>    </div> )}
