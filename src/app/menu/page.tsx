import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-115vh md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-80vh bg-cover p-8 md:h-80vh"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            {category.color == "white" ? (
              <button
                className={`hidden 2xl:block bg-white text-red-500 py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            ) : (
              <button
                className={`hidden 2xl:block bg-black text-white py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
