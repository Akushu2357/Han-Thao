import logo from './logo.svg';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [menu, setMenu] = useState([]);
  let id_menu = 0;
  let id_people = 0;

  const add_people = () => {
    setPeople([...people, {'id':id_people, 'name':''}])
    id_people += 1;
  };
  const remove_people = (e) => {
    const name = e.target.value;
    setPeople(people.filter((e) => (e['name'] !== name)))
  };

  const add_menu = () => {
    setMenu([...menu, {'id':id_menu, 'name':"", "price":0}])
    id_menu += 1;
  };
  const rmove_menu = (e) => {
    const name = e.target.value;
    setMenu(menu.filter((e) => (e['name'] !== name)))
  };

  const cal_per_person_per_menu = () => {

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
