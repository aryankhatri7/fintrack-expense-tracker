import {
  FiShoppingBag,
  FiCoffee,
  FiTruck,
  FiHome,
  FiFilm,
  FiBook,
  FiHeart,
  FiDollarSign,
  FiTrendingUp,
  FiBriefcase,
  FiGrid,
} from "react-icons/fi";

function CategoryIcon({ category }) {
  const icons = {
    food: <FiCoffee />,
    transport: <FiTruck />,
    shopping: <FiShoppingBag />,
    bills: <FiDollarSign />,
    rent: <FiHome />,
    entertainment: <FiFilm />,
    education: <FiBook />,
    healthcare: <FiHeart />,
    investment: <FiTrendingUp />,
    salary: <FiBriefcase />,
    freelance: <FiBriefcase />,
    other: <FiGrid />,
  };

  const key = (category || "other").toLowerCase();

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-500">
      {icons[key] || <FiGrid />}
    </div>
  );
}

export default CategoryIcon;