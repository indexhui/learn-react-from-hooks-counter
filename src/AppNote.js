import logo from './logo.svg';
import './App.css';

const counter='2*5'
const number='100'
const helloReact= (<h1>hello react</h1>)

//箭頭寒士
const helloReactWorld = (language) => {
  return(
    <div>
      <h2>hello {language}</h2>
    </div>
  )
};

//jsx 中需要用到 Javascript -> {}

const helloReactWorld2 = (language) => {
    <div>
      <h2>hello {language}</h2>
    </div>
};
//箭頭寒士縮寫

//React Component :會回傳 JSX 的函式(加了一些其他功能)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {helloReact}
        {helloReactWorld('vue')}
        {helloReactWorld('vue2')}
        <p className={number > 10 && counter}> number is {counter}or{2*5}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello World
        </a>
      </header>
    </div>
  );
}

export default App;