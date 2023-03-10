import Item from "@/components/Item/Item";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import Head from "next/head";

export default function Home() {
  const foodList = [
    {
      title: "Potato Chips with Chicken",
      image: "/assets/Jollof-rice-1.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 30.00",
      status: "open",
    },
    {
      title: "Potato Chips with Chicken",
      image: "/assets/jollof_rice_2.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 25.00",
      status: "closed",
    },
    {
      title: "Potato Chips with Chicken",
      image: "/assets/jollof_rice_2.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 15.00",
      status: "closed",
    },
    {
      title: "Potato Chips with Chicken",
      image: "/assets/Jollof-rice-1.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 50.00",
      status: "open",
    },
    {
      title: "Potato Chips with Chicken",
      image: "/assets/jollof_rice_2.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 75.00",
      status: "closed",
    },
    {
      title: "Potato Chips with Chicken",
      image: "/assets/Jollof-rice-1.jpeg",
      description: "Green Leaf Eatery",
      price: "GHC 40.00",
      status: "open",
    },
  ];
  return (
    <>
      <Head>
        <title>UI-Assignment</title>
        <meta name="description" content="User Interface Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className=" bg-white m-0 mx-auto lg:w-2/3 xl:w-1/2">
          <Nav />

          <Search />
          <div className="grid grid-cols-1 md:grid-cols-2  justify-between pb-10 mx-8  gap-y-12 md:gap-x-8">
            {foodList.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
