export default function MapEx02() {
  const members = ["가", "나", "다", "라", "마", "바", "사"];
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64">
        <h2 className="text-lg font-bold mb-4 text-center">회원목록</h2>

        <ul className="space-y-[15px]">
          {members.map((member) => (
            <li
              key={member}
              className="bg-gray-100 px-4 py-2 transition
               hover:bg-gray-300"
            >
              {member}님
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
