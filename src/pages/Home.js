function Home(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-info home__page__wrap"
      style={{ width: "calc(100vw-56px);" }}
    >
      <div className="container">
        <h1>
          UzScript - bu javascriptning
          <br /> o'zbekcha kengaytmasidir
        </h1>
        <p>
          Siz dasturlashni o'zbekcha o'rganib ajoyib loyihalar qila olasiz.
          Hamda kelajakda bemalol boshqa dasturlash tillarini o'rganib keta
          olashingiz mumkin.
        </p>
      </div>
    </div>
  );
}

export default Home;
