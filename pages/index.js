import Item from "@/components/Item/Item";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import Head from "next/head";

import image_1 from "../assets/jollof-rice-1.jpeg";
import image_2 from "../assets/jollof_rice_2.jpeg";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const foodList = [
    {
      title: "Potato Chips with Chicken",
      image: image_1,
      description: "Green Leaf Eatery",
      price: "GHC 30.00",
      status: "open",
    },
    {
      title: "Potato Chips with Chicken",
      image: image_2,
      description: "Green Leaf Eatery",
      price: "GHC 25.00",
      status: "closed",
    },
    {
      title: "Potato Chips with Chicken",
      image: image_2,
      description: "Green Leaf Eatery",
      price: "GHC 15.00",
      status: "closed",
    },
    {
      title: "Potato Chips with Chicken",
      image: image_1,
      description: "Green Leaf Eatery",
      price: "GHC 50.00",
      status: "open",
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gray-100">
        <div className="lg:w-1/3 bg-white mx-auto">
          <Nav />
          <Search />
          <div className="grid grid-cols-2 justify-between pb-10 mx-8  gap-y-5">
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
