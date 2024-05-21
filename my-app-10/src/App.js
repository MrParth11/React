import './App.css';
import Object from './Object';

function App() {

  const array = 
    [
    {
      id : 1,
      name : "Parth",
      position : "full stack",
      salary : 18000
    },

    {
      id : 2,
      name : "Keyur",
      position : "full stack",
      salary : 17000
    },
    {
      id : 3,
      name : "Harshil",
      position : "full stack",
      salary : 15500
    },
    {
      id : 4,
      name : "Ronak",
      position : "graphic desin",
      salary : 15000
    }
  ]


  return (
<>
    <Object array={array}/>
</>
  );
}

export default App;
