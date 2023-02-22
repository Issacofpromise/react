import './App.css';

function App(){
  const na ='Scalet'
  const google={name:"google",url:"https://google.com"}
  return (
    <div className="App">
  <h1 style={{
    color:'pink',
backgroundColor:'purple'}}>hello, {na}!!{4/9}</h1>
<a className="App-link"
href={google.url} target="_blank">{google.name}</a>
    </div>
  );
}

export default App;
