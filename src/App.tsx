import Absl from './component/Day.tsx';
import Tb from './component/sys.tsx';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import One from './component/Head.tsx';
import Add from './component/crewd.tsx';
import Dad from './component/creday.tsx';
import Rd from './component/del.tsx';
import EmptyPage from "./component/EmptyPage.tsx";
import React from 'react';

function App(){
  return ( <BrowserRouter>
<div className="App">
<One/>
<Switch>
<Route exact path="/"><Absl/></Route>
<Route path="/day/:day"><Tb/></Route>
<Route path="/crea_w"><Add/></Route>
<Route path="/cre_D"><Dad/></Route>
<Route path="/del"><Rd/></Route>
<Route><EmptyPage /></Route>
  </Switch>  </div> </BrowserRouter>
)}
export default App;
