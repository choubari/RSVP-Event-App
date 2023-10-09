import CategoryCard from "@/components/category-card";
import LoadingSkeleton from "@/components/loading-grid-skeleton";
import { Category } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

export async function getCategories() {
  const categories = await fetch(`${process.env.API_ENDPOINT}/categories`);
  return categories;
}

async function CategoriesList() {
  const response = await getCategories();
  const categories = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

  if (!categories) {
    return <div>Failed to load data</div>;
  }
  return (
    <>
      {categories.map((category: Category) => (
        <Link href={`/events?category=${category.name}`} key={category.id}>
          <CategoryCard key={category.id} category={category} />
        </Link>
      ))}
    </>
  );
}

export default async function Categories() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium my-3">
        Categories Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        <Suspense fallback={<LoadingSkeleton />}>
          <CategoriesList />
        </Suspense>
      </div>
    </div>
  );
}
