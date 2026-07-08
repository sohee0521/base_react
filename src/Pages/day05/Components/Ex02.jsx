import { useState } from "react";
import { sites } from "../js/data";

export default function Ex02() {
  const [filter, setFilter] = useState("all");
  // [현재상태값, 상태를 변경하는 함수] = useState("초기값")

  const filterList =
    filter === "all" ? sites : sites.filter((item) => item.category === filter);

  return (
    <div
      className="
        h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-gray-300
        space-y-4
        "
    >
      {/* 필터 버튼 */}
      <div className="flex gap-2">
        {/* {tabMenu.map((menu) => (
            <button
          onClick={() => setFilter(menu)}
          //클릭시 변경
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
           
            ${filter === "all" ? " bg-red-400 text-white" : " bg-white text-black"}
        `}
          // css에서 부분적으로 조건 넣을 때: className = {``}
        >
          전체
        </button>
          ))} */}

        <button
          onClick={() => setFilter("all")}
          //클릭시 변경
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
           
            ${filter === "all" ? " bg-red-400 text-white" : " bg-white text-black"}
        `}
          // css에서 부분적으로 조건 넣을 때: className = {``}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("portal")}
          className={`
          cursor-pointer
            px-3 
            py-1 
            rounded
           ${filter === "portal" ? " bg-red-400 text-white" : " bg-white text-black"}
        `}
        >
          포털
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`
          cursor-pointer
            px-3 
            py-1 
            rounded
            ${filter === "video" ? " bg-red-400 text-white" : " bg-white text-black"}
        `}
        >
          영상
        </button>
        <button
          onClick={() => setFilter("sns")}
          className={`
          cursor-pointer
            px-3 
            py-1 
            rounded
            ${filter === "sns" ? " bg-red-400 text-white" : " bg-white text-black"}
        `}
        >
          sns
        </button>
      </div>

      {/* 컨텐츠 */}
      <div className="w-80 space-y-3">
        {filterList.map((filter) => (
          <a
            key={filter.id}
            className="
            block
            bg-white
            p-4
            rounded-lg 
            shadow
        "
            href={filter.url}
          >
            <h2 className="text-[20px] font-bold">{filter.name}</h2>
            <p className="text-gray-500 mt-4">{filter.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
