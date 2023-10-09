import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div
      className="relative w-80 h-52 bg-cover bg-center shadow-lg rounded-lg"
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
        <p className="text-white font-bold text-xl">{category.name}</p>
        <p className="text-white">{category.description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
