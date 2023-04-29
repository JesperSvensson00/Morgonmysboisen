import Link from "next/link";

export default function Home() {
  return (
    <main id="start">
      <div className="content">
        <div id="header">
          <h1>Morgonmysboisen</h1>
          <div className="link-list">
            <Link href={"/lmm1"}>LMM1</Link>
            <Link href={"/lmm2"}>LMM2</Link>
            <Link href={"/lmm3"}>LMM3</Link>
          </div>
        </div>
        <div id="about">
          <h2>Om Morgonmysboisen</h2>
          <p>
            Hej och välkommen till Morgonmysboisen - ett gammalt kompisgäng som har varit
            tillsammans länge och har en stark vänskap! Vi har en gemensam passion för gaming och vi
            älskar att spela de bästa spelen tillsammans, som League of Legends och Counter-Strike:
            Global Offensive.
          </p>
          <p>
            Vi är ett tight team som har en speciell dynamik som bara kommer med åren av att vara
            tillsammans. Vi trivs med varandra och vi vet vad vi kan förvänta oss av varandra, både
            på och utanför spelfältet. Vi är stolta över vår gemenskap och vi värdesätter de band vi
            har byggt upp under åren.
          </p>
          <p>
            Även om vi inte aktivt söker nya medlemmar, så är vi alltid glada över att träffa nya
            människor som delar vår passion för gaming. Vi tror på att inkludera och välkomna andra,
            även om vi har en tight grupp. Så om du någonsin vill spela med oss, är du mer än
            välkommen att hoppa in och vara med på ett spel eller två.
          </p>
          <p>
            Tack för att du ville lära känna Morgonmysboisen lite bättre. Vi ser fram emot att spela
            fler spel tillsammans!
          </p>
        </div>
        <div id="timeline">
          <div class="timeline">
            <div class="container left">
              <div class="content">
                <h2>2017</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
