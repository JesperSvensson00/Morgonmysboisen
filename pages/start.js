import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const timeline_content = [
    {
      year: 2000,
      text: "Året då majoriteten av medlemmarna föddes. En ny era för svensk humor och kultur började alltså detta året.",
    },
    {
      year: 2005,
      text: "Den 8 januari föds organisationens yngsta medlem, Rasmus Al-sudany. Som liten gillade Rasmus att rita och bygga med duplo.",
    },
    {
      year: 2015,
      text: 'Kendrick Lamar släpper albumet "To Pimp a Butterfly"',
    },
    {
      year: 2018,
      text: "Under sommaren bildas systerbolaget Bub som ingick i flera samarbeten med Morgonmysboisen.",
    },
    {
      year: 2018,
      text: "Elias Klaesson blir misstänkt för grov misshandel.",
    },
    {
      year: 2018,
      text: "Den 19 oktober hade organisationen ett väldigt lyckat styrelsemöte i syfte att öka mångfalden i organisationen.",
    },
    {
      year: 2019,
      text: "Den 30 mars organiserar Morgonmysboisen en extremt lyckad maskerad ute i Guddarp.",
    },
    {
      year: 2019,
      text: "Den 12 januari får Thy nytt kassasystem.",
    },
    {
      year: 2019,
      text: "Året då Morgonmysboisens medlemmar tog studenten och valde att lägga 100% fokus på organisationens arbete och budskap.",
    },
    {
      year: 2020,
      text: "Den 20 juli hade Jesper Svensson en grym natt.",
    },
  ];

  const TimeStamp = ({ year, text, side }) => {
    return (
      <div className={`container ${side || "left"}`}>
        <div className="content">
          <h2>{year}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <main id="start">
      <div className="content">
        <div id="header">
          <h1>Morgonmysboisen</h1>
          <Image src={"/images/grupp_bild.png"} width={2592} height={1434} alt="Bakgrund" />
        </div>
        <div className="link-list">
          <Link href={"/lmm1"}>LMM1</Link>
          <Link href={"/lmm2"}>LMM2</Link>
          <Link href={"/lmm3"}>LMM3</Link>
          <Link href={"/"}>Kokosboll</Link>
          <Link href={"/"}>Art gallery</Link>
          <Link href={"/"}>Behind the scenes</Link>
        </div>
        <div id="about">
          <h2>Om Morgonmysboisen</h2>
          <p>
            Morgonmysboisen är en organisation vars syfte är att kunna erbjuda individer en plats
            för roliga stunder och självklart mys.
          </p>
          <p className="review">
            <q>Med Morgonmysboisen har jag kunnat integreras in i det svenska samhället.</q>
            <br />- Benjamin Boros - gamer och kelgris.
          </p>
          <p>
            Morgonmysboisen, tidigare kallad och även välkänd som Kvällsmysboisen, blev under 2022
            ett officiellt kulturarv i Sverige efter organisationens framgångsrika arbete med humor
            och glamor. Framgångarna såsom hit-triliogin &quot;Lir Med Morgonmysboisen&quot; och den
            ökända låten &quot;Kokosboll&quot; satte organisationen på kartan och gjorde Ljungby
            kommun till en plats för unga att utvecklas.
          </p>
          <p className="review">
            <q>Genom låten Kokosboll kunde jag hålla mig borta från kriminalitet och droger.</q>
            <br />- Rasmus Al-sudany - låtskrivare och arab.
          </p>
          <p>
            Just nu tar vi inte in nya medlemmar, men ansök gärna om en plats genom vår mail:
            <a href="mailto:alle.goransson@hotmail.com"> alle.goransson@hotmail.com</a>.
          </p>
        </div>
        <div id="timeline">
          <div className="timeline">
            {timeline_content.map((content, idx) => {
              return (
                <TimeStamp
                  year={content.year}
                  text={content.text}
                  key={idx}
                  side={idx % 2 == 0 ? "left" : "right"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
