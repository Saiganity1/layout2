import './App.css';

function TopCenterContent(props) {
  return (
    <div className="top-center-content">
      {props.name}
    </div>
  );
}

function BottomBox(props) {
  return (
    <div className="bottom-box">
      {props.text}
    </div>
  );
}

function App() {
  return (
    <div className="green-container">
      <div className="blue-container-top">
        <div className="orange-box"></div>
        <div className="red-container">
          <TopCenterContent name="Dave" />
          <TopCenterContent name="Sicat" />
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
        <BottomBox text="C-PCIT9" />
        <BottomBox text="IT3A" />
        <div className="bottom-purple-box-right"></div>
      </div>
    </div>
  );
}

export default App;