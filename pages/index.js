import { useEffect, useRef, useState } from "react";
import Router from "next/router";

export default function Home() {
  const vlog_title = "SKOTTLAND MED MORGONMYSBOISEN";
  //   const vlog_title = "SKOT";
  const [revealedText, setRevealedText] = useState("");
  const [showing, setShowing] = useState(false);
  const [showingLinks, setShowingLinks] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");
  const [code, setCode] = useState("");

  const password = "boisen";

  const revealText = () => {
    setShowing(true);
    const audio = document.querySelector("audio");
    audio.loop = true;
    // audio.play();
    audio.volume = 0.5;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    let iteration = -1;

    interval = setInterval(() => {
      setRevealedText(
        vlog_title
          .split("")
          .map((letter, index) => {
            if (index < iteration || letter === " ") {
              return vlog_title[index];
            }

            if (vlog_title[Math.floor(iteration) + 1] === " ") {
              console.log("hej");
              iteration++;
            }

            if (index > iteration + 1) {
              return "_";
            }

            let random_letter = letters[Math.floor(Math.random() * 26)];
            while (random_letter == letter) {
              random_letter = letters[Math.floor(Math.random() * 26)];
            }
            return random_letter;
          })
          .join("")
      );

      if (iteration >= vlog_title.length) {
        clearInterval(interval);
        const title = document.getElementById("title");
        title.className = "flicker-once";
        console.log("Done");

        audio.pause();
        setTimeout(() => {
          setShowingLinks(true);
        }, 3600);
      }

      iteration += 1 / 10;
    }, 100);
  };

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
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.querySelector("video").playbackRate = 3;

    document.querySelector("main.vlog-reveal").onmousemove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
  }, []);

  return (
    <main className="vlog-reveal">
      <span className="pointer"></span>
      <video src="stars-and-space.mp4" autoPlay muted loop />
      <audio src="split-flap.wav"></audio>
      <div>
        {!showing && (
          <div className="input-wrapper">
            <p>
              En kod, du söker och finna måste, <br /> En värld av hemligheter den kan avslöja åt
              dig förvisso.
            </p>
            <p>
              Låt inte frustrationen ta överhand, Möjligheten finns där, <br />
              kämpa på och sök över land och strand.
            </p>
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
                setCode(e.target.value);
              }}
              className="bobbing code-input"
            />
            <div
              className="button"
              onClick={(e) => {
                if (code == password) {
                  revealText();
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
          <>
            <h1 data-value={vlog_title} id="title">
              {revealedText}
            </h1>

            <div
              className={`button home bobbing ${!showingLinks ? "hidden" : ""}`}
              onClick={() => {
                Router.push("/start");
              }}>
              Hem
            </div>
          </>
        )}
      </div>
    </main>
  );
}
