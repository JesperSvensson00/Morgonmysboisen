import Footer from "@/components/Footer";
import Image from "next/image";

// Images
import lmm1_thumb from "@/public/images/gallery/lmm1/lmm1-thumbnail.webp";
import lmm2_thumb from "@/public/images/gallery/lmm2/lmm2-thumbnail.webp";
import lmm3_1_thumb from "@/public/images/gallery/lmm3/Thumbnail-1.webp";
import lmm3_2_thumb from "@/public/images/gallery/lmm3/Thumbnail-2.webp";
import cph_thumb from "@/public/images/gallery/övrigt/copenhagen-thumbnail.webp";

export default function Gallery({ images }) {
  const lmm3_images = [
    "Terrorists and Police Vibing",
    "Laughing Out Loud",
    "Smoking Kills",
    "Scooby Doo",
    "Space Pirates With Hockey Masks",
    "Scary Swedish People",
    "Convict Tastes Ananas Drink",
    "Vendetta vs Athetic",
    "Small Serbian Man",
    "Creeper... oh man",
    "Bunny Girl With Big Sword",
    "Confused Guy in a Hallway",
    "Horror Movie Type Beat",
    "What??",
    "Smoking Site Every Match",
    "Spooky Scary Skeleton",
    "Lionel Messi in a Fiat 500",
    "All the Cringe Guys in One Space",
    "Angry Valle at Work",
    "Funky Vampires in a Moshpit",
    "Hmm",
    "Crackheads in Stockholm",
    "The Boys and Guns",
    "Soldier Dancing to Russian Disco",
    "Sp4zie - Epic Moments",
    "Manly Eastern European Birthday Boy",
    "Some Blocky Gay Guys",
  ];
  return (
    <>
      <main id="gallery">
        <div className="content">
          <div id="header">
            <h1>Art Gallery</h1>
          </div>
          <section id="lmm1-art">
            <h2>LMM1</h2>
            <div className="gallery">
              <div className="image-holder">
                <Image src={lmm1_thumb} alt="Wut" className="thumb" />
                <p className="image-text">
                  Morgonmysboisens första &quot;Lir med Morgonmysboisen&quot; chockerade och
                  revolutionerade världen. Med sin unika blandning av humor, interaktion och gaming
                  erövrade de både befintliga och nya fans över hela världen. Deras videoserie
                  suddade ut gränserna mellan spelvärlden och den digitala verkligheten, och banade
                  väg för en ny generation av underhållning.
                </p>
              </div>
            </div>
          </section>
          <section id="lmm2-art">
            <h2>LMM2</h2>
            <div className="image-holder">
              <Image
                src={lmm2_thumb}
                alt="LMM2 Thumbnail bilden föreställer hälften skalle hälften hjälm"
                className="thumb"
              />
              <p className="image-text">
                I deras andra video i serien &quot;Lir med Morgonmysboisen&quot; fortsätter de att
                överraska deras hängivna fans! Denna gång med en helt ny spelupplevelse som tar dem
                till en ny nivå av spänning och underhållning. I denna upplagan finns ett tydligt
                budskap som även illustreras i bilden ovan: vi lever idag i en värld fylld med
                ondska men i den digitala världen kan vi skydda oss från det onda med skratt och
                gemenskap. Detta visa på hur Morgonmysboisen använder sitt inflytande för att göra
                jorden och internet till en bättre plats.
              </p>
            </div>
          </section>
          <section id="lmm3-art">
            <h2>LMM3</h2>
            <div className="image-holder">
              <div className="image-row">
                <Image
                  src={lmm3_1_thumb}
                  alt="LMM3 Thumbnail som faktiskt användes"
                  className="thumb"
                />
                <Image src={lmm3_2_thumb} alt="LMM3 Thumbnail som är rätt wack" className="thumb" />
              </div>

              <p className="image-text">
                Inför den tredje videon skapades två olika förslag på miniatyrbild. Som de allra
                flesta vet föll valet självklart på den den vänstra bilden. Den högra bilden är dock
                värd att nämna då den är en av de få bilderna som inte användes. Detta beror på att
                den inte var tillräckligt bra för att representera den tredje upplagan i serien
                &quot;Lir med Morgonmysboisen&quot;. Den vänstra bilden däremot är en av de mest
                ikoniska bilderna i serien. Den visar på hur Morgonmysboisen har utvecklats från att
                vara en grupp av vänner som spelar spel tillsammans till att bli en grupp av vänner
                som spelar spel tillsammans och har en robot som skapar bilder till dem.
              </p>
            </div>
            <div>
              <h3>Kapitelbilder</h3>
              <p>
                Under arbetet av den tredje upplagan i serien &quot;Lir med Morgonmysboisen&quot;
                ökades produktionsvärdet enormt. Bland annat används robotar för att skapa en bilder
                som representerar varje kapitel. Nedan vissas dessa bilder upp och vilka
                instruktioner robotarna fick. För att se instruktionen klicka på eller håll över
                bilden.
              </p>
              <div className="image-album">
                {images.map((image, idx) => (
                  <div className="flip-card" key={idx}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <Image
                          src={"/images/gallery/lmm3/chapter_images/" + image}
                          alt={"Kapitelbild " + idx}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="flip-card-back">
                        <p>{lmm3_images[idx]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="övrigt">
            <h2>Övrigt</h2>
            <div className="image-holder">
              <h3>Köpenhamn med Kvällsmysboisen!!! feat. Måns</h3>
              <Image
                src={cph_thumb}
                alt="Ett barn som är omringad av 2 björnar"
                className="thumb"
              />
            </div>
            <p className="image-text">
              En del av gänget från Morgonmysboisen begav sig på en minnesvärd festresa till
              Köpenhamn. Resan var fylld av glädje, äventyr och oförglömliga upplevelser.
              Tillsammans utforskade de stadens pulserande nattliv och skapade starka band med
              varandra. Festresan blev en tid för skratt, dans och oväntade ögonblick som kommer att
              vara levande i deras minnen för alltid.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { readdirSync } from "fs";
import { join } from "path";
export async function getStaticProps() {
  const PATH = join(process.cwd(), "public/images/gallery/lmm3/chapter_images");
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
