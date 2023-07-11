import { useEffect, useState } from "react";

export default function Home() {
  const [showing, setShowing] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");
  const [code, setCode] = useState("");

  const password = "BOISEN";

  useEffect(() => {
    const codePlaceholders = [
      "B33PB00P-42",
      "######",
      "###",
      "[1][4][2][0][3]",
      "NESI OBSYM NOG ROM",
      "MAT 7:7",
    ];
    setPlaceHolder(codePlaceholders[Math.floor(Math.random() * codePlaceholders.length)]);
    // document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.querySelector("video.background").playbackRate = 3;

    document.querySelector("main.nysida").onmousemove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
  }, []);

  return (
    <main className="nysida vlog-reveal">
      <span className="pointer"></span>
      <video className="background" src="stars-and-space.mp4" autoPlay muted loop />
      <audio src="split-flap.wav"></audio>
      <div>
        {!showing && (
          <div className="input-wrapper">
            <p>Nu kommer nästa utmaning! Hoppas du löser även denna!</p>

            <input
              type="text"
              placeholder={placeHolder}
              onBlur={(e) => {
                if (code) {
                  document.querySelector(".button").classList.add("bobbing");
                  e.target.classList.remove("error");
                  e.target.classList.remove("bobbing");
                }
                if (!code) {
                  document.querySelector(".button").classList.remove("bobbing");
                }
              }}
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
              }}
              className="bobbing code-input"
            />
            <div
              className="button"
              onClick={(e) => {
                if (code == password) {
                  setShowing(true);
                  document.querySelector("video.background").playbackRate = 1;
                  document.querySelector(".code-input").classList.add("bobbing");
                } else {
                  e.target.classList.remove("bobbing");
                  document.querySelector(".code-input").classList.add("error");
                }
              }}>
              <p>En hemlighet du vill se?</p>
            </div>
          </div>
        )}
        {showing && (
          <div className="message">
            <p>Grattis! Nu är det bara en utmaning kvar!</p>
          </div>
        )}
      </div>
    </main>
  );
}
