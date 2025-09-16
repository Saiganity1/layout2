import './App.css';

function App() {
  return (
    <div className="green-container">
      <div className="blue-container-top">
        <div className="orange-box"></div>
        <div className="red-container">
          <div className="red-box"></div>
          <div className="red-box"></div>
        </div>
        <div className="orange-box"></div>
      </div>

      <div className="pink-container-middle">
        <div className="large-pink-box"></div>
        <div className="small-pink-container">
          <div className="small-pink-box"></div>
          <div className="small-pink-box"></div>

        </div>
      </div>

      <div className="blue-container-bottom">
        <div className="bottom-purple-box-left"></div>
        <div className="bottom-orange-box-middle"></div>
        <div className="bottom-orange-box-middle"></div>
        <div className="bottom-purple-box-right"></div>
      </div>
    </div>
  );
}

export default App;