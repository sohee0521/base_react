import { ChevronLeft } from "lucide-react";
import { Heart } from "lucide-react";

export default function MusicEx() {
  return (
    <div className="h-lvh bg-black text-white space-y-10">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="w-[40px] h-[40px] bg-white/50 rounded-4xl flex justify-center items-center">
          <ChevronLeft />
        </div>
        <h4>Now Playing</h4>
        <div className="w-[40px] h-[40px] bg-white/50 rounded-4xl flex justify-center items-center">
          <Heart />
        </div>
      </div>
      <div className="text-center space-y-0.5">
        <div className="w-[200px] h-[200px] bg-amber-100 mx-auto rounded-full"></div>
        <h3 className="">Rude!</h3>
        <h5 className=" color-white/50">Hearts to Hearts</h5>
      </div>
      <div className="text-center space-y-0.5">
        <p className=" text-white/50">날 향한 시선에 “Hate me?”</p>
        <p className="">누가 뭐래도 Can’t change me</p>
        <p className="text-white/50">
          지금 이대로 좋아 나다울 때 누구보다 눈부셔 난
        </p>
      </div>
      <div>
        <div className="relative w-[80%] h-[10px] flex flex-col mx-auto">
          <div className="w-full h-[3px] bg-white/50 rounded-2xl my-auto"></div>
          <div className="absolute w-full top-0 left-0 flex items-center">
            <div className="w-[30%] h-[3px] bg-lime-400 rounded-bl-2xl rounded-tl-2xl"></div>
            <div className="w-[10px] h-[10px] bg-lime-400 rounded-2xl"></div>
          </div>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
