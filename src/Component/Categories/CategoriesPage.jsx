"use client";

import { useMemo, useState } from "react";
import CategoriesHeader from "./CategoriesHeader";
import CategoriesStats from "./CategoriesStats";
import SearchBox from "./SearchBox";
import CategoryGrid from "./CategoryGrid";
import EmptyState from "./EmptyState";
import AboutReseller from "./AboutReseller";


export default function CategoriesPage({ categories }) {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  const totalJobs = categories.reduce(
    (sum, item) => sum + item.totalJobs,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <CategoriesHeader />
     
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoriesStats
          totalCategories={categories.length}
          totalJobs={totalJobs}
        />

        <div className="my-10">
          <SearchBox
            search={search}
            setSearch={setSearch}
          />
        </div>

        {filteredCategories.length > 0 ? (
          <CategoryGrid categories={filteredCategories} />
        ) : (
          <EmptyState />
        )}

        <AboutReseller />
      </div>
    </main>
  );
}