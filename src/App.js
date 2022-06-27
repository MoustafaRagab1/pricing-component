import React , {useState} from 'react'
import './App.css';
import Pricing from './components/Pricing';
import Data from './components/Data.json';
import Card from './components/Card'

const App = () => {

  const [choice, setChoice] = useState(Data)
  const [isAnnual, setIsAnnual] = useState(true)
  
  return (
    <div className="container">
      <Pricing 
      setChoice={setChoice} 
      setIsAnnual={setIsAnnual} 
      isAnnual={isAnnual}
      />
      <div className="card-container">
        {choice.map(data => (
          <Card key={data.id} data={data}/>
        ))}
      </div>
    </div>
   
  );
}

export default App;