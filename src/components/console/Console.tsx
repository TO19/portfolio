import React, { ChangeEvent, ReactElement, useState } from "react";
import "./console.scss";

function Console(): ReactElement {
  const [currentClass, setCurrentClass] = useState<string>("");
  const changeSide = (faceName: string) => {
    const cube = document.querySelector(".cube");
    const showClass = "show-" + faceName;
    if (currentClass) {
      cube?.classList.remove(currentClass);
    }
    cube?.classList.add(showClass);
    setCurrentClass(showClass);
  };

  const handleRadioBtn = (event: ChangeEvent<HTMLInputElement>) => {
    changeSide(event.target.value);
  };

  const leftBracket = " {";
  const rightBracket = "}";

  return (
    <div className="second-view">
      <div className="console">
        <div className="console-bar">
          <i className="fa fa-circle" aria-hidden="true" id="console1" />
          <i className="fa fa-circle" aria-hidden="true" id="console2" />
          <i className="fa fa-circle" aria-hidden="true" id="console3" />
        </div>
        <div className="console-path">
          <div className="x-name">anto@deb</div>
          <div>:</div>
          <div className="tild">~</div>$ ./showMySkills/10
        </div>
        <p className="choose-cat">Choose a category:</p>
        <p className="radio-group">
          <label className="buzz-out">
            <input
              type="radio"
              name="rotate-cube-side"
              value="front"
              onChange={handleRadioBtn}
            />
            softSkills
          </label>
          <label className="buzz-out">
            <input
              type="radio"
              name="rotate-cube-side"
              value="back"
              onChange={handleRadioBtn}
            />
            front
          </label>
          <label className="buzz-out">
            <input
              type="radio"
              name="rotate-cube-side"
              value="right"
              onChange={handleRadioBtn}
            />
            back
          </label>
          <label className="buzz-out">
            <input
              type="radio"
              name="rotate-cube-side"
              value="left"
              onChange={handleRadioBtn}
            />
            misc
          </label>
          <label className="buzz-out">
            <input
              type="radio"
              name="rotate-cube-side"
              value="top"
              onChange={handleRadioBtn}
            />
            hobbies
          </label>
        </p>
        <div className="scene">
          <div className="cube">
            <div className="cube__face cube__face--front">
              <div className="tab2">
                <span className="language">softSkills</span> =
                <span className="bracket1">{leftBracket}</span>
              </div>
              <div className="tab3">
                teamwork: 7,
                <br />
                relationships: 8, <br />
                communication: 7,
                <br />
                adaptability: 9,
                <br />
                analysis: 8,
                <br />
                openMinded: 8,
                <br />
                organization: 7,
                <br />
                humor: 7,
                <br />
                selfMotivation: 10,
                <br />
                creativity: 9,
                <br />
                curiosity: 9,
                <br />
                learning: 10,
                <br />
              </div>
              <div className="tab2">
                <span className="bracket1">{rightBracket}</span>
              </div>
            </div>
            <div className="cube__face cube__face--back">
              <div className="tab2">
                <span className="language">front</span> =
                <span className="bracket1">{leftBracket}</span>
              </div>
              <div className="tab3">
                react: 7,
                <br />
                angular: 8, <br />
                vue: 7, <br />
                react-native: 8, <br />
                ionic: 8, <br />
                electronJS: 8, <br />
                swift: 6, <br />
                kotlin/java: 7, <br />
                sass: 6,
                <br />
              </div>
              <div className="tab2">
                <span className="bracket1">{rightBracket}</span>
              </div>
            </div>
            <div className="cube__face cube__face--right">
              <div className="tab2">
                <span className="language">back</span> =
                <span className="bracket1">{leftBracket}</span>
              </div>
              <div className="tab3">
                nodeJS: 7,
                <br />
                springBoot: 6,
                <br />
                springBoot: 6,
                <br />
                sql: 7,
                <br />
                laravel: 8,
                <br />
                symfony: 6,
                <br />
                dbArchitecture: 6,
                <br />
              </div>
              <div className="tab2">
                <span className="bracket1">{rightBracket}</span>
              </div>
            </div>
            <div className="cube__face cube__face--left">
              <div className="tab2">
                <span className="language">misc</span> =
                <span className="bracket1">{leftBracket}</span>
              </div>
              <div className="tab3">
                typescript: 8, <br />
                docker: 7, <br />
                git: 8,
                <br />
                python: 8, <br />
                go: 6,
                <br />
                rootMe: 7, <br />
                c: 7, <br />
              </div>
              <div className="tab2">
                <span className="bracket1">{rightBracket}</span>
              </div>
            </div>
            <div className="cube__face cube__face--top">
              <div className="tab2">
                <span className="language">hobbies</span> =
                <span className="bracket1">{leftBracket}</span>
              </div>
              <div className="tab3">
                surf: 8, <br />
                skate: 8,
                <br />
                snowboard: 5, <br />
                videoGames: 8, <br />
                friends: 8, <br />
                technology: 6, <br />
                blockchain: 6, <br />
                music: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7, <br />
              </div>
              <div className="tab2">
                <span className="bracket1">{rightBracket}</span>
              </div>
            </div>
            <div className="cube__face cube__face--bottom">bottom</div>
          </div>
        </div>
        <div className="console-path">
          <div className="x-name">anto@deb</div>
          <div>:</div>
          <div className="tild">~</div>$ <span className="blink"> </span>
        </div>
      </div>
    </div>
  );
}

export default Console;
