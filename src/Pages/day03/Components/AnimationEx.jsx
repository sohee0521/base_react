export default function AnimationEx() {
  return (
    <div className="space-y-30 p-30">
      <div>
        <h2 className="text-2xl font-bold">sipn</h2>
        <div className="w-32 h-32 bg-sky-300 animate-spin"></div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">bounce</h2>
        <div className="w-32 h-32 bg-sky-300 animate-bounce"></div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">ping</h2>
        <div className="w-32 h-32 bg-sky-300 animate-ping"></div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">pulse</h2>
        <div className="w-32 h-32 bg-sky-300 animate-pulse"></div>
      </div>
    </div>
  );
}
