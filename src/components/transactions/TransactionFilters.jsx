import { FiSearch, FiX } from "react-icons/fi";
import Input from "../ui/Input";
import Button from "../ui/Button";

function TransactionFilters({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  categories,
  clearFilters,
}) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">

      <div className="flex flex-col gap-5 xl:flex-row">

        {/* Search */}

        <div className="flex-1">

          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            leftIcon={<FiSearch size={18} />}
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">

          <Button
            variant={
              filterType === "all"
                ? "primary"
                : "secondary"
            }
            onClick={() =>
              setFilterType("all")
            }
          >
            All
          </Button>

          <Button
            variant={
              filterType === "income"
                ? "primary"
                : "secondary"
            }
            onClick={() =>
              setFilterType("income")
            }
          >
            Income
          </Button>

          <Button
            variant={
              filterType === "expense"
                ? "primary"
                : "secondary"
            }
            onClick={() =>
              setFilterType("expense")
            }
          >
            Expense
          </Button>

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
            className="rounded-2xl border border-slate-200/70 bg-white/70 px-5 dark:border-slate-700/60 dark:bg-slate-900/70"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-2xl border border-slate-200/70 bg-white/70 px-5 dark:border-slate-700/60 dark:bg-slate-900/70"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>

          <Button
            variant="secondary"
            leftIcon={<FiX />}
            onClick={clearFilters}
          >
            Clear
          </Button>

        </div>

      </div>

    </div>
  );
}

export default TransactionFilters;