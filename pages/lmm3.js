import Image from "next/image";

export default function Lmm3({ images }) {
  useEffect(() => {
    console.log(document.querySelector(".background").attributes);
    document.querySelector(".background").muted = true;
    document.querySelector(".background").autoplay = true;
  }, []);

  useEffect(() => {
    // console.log(document.querySelector(".video-holder > iframe").getPlayerState());
  }, []);

  return (
    <main id="lmm3" className="lmm">
      <video src="background.mp4" loop className="background">
        {/* <source  type="video/mp4" /> */}
      </video>
      <div className="content">
        <div className="gallery left">
          {images.map((image_path, idx) => {
            if (idx % 2 === 0) {
              return (
                <div className="image-container" key={idx}>
                  <Image
                    src={`/images/lmm3/${image_path}`}
                    alt="Kapitelbild"
                    width={400}
                    height={400}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="video-holder">
          <h1>Lir med morgonmysboisen III</h1>
          <iframe src="https://www.youtube.com/embed/cP_h48Db69o" />
        </div>
        <div className="gallery right">
          {images.map((image_path, idx) => {
            if (idx % 2 === 1) {
              return (
                <div className="image-container" key={idx}>
                  <Image
                    src={`/images/lmm3/${image_path}`}
                    alt="Kapitelbild"
                    width={400}
                    height={400}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}

import { readdirSync } from "fs";
import { join } from "path";
import { useEffect } from "react";
export async function getStaticProps() {
  const PATH = join(process.cwd(), "public/images/lmm3");
  let images = readdirSync(PATH).map((path) => {
    return path;
  });
  images = images.sort();
  return {
    props: {
      images,
    },
  };
}
