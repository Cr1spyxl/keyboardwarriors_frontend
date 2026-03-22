import { useState } from "react";

const Sidebar = ({ onSelectCategory }) => {
  const [active, setActive] = useState("All");

  const categories = ["All", "PC Parts", "Peripherals", "Prebuilts"];

  const handleClick = (cat) => {
    setActive(cat);
    onSelectCategory?.(cat === "All" ? null : cat);
  };

  return (
    <aside className="bg-light text-dark p-3" style={{ borderRadius: "8px", border: '1px solid #d1d5db' }}>
      <h5 className="mb-3">Categories</h5>

      <ul className="list-group">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`list-group-item ${active === cat ? "active" : ""}`}
            role="button"
            onClick={() => handleClick(cat)}
            style={{ cursor: "pointer" }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;