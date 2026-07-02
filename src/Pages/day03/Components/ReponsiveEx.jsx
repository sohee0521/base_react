export default function RespoinsiveEx() {
  return (
    <div className="min-h-screen bg-gray-300 p-10 text-center">
      <div
        className="
            mx-auto
            bg-blue-600
            text-white
            rounded-lg
            p-4
            
            w-full
            sm:w-4/5
            md:w-3/5
            lg:w-2/5
            
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl"
      >
        <h1>반응형 예제</h1>
        <p>창 크기를 조절해보세요</p>
        <div>
          <div className="sm:hidden">모바일</div>
          <div className="hidden sm:block md:hidden lg:hidden">Small(sm)</div>
          <div className="hidden sm:hidden md:block lg:hidden">Medium(md)</div>
          <div className="hidden sm:hidden md:hidden lg:block">Large(lg)</div>
        </div>
      </div>
    </div>
  );
}
