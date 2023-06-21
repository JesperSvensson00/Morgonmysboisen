export default function Movies() {
  return (
    <main id="movies" className="lmm">
      <video src="background.mp4" className="background" muted autoPlay loop />
      <div className="content">
        <div className="video-holder">
          <h1>Introducing Morgonmysboisen</h1>
          <iframe src="https://www.youtube.com/embed/eqrx7isouKw" />
        </div>
        <div className="video-holder">
          <h1>Köpenhamn med Kvällsmysboisen!!! feat. Måns</h1>
          <iframe src="https://www.youtube.com/embed/xdz-qkrHosM" />
        </div>
        <div className="video-holder">
          <h1>Kokosboll</h1>
          <iframe src="https://www.youtube.com/embed/J_0A9-OCpYE" />
        </div>
      </div>
    </main>
  );
}
