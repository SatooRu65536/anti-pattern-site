import type { NextPage } from "next";
import { Grid } from "@chakra-ui/react";
import ItemCard from "@/components/Card";
import { Item } from "@/components/types";

const Page: NextPage = () => {
  const items: Item[] = [
    {
      name: "将来が不安なペンギン",
      detail: "働きたくねぇ...",
      price: 330010,
      imgPath: "/item/gentoo.jpg",
    },
    {
      name: "すごい水筒",
      detail:
        "なんか冷めづらいいい感じの構造の水筒です。雪山登山にはちょっといいかもしれません。",
      price: 2980,
      imgPath: "/item/water-bottle.jpg",
    },
    {
      name: "大きなお城",
      detail: "とても大きなお城です。一括で購入して頂けた場合にはエビフライ1本をお付けします。",
      price: 110,
      imgPath: "/item/castle.jpg",
    },
  ];

  return (
    <Grid p="5" templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="6">
      {items.map((item, i) => {
        return <ItemCard key={i} {...item} />;
      })}
    </Grid>
  );
};

export default Page;
