import Absl from './component/Day';
import Tb from './component/sys';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import One from './component/Head';
import Add from './component/crewd';
import Dad from './component/creday';
import Rd from './component/del';
import EmptyPage from "./component/EmptyPage";
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
