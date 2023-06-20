import Footer from "@/components/Footer";
import Image from "next/image";

// Images
import lmm1_thumb from "@/public/images/gallery/lmm1/lmm1-thumbnail.webp";
import lmm2_thumb from "@/public/images/gallery/lmm2/lmm2-thumbnail.webp";
import lmm3_1_thumb from "@/public/images/gallery/lmm3/Thumbnail-1.webp";
import lmm3_2_thumb from "@/public/images/gallery/lmm3/Thumbnail-2.webp";
import cph_thumb from "@/public/images/gallery/övrigt/copenhagen-thumbnail.webp";

export default function Gallery() {
  const lmm3_images = [
    "01_Terrorists_and_Police_Vibing",
    "02_Laughing_Out_Loud",
    "03_Smoking_Kills",
    "04_Scooby_Doo",
    "05_Space_Pirates_With_Hockey_Masks",
    "06_Scary_Swedish_People",
    "07_Convict_Tastes_Ananas_Drink",
    "08_Vendetta_vs_Athetic",
    "09_Small_Serbian_Man",
    "10_Creeper_Oh_Man",
    "11_Bunny_Girl_With_Big_Sword",
    "12_Confused_Guy_in_a_Hallway",
    "13_Horror_Movie_Type_Beat_Oil_on_Canvas",
    "14_What_och_Tva_Fragetecken",
    "15_Smoking_Site_Every_Match",
    "16_Spooky_Scary_Skeleton",
    "17_Lionel_Messi_in_a_Fiat_500",
    "18_All_the_Cringe_Guys_in_One_Space",
    "19_Angry_Valle_at_Work",
    "20_Funky_Vampires_in_a_Moshpit",
    "21_Hmm",
    "22_Crackheads_in_Stockholm",
    "23_The_Boys_and_Guns",
    "24_Soldier_Dancing_to_Russian_Disco",
    "25_Sp4zie_-_Epic_Moments",
    "26_Manly_Eastern_European_Birthday_Boy",
    "27_Some_Blocky_Gay_Guys",
  ];
  return (
    <>
      <main id="gallery">
        <div className="content">
          <div id="header">
            <h1>Artgallery</h1>
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
                instruktioner robotarna fick. För att se instruktionen håll över bilden.
              </p>
              <div className="image-album">
                {lmm3_images.map((image, idx) => (
                  <div className="flip-card" key={idx}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <Image
                          src={"/images/gallery/lmm3/" + image + ".webp"}
                          alt={"Kapitelbild " + idx}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="flip-card-back">
                        <p>{image.substring(1).split("_").join(" ")}</p>
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
