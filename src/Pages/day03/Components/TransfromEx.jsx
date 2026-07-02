export default function TransfromEx() {
  return (
    <div className=" space-y-10 p-10">
      {/* scale */}
      <div>
        <h2 className="text-xl font-bold mb-3">Scale</h2>
        <div className="w-32 h-32 bg-blue-900 rounded-2xl hover:scale-110 shadow-lg transition duration-500"></div>
      </div>
      {/* rotate */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-3">Rotate</h2>
        <div className="w-32 h-32 bg-green-300 rounded-2xl hover:rotate-100 duration-500"></div>
      </div>
      {/* translate */}
      <div className="mt-6">
        <div>
          <h2 className="text-2xl font-bold mb-3">Translate</h2>
          <div className=" w-32 h-32 bg-green-300 rounded-2xl hover:translate-y-30 duration-500"></div>
        </div>
      </div>
    </div>
  );
}
