export default function Intro(props) {
  //   const name = props.name;
  //   const age = props.age;

  const { name, age, hobby } = props;
  //   객체 비구조화 할당

  return (
    <div>
      <div
        style={{
          background,
        }}
      >
        <h1>자기소개</h1>
        <p>이름:{name}</p>
        <p>나이: {age}</p>
        <p>취미: {hobby}</p>
      </div>
    </div>
  );
}
