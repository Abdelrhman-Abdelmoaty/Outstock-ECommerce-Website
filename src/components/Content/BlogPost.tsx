import { BlogPost } from "@src/lib/types";

export default function BlogPost({ imgUrl, category, title, date, desc }: BlogPost) {
  return (
    <div>
      <a href="/">
        <div className="overflow-hidden">
          <img src={imgUrl} alt="" className="img-fill cursor-pointer hover:scale-110 ease-500" />
        </div>
      </a>
      <p className="text-[var(--secondary-color)] text-sm mt-6">{category}</p>
      <p className="text-xl mb-3">{title}</p>
      <p className="text-[#666] text-sm">Posted: {date}</p>
      <p className="text-[#666] line-clamp-2 my-8">{desc}</p>
      <a href="/" className="uppercase border border-[#222] px-12 py-4 font-semibold ease-500 hover:bg-black hover:text-white text-xs">
        Read More
      </a>
    </div>
  );
}
