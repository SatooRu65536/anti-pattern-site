import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import { Box, Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import { items, time } from "@/components/util";
import ItemCard from "@/components/Card";
import { useRecoilState } from "recoil";

const Page: NextPage = () => {
  const [addedCart, setAddedCart] = useState<string[]>([]);
  const [startTime, setStartTime] = useRecoilState(time);

  function switchCartItem(itemId: string, forceRemove = false) {
    if (addedCart.includes(itemId) || forceRemove) {
      const addedCartSnap = addedCart.filter(
        (item) => item !== itemId
      ) as string[];
      setAddedCart(addedCartSnap);
    } else {
      const addedCartSnap = [...addedCart, itemId];
      setAddedCart(addedCartSnap);
    }
  }

  function toPurchase() {
    const res = window.confirm("購入手続きに進みますか?");

    if (res) {
      if (addedCart.length > 0) {
        Router.push(
          { pathname: "/purchase", query: { cart: addedCart } },
          "/purchase"
        );
      } else {
        window.alert("商品が選択されていません");
      }
    } else setAddedCart([]);
  }

  useEffect(() => {
    setStartTime(new Date().getTime());
  }, [setStartTime]);

  return (
    <Box minH="calc(100vh - 122px)">
      <Grid
        p="5"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="6"
      >
        {items.map((item, i) => {
          return <ItemCard key={i} switchCartItem={switchCartItem} {...item} />;
        })}
      </Grid>

      <Flex my="10">
        <Spacer />
        <Text
          mr="5"
          p="3"
          borderRadius="10"
          fontWeight="bold"
          color="gray.100"
          bgColor="red.400"
          display="inline-block"
          boxShadow="xl"
          rounded="xl"
          cursor="pointer"
          transition="all .3s"
          _hover={{ boxShadow: "2xl", bgColor: "red.500" }}
          onClick={toPurchase}
        >
          購入手続きに進む
        </Text>
      </Flex>
    </Box>
  );
};

export default Page;
