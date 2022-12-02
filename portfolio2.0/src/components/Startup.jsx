import "../styles/startup.css";
import Typed from "react-typed";
import Delayed from "../components/Delayed.jsx";

export default function StartScreen({ className }) {
  return className === "startscreen" ? (
    <div className={className}>
      <Delayed waitBeforeShow={200}>
        <Typed
          strings={["WebDevEv"]}
          typeSpeed={80}
          className="start-title-lit"
        ></Typed>
          <div className="progress-bar" data-label="Loading..."></div>
      </Delayed>
    
    </div>
  ) : (
    ""
  );
}
