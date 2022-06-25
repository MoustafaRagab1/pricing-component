import './App.css';
import img from './image-header-desktop.jpg'

function App() {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="" />

      </div>
      <div className="body">

        <h1 className="header">Get <span>insights</span> that help your business grow.</h1>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam minus nobis placeat distinctio perferendis, soluta eveniet non, </p>

        <div className="detailes">

          <div className="nums">
            10k+ 
            <div>companies</div>
          </div>
          <div className="nums">
            314 
            <div>tamplates</div>
          </div>
          
          <div className="nums">
            12M+ 
            <div>queries</div>
          </div>
          

        </div>
      </div>

    </div>
  );
}

export default App;