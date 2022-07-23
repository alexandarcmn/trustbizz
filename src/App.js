import Lottie from "react-lottie";
import animation from "./animation.json";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <div className="bgd">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}

export default App;
