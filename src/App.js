import Absl from './component/Day';
import Tb from './component/sys';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import One from './component/Head';
import EmptyPage from "./component/EmptyPage";

function App(){
  return ( <BrowserRouter>
<div className="App">
<One/>
<Switch>
<Route exact path="/"><Absl/></Route>
<Route path="/day/:day"><Tb/></Route>
<Route><EmptyPage /></Route>
  </Switch>  </div> </BrowserRouter>
)}
export default App;
