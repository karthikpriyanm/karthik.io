export default function SideNav({ activePage, setActivePage }) {
  const navItems = ["Home", "Contact", "Resume", "Skills", "Projects", "About"];
  return (
    <aside className="w-64 bg-gray-950 p-6 flex flex-col gap-4">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setActivePage(item)}
          className={[
            "text-left px-4 py-2 rounded hover:bg-gray-700",
            activePage === item ? "bg-gray-700" : ""
          ].join(" ")}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}