import Header from "@/components/shared/main/Header";

type props = { children: React.ReactNode };

export default function MainLayout({ children }: props) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
