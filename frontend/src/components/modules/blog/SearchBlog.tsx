"use client";
import { BiSearchAlt2 } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function SearchBlog() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = (form.elements[0] as HTMLInputElement).value;
    if (search) {
      router.push(`/blogs?search=${search}`);
    } else {
      router.push(`/blogs`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-max">
      <input
        type="text"
        className="pr-7 border rounded-full px-4 py-1.5 placeholder:text-sm text-sm text-neutral opacity-70 placeholder:font-light"
        placeholder="search blogs..."
      />
      <BiSearchAlt2 className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-content opacity-60 text-lg" />
    </form>
  );
}
