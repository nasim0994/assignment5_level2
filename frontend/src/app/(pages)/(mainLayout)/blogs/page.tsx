import BlogCard from "@/components/modules/blog/BlogCard";
import SearchBlog from "@/components/modules/blog/SearchBlog";

export default function BlogsPage() {
  return (
    <section className="py-2 sm:py-5">
      <div className="container">
        <div className="items-center justify-between sm:flex">
          <h2 className="mb-3 text-xl sm:text-2xl font-semibold">
            📰 All Blogs
          </h2>
          <div>
            <SearchBlog />
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-2 md:grid-cols-3">
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
