export default function Intro(props) {
  //   const name = props.name;
  //   const age = props.age;

  const { name, age, hobby } = props;

  return (
    <div>
      <div>
        <h1>자기소개</h1>
        <p>이름:{name}</p>
        <p>나이: {age}</p>
        <p>취미: {hobby}</p>
      </div>
    </div>
  );
}
