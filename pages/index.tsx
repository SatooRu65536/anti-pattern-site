import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Grid } from "@chakra-ui/react";
import ItemCard from "@/components/Card";
import { Item } from "@/components/types";

const Page: NextPage = () => {
  const [addedCart, setAddedCart] = useState<string[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as string[];
    setAddedCart(cart);
  }, []);

  const switchCartItem = (itemId: string) => {
    if (addedCart.includes(itemId)) {
      const addedCartSnap = addedCart.filter(
        (item) => item !== itemId
      ) as string[];
      setAddedCart(addedCartSnap);
      localStorage.setItem("cart", JSON.stringify(addedCartSnap));
    } else {
      const addedCartSnap = [...addedCart, itemId];
      setAddedCart(addedCartSnap);
      localStorage.setItem("cart", JSON.stringify(addedCartSnap));
    }
  };

  const items: Item[] = [
    {
      id: "penguin-0001",
      name: "将来が不安なペンギン",
      detail: "働きたくねぇ...",
      price: 330010,
      imgPath: "/item/gentoo.jpg",
    },
    {
      id: "waterbottle-0001",
      name: "すごい水筒",
      detail:
        "なんか冷めづらいいい感じの構造の水筒です。雪山登山にはちょっといいかもしれません。",
      price: 2980,
      imgPath: "/item/water-bottle.jpg",
    },
    {
      id: "castle-0001",
      name: "大きなお城",
      detail:
        "とても大きなお城です。一括で購入して頂けた場合にはエビフライ1本をお付けします。",
      price: 110,
      imgPath: "/item/castle.jpg",
    },
  ];

  return (
    <Grid p="5" templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="6">
      {items.map((item, i) => {
        return (
          <ItemCard
            key={i}
            addedCart={addedCart}
            switchCartItem={switchCartItem}
            {...item}
          />
        );
      })}
    </Grid>
  );
};

export default Page;
