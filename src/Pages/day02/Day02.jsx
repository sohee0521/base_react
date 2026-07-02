import Header from "./components/header";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Footer from "./components/Footer";
import Intro from "./Components/Intro";
import Menu from "./Components/Menu";

export default function Day02() {
  return (
    <div>
      {/* <Header />
      <Section_1 />
      <Section_2 />
      <Footer /> */}

      {/* <div>
        <h1>자기소개</h1>
        <p>이름: 박소희</p>
        <p>나이: 22</p>
      </div> */}

      {/* <Intro name="박소희" age="22" hobby="잠자기" />
      <br />
      <Intro name="강아" age="50" hobby="술" />
      <br />
      <Intro name="고양이" age="44" hobby="누워있기" /> */}

      <Menu name="박소희" menu="떡볶이" side="튀김" />
    </div>
  );
}
