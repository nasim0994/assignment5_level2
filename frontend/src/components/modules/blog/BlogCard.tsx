import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function BlogCard() {
  return (
    <Link
      href={`/blogs/slug`}
      className="rounded-md bg-white shadow transition delay-75 duration-300 ease-in-out hover:scale-105"
    >
      <div className="relative h-[105px] w-full sm:h-40">
        <Image
          src=""
          alt="blog"
          className="h-full w-full rounded-t-md"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 flex items-center gap-x-2">
          <span className="rounded-md bg-secondary p-1 text-[8px] text-white">
            category
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 p-3">
        <h2 className="text-lg font-medium leading-5">Blog Title</h2>
        <p className="mt-2 text-xs text-neutral-content">
          {moment(435567454).startOf("hour").fromNow()}
        </p>
        <div className="bg_gradient mt-2 w-max rounded px-2 py-1 text-[13px] text-base-100">
          Read More
        </div>
      </div>
    </Link>
  );
}
