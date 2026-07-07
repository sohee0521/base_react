import { sites } from "../js/data";

export default function Ex01() {
  return (
    <div className="bg-gray-100 h-screen p-10 space-y-2">
      {sites.map((site) => (
        <a href={site.url}>
          <ul
            key={sites.id}
            className="w-[360px] space-y-1  bg-white mx-auto rounded-2xl shadow-md p-5 transition hover:bg-amber-200 "
          >
            <li className="text-lg font-bold">{site.name}</li>
            <li className="text-sm ">{site.description}</li>
          </ul>
        </a>
      ))}
    </div>
  );
}
