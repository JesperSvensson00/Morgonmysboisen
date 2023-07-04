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
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const password = "REGNBÅGE";

  const flicker_delay = 3600;
  const zoom_delay = 2000;
  const flap_speed = 30;

  const revealText = () => {
    setShowing(true);
    const audio = document.querySelector("audio");
    audio.loop = true;
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
              iteration++;
            }

            // if (index > iteration + 1) {
            //   return "_";
            // }

            let random_letter = letters[Math.floor(Math.random() * letters.length)];
            while (random_letter == letter) {
              random_letter = letters[Math.floor(Math.random() * letters.length)];
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
        setTimeout(async () => {
          setShowingLinks(true);
          setVideoPlaying(true);
          try {
            const res = await videoRef.current.play();
            console.log(res);
          } catch (e) {
            console.log(e);
            document.querySelector("video.trailer").controls = true;
          }
        }, flicker_delay);
      }

      iteration += 1 / 4;
    }, flap_speed);
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
    document.querySelector("video.background").playbackRate = 3;

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
      <video className="background" src="stars-and-space.mp4" autoPlay muted loop />
      <audio src="split-flap.wav"></audio>
      <div>
        {!showing && (
          <div className="input-wrapper">
            <p>
              Grattis! <br />
              Ni har nu visat att ni är värdiga den riktiga utmaningen.
            </p>
            <p>Invänta vidare information från er kontaktperson.</p>
            <p>För er egna säkerhet är det bäst att ni vloggar de kommande stegen.</p>

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
            <h1 data-value={vlog_title} id="title" className={`${videoPlaying ? "hidden" : ""}`}>
              {revealedText}
            </h1>
            <div className={`video-holder ${!videoPlaying ? "hidden" : ""}`}>
              <video
                className="trailer"
                src="videos/smm_trailer.mp4"
                ref={videoRef}
                onEnded={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  }
                  setVideoPlaying(false);
                }}
              />
            </div>
            <div
              className={`button home bobbing ${!showingLinks || videoPlaying ? "hidden" : ""}`}
              onClick={() => {
                if (!showingLinks || videoPlaying) return;
                Router.push("/start");
              }}>
              Till startsidan
            </div>
          </>
        )}
      </div>
    </main>
  );
}
