import { ChevronLeft } from "lucide-react";
import { Heart } from "lucide-react";
import { Pause } from "lucide-react";
import { StepBack } from "lucide-react";
import { StepForward } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Repeat } from "lucide-react";
import { FaPause } from "react-icons/fa6";

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
        <div
          className="w-[250px] h-[250px] bg-amber-100 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0DRL5P3sJhACm7i_j7Elxz34NGhtgxmtQ_awdtScwg&s=10')] bg-cover mx-auto rounded-full mb-4
        ] hover:scale-105 hover:shadow-[0_0_15px_5px] shadow-white/40 duration-200"
        ></div>
        <h3 className="text-2xl">Rude!</h3>
        <h5 className=" text-md  text-white/70">Hearts2Hearts</h5>
      </div>
      <div className="text-md text-center space-y-0.5">
        <p className=" text-white/50">날 향한 시선에 “Hate me?”</p>
        <p className="">누가 뭐래도 Can’t change me</p>
        <p className="text-white/50">
          지금 이대로 좋아 나다울 때 누구보다 눈부셔 난
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="relative w-full h-[10px] flex flex-col">
          <div className="w-full h-[3px] bg-white/50 rounded-2xl my-auto"></div>
          <div className="absolute w-full top-0 left-0 flex items-center">
            <div className="w-[30%] h-[3px] bg-lime-400 rounded-bl-2xl rounded-tl-2xl"></div>
            <div className="w-[10px] h-[10px] bg-lime-400 rounded-2xl"></div>
          </div>
        </div>
        <div className="text-sm w-full flex justify-between text-white/50 mb-5">
          <p>0:28</p>
          <p>2:45</p>
        </div>
        <div className="w-fill flex justify-between">
          <Repeat strokeWidth={1.5} />
          <div className="w-[40%] flex justify-between">
            <div className="w-[44px] h-[44px] bg-white/20 flex justify-center items-center rounded-full">
              <StepBack strokeWidth={1.5} />
            </div>
            <div className="w-[44px] h-[44px] bg-lime-400  flex justify-center items-center rounded-full">
              <FaPause color="black" size={24} />
            </div>
            <div className="w-[44px] h-[44px] bg-white/20 flex justify-center items-center rounded-full">
              <StepForward strokeWidth={1.5} />
            </div>
          </div>

          <ListMusic strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
