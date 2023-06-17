import Image from "next/image";

export default function Members({ images }) {
  const members = [
    {
      surname: "Jesper",
      familyname: "Svensson",
      nicks: ["Jesps", "Jeppe"],
      desc: "Jesper är grabbgängets intellekt. Han är en intelligent och analytisk person som älskar att lösa problem och debattera. Med sina glasögon och sin bokormsattityd är han alltid redo att lära sig något nytt.",
      age: 22,
      locale: "Sthlm",
      occupation: "Student på KTH",
      song: "Levels - Avicii",
      game: "Minecraft",
      color: "Cyan",
    },
    {
      surname: "Rasmus",
      familyname: "Al-Sudany",
      nicks: ["Raus"],
      desc: "Rasmus är grabbgängets snille. Han är en tekniskt kunnig person som alltid hittar smarta lösningar på tekniska problem. Med sina glasögon och sin ständiga nyfikenhet är han gängets egna tekniknörd.",
      age: 22,
      locale: "Aberdeen",
      occupation: "Student på University of Aberdeen",
      song: "Rocksteady - Fdel",
      game: "WoW",
      color: "Röd",
    },
    {
      surname: "Kriss",
      familyname: "Kania",
      nicks: ["Polacken", "Krzysztof"],
      desc: "Kriss är grabbgängets äldre bror. Han är ansvarsfull och pålitlig och tar hand om de andra i gänget som en storebror. Med sitt lugna sinne och sin stora empati är han den som alla vänder sig till när de behöver råd eller stöd.",
      age: 23,
      locale: "Lund",
      occupation: "Student på LU",
      song: "Kom och ta mig - Brandsta City Släckers",
      game: "Cyberpunk",
      color: "Orange",
    },
    {
      surname: "Gustav",
      familyname: "Alm",
      nicks: ["Stocken", "Trädet", "Gurra"],
      desc: "Gustav är grabbgängets sportfantast. Han är en atletisk och energisk person som älskar alla typer av sport. Med sitt breda leende och sin entusiasm får han alla att vilja delta i olika aktiviteter.",
      age: 23,
      locale: "Linköping",
      occupation: "Engineer på Cloetta AB",
      song: "Ah Yeah So What - Will Sparks",
      game: "Sims 3",
      color: "Gul",
    },
    {
      surname: "Lukas",
      familyname: "Alhbin",
      nicks: ["Lucke", "Lucky Luke", "Albin"],
      desc: "Lukas är grabbgängets äventyrare. Han älskar att utforska och prova nya saker. Med sitt modiga sinne och sin atletiska kropp tar han sig an alla utmaningar som kommer i gängets väg.",
      age: 23,
      locale: "Halmstad",
      occupation: "Snart Officer",
      song: "L'Amour Toujours - Gigi D'Agostino",
      game: "Lego Batman",
      color: "Grön",
    },
    {
      surname: "Alexander",
      familyname: "Göransson",
      nicks: ["Alle", "Ekorren"],
      desc: "Alexander är grabbgängets artist. Han är en kreativ person som älskar att rita och måla. Med sin konstnärliga talang och sin unika stil skapar han fantastiska konstverk som imponerar alla i gänget.",
      age: 23,
      locale: "Ljungby",
      occupation: "Rusta",
      song: "Hon dansar vidare i livet - Hov1",
      game: "BF4",
      color: "Blå",
    },
    {
      surname: "Elias",
      familyname: "Klasson",
      nicks: ["Klasse", "Fearson"],
      desc: "Elias är grabbgängets humorist. Han är en rolig och kvick person som alltid får alla runt omkring sig att skratta. Med sina busiga blåa ögon och sitt ständiga glada humör sprider han glädje i gänget.",
      age: 22,
      locale: "Ljungby/Halmstad",
      occupation: "Oklart - Rusta",
      song: "Mina moppepojkar - Isabelle Öljymäki",
      game: "PUBG",
      color: "Ljusrosa",
    },
    {
      surname: "Benjamin",
      familyname: "Boros",
      nicks: ["Benne"],
      desc: "Benjamin är grabbgängets musiknörd. Han har ett otroligt öra för musik och kan spela flera instrument. Med sitt rockiga utseende och sin passion för musik är han själen i gänget.",
      age: 22,
      locale: "Oxie",
      occupation: "Polisstudent i Malmö",
      song: "Ligga Med Nils - Coola Kids",
      game: "TFT",
      color: "Indigo",
    },
    {
      surname: "Valdemar",
      familyname: "Bodi",
      nicks: ["Valle", "Bodil"],
      desc: "Valdemar  är grabbgängets ordförande. Han är en karismatisk och skicklig ledare som alltid har en lösning på problemen. Med sitt långa bruna hår och bländande leende är han både charmig och självsäker.",
      age: 23,
      locale: "Ljungby",
      occupation: "Arbetare på Dollarstore",
      song: "Älskade Ängel",
      game: "Ball3D",
      color: "Violett",
    },
  ];

  const MemberCard = ({ member }) => {
    return (
      <div className="member-card">
        <div className="image-holder">
          <Image
            src={`/images/members/${member.surname}.webp`}
            alt={`Rolig och konstig bild på ${member.surname}`}
            width={300}
            height={300}
          />
        </div>
        <div className="info">
          <h2 className="name">
            {member.surname} &quot;{member.nicks.join(", ")}&quot; {member.familyname}
          </h2>
          <div className="details">
            <div className="facts">
              <span>Ålder: {member.age}</span>
              <span>Plats: {member.locale}</span>
              <span>Yrke: {member.occupation}</span>
              <span>Favvospel: {member.game}</span>
              <span>Favvolåt: {member.song}</span>
              <span>Favvofärg: {member.color}</span>
            </div>
            <div className="description">{member.desc}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main id="medlemmar">
      <div className="content">
        <div className="header">
          <h1>Medlemmar</h1>
        </div>
        <div className="member-shelf">
          {members.map((member, idx) => {
            return <MemberCard member={member} key={idx} />;
          })}
        </div>
      </div>
    </main>
  );
}
