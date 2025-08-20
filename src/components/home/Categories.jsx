import Card from "./Card.jsx";

const Categories = ({ categories }) => {
  return (
    <div className="categories px-6 pt-[6rem] pb-6 flex flex-wrap justify-center gap-6 h-screen">
      {categories.map((category) => (
        <Card
          key={category.key}
          title={category.name}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Categories;
