import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'welcome to new blog';
  // const likes = 50;
  // const Site = 'https://www.google.com';
  // const person = { name: 'alalala' , age: 30}; We cannot use ojbect and boleens in the return
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
        <h1> App component  </h1>
        {/* <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "hello people"}</p>
        <p>{ [1,2,3,4,5]}</p>
        <p>{ Math.random()*10}</p>
        <a href={Site}>Google Site</a>
       */}
      </div>
    </div>
  );
}

export default App;
