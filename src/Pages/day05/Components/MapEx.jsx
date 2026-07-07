export default function MapEx() {
  const arrs = [1, 2, 3, 4, 5];

  //   map은 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환함

  return (
    <div>
      <ul>
        {arrs.map((num) => (
          <li key={num}>숫자: {num}</li>
          // jsx에서 map을 사용할 때 반드시 key를 써야하며 값으론 고유값이 지정되어야함
        ))}
      </ul>
    </div>
  );
}
