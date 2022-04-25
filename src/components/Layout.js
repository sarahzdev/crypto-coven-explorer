import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="font-serif bg-zinc-800 text-zinc-400 min-h-screen w-full">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
