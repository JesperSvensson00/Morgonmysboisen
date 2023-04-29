import Image from "next/image";

export default function Lmm3({ images }) {
  return (
    <main id="lmm3" className="lmm">
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
        <div>
          <h1>Lir med morgonmysboisen III</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cP_h48Db69o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
