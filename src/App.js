import {useState} from 'react'
import './App.css';
import Axios from 'axios';

function App() {
  const [word, setWord]=useState("")
  const [dialect, setDialect]=useState("")
  const [meaning, setMeaning]=useState("")
  const [tlang, setTlang]=useState("")

  const postData=async()=>{
    await Axios.post("https://abasuba.herokuapp.com/words",{
      word:word,
      dialect:dialect,
      meaning:meaning,
      tlang:tlang
    })
    setMeaning("");
    setDialect("");
    setTlang("");
    setWord("");
  }
  const handleSubmit=(e)=>{
    
    e.preventDefault()
    /*Axios.post("http://localhost:4000/words",{
      word:word,
      dialect:dialect,
      meaning:meaning,
      tlang:tlang
    }).then(()=>{
      alert("Success") 
    })*/
    postData()
    alert("Submitted")
  }

  return (
    <div className="App">
      <div className="intro">
  <h1>Welcome</h1>
  <p>Please help us identify and define various Basuba words</p>
</div>
     <form className="form" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Suba Word</label>
    <input type="text" 
    onChange={e=>e.target.value}
    placeholder="Enter the Basuba Word"
    className="form-control" id="word" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Dialect</label>
    <input type="text"
    onChange={e=>e.target.value}
    placeholder="Olusuba or Olusuva"
    className="form-control" id="dialect"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Meaning</label>
    <input type="text"
    onChange={e=>e.target.value} 
    placeholder="Enter the meaning of the basuba word"
    className="form-control" id="meaning" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Translation Language</label>
    <input type="text" 
    onChange={e=>e.target.value}
    placeholder="Enter the translation language"
    className="form-control" id="tlang"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
