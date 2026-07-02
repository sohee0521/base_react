export default function TailwindEx() {
  return (
    <div>
      <div class="w-28 h-28 bg-green-300 mx-[20px] my-[20px]"></div>
      <div className="w-[100px] h-[100px] border border-amber-200 m-auto"></div>
      <br />
      {/* ---------------------------------------------- */}
      <div className="text-xl font-black text-red-400">글자 크기</div>
      <br />
      {/* ---------------------------------------------- */}
      <div className="w - [500px] bg-amber-100 flex justify-between items-center">
        <div className="w-[100px] h-[100px] bg-blue-400 flex justify-center items-center">
          컨텐츠1
        </div>
        <div className="w-[100px] h-[100px] bg-blue-400 flex justify-center items-center">
          컨텐츠2
        </div>
        <div className="w-[100px] h-[100px] bg-blue-400 flex justify-center items-center">
          컨텐츠3
        </div>

        {/* ----------------------------------------- */}
      </div>
      <br />
      <div className="w-[300px] h-[300px] bg-fuchsia-300 hover:bg-fuchsia-500 transition"></div>
    </div>
  );
}
