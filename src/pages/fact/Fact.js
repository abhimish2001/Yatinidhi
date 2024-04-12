import React, { useEffect } from "react";
import { Counter } from "../counter/Counter";
import "./Fact.css";
import WOW from "wow.js";
import "animate.css/animate.min.css";

function Fact() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <div className="fact">
    <div className="container">
        <div className="row counters">
            <div className="col-md-6 fact-left wow animate__animated animate__slideInLeft">
                <div className="row">
                    <div className="col-6">
                        <div className="fact-icon">
                           <img src="\worker-xxl.png" alt="worker" width="60" height="60"></img>
                        </div>
                        <div className="fact-text">
                        <Counter start={0} end={809} duration={2000} />
                           
                            <p>Expert Workers</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fact-icon">
                        <img src="\building-xl.png" alt="worker" width="60" height="60"></img>
                        </div>
                        <div className="fact-text">
                        <Counter start={0} end={460} duration={3000} />
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 fact-right wow animate__animated animate__slideInRight">
                <div className="row">
                    <div className="col-6">
                        <div className="fact-icon">
                        <img src="\organization-xl.png" alt="worker" width="60" height="60"></img>
                        </div>
                        <div className="fact-text">
                        <Counter start={0} end={300} duration={3000} />
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fact-icon">
                        <img src="\bank-3-xl.png" alt="worker" width="60" height="60"></img>
                        </div>
                        <div className="fact-text">
                        <Counter start={0} end={190} duration={4000} />
                            <p>Running Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Fact;