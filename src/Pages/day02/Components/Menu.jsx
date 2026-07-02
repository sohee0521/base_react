export default function Menu(props) {
  const { name, menu, side } = props;

  return (
    <div className="con" style={{ backgroundColor: "lightgray" }}>
      <p>이름: {name}</p>
      <p>음식명: {menu}</p>
      <p>사이드메뉴: {side}</p>
    </div>
  );
}
