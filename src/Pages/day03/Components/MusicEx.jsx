import { ChevronLeft } from "lucide-react";
import { Heart } from "lucide-react";

export default function MusicEx() {
  return (
    <div className="bg-black text-white space-y-10">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="w-[40px] h-[40px] bg-white/50 rounded-4xl flex justify-center items-center">
          <ChevronLeft />
        </div>
        <h4>Now Playing</h4>
        <div className="w-[40px] h-[40px] bg-white/50 rounded-4xl flex justify-center items-center">
          <Heart />
        </div>
      </div>
      <div>
        <div className="w-[200px] h-[200px] bg-amber-100 mx-auto rounded-full"></div>
        <h3>Rude!</h3>
      </div>
    </div>
  );
}
