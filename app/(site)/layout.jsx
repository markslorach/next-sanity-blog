import NavBar from "../components/NavBar";

export default function SiteLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="max-w-2xl mx-auto px-4 lg:px-0">{children}</main>
    </>
  );
}
