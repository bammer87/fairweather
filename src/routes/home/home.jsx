import Categories from "../../components/home/Categories";

function Home() {
  const categories = [
    {
      key: 1,
      name: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      key: 2,
      name: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      key: 3,
      name: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      key: 4,
      name: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      key: 5,
      name: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <>
      <Categories categories={categories} />
    </>
  );
}

export default Home;
