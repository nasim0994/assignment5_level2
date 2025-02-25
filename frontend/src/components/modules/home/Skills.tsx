import Technologies from "@/components/shared/main/Technologies";

export default function Skills() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
          📰 Skills
        </h2>
        <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
          <span className="text-primary">Technologies and Tools</span> I
          Specialize In
        </h2>

        <Technologies/>
      </div>
    </section>
  );
}
