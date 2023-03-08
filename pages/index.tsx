import { useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Icon,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";
import { Item } from "@/components/types";
import { MdShoppingCart, MdAddShoppingCart } from "react-icons/md";
import { items } from "@/components/util";

const Page: NextPage = () => {
  const [addedCart, setAddedCart] = useState<string[]>([]);

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

    if (res) Router.push({ pathname: "/purchase", query: { cart: addedCart } });
    else setAddedCart([]);
  }

  const ItemCard = ({ id, name, imgPath, detail, price }: Item) => {
    return (
      <Card
        bg="white"
        boxShadow="xl"
        rounded="xl"
        p="6"
        pb="3"
        cursor="pointer"
        transition="all .3s"
        _hover={{ boxShadow: "2xl" }}
      >
        <CardHeader p="0">
          <Heading
            size="md"
            p="0"
            pb="3"
            width="100%"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {name ?? "商品名"}
          </Heading>
        </CardHeader>

        <Image
          w="100%"
          objectFit="cover"
          sx={{ aspectRatio: "16/9" }}
          src={
            imgPath ??
            "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          alt="item image"
        />

        <CardBody p="0">
          <Box p="2">
            <Text
              h="74px"
              py="2"
              fontSize="sm"
              overflow="hidden"
              display="-webkit-box"
              sx={{ WebkitBoxOrient: "vertical", WebkitLineClamp: "3" }}
            >
              {detail ?? "とっても可愛いペンギンです"}
            </Text>
            <Heading size="md" pt="3" textAlign="end">
              ¥{price ? price.toLocaleString() : 330}
            </Heading>

            <Icon
              as={addedCart.includes(id) ? MdShoppingCart : MdAddShoppingCart}
              boxSize="6"
              color="blackAlpha.800"
              bgColor="white"
              borderRadius="50%"
              h="12"
              w="12"
              p="3"
              transition="all .3s"
              position="absolute"
              bottom="2"
              left="4"
              _hover={{ bgColor: "blackAlpha.100" }}
              onClick={() => {
                switchCartItem(id);
                setTimeout(() => {
                  switchCartItem(id, true);
                }, 60 * 1000);
              }}
            />
          </Box>
        </CardBody>
      </Card>
    );
  };

  return (
    <Box>
      <Grid
        p="5"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="6"
      >
        {items.map((item, i) => {
          return <ItemCard key={i} {...item} />;
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
