import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Router, { useRouter } from "next/router";
import {
  Box,
  VStack,
  Text,
  StackDivider,
  Image,
  Flex,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import { itemsObj } from "@/components/util";
import { cloneDeep } from "lodash";

const Page: NextPage = () => {
  const router = useRouter();
  const [addedCart, setAddedCart] = useState<string[]>([]);
  const [qty, setQty] = useState<number[]>([]);

  useEffect(() => {
    if (!addedCart || !("map" in addedCart)) {
      Router.push("/");
      return;
    }

    const cart = router.query.cart;
    if (!cart) {
      Router.push("/");
    } else if (typeof cart === "string") {
      setAddedCart([cart]);
      setQty([1]);
    } else {
      setAddedCart(cart);
      setQty(Array(addedCart.length).fill(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addQty(i: number, addNum: number) {
    const qtySnap = cloneDeep(qty);
    qtySnap[i] = qty[i] + addNum;

    if (qtySnap[i] <= 0) {
      const cartSnap = cloneDeep(addedCart);

      delete qtySnap[i];
      delete cartSnap[i];
      setAddedCart(cartSnap);
    }
    setQty(qtySnap);
  }

  function toShippingInfoPage() {
    const cart = addedCart.map((itemId, i) => {
      return { id: itemId, qty: qty[i] };
    });

    if (addedCart.length > 0 && typeof addedCart[0] === "number") {
      window.alert("配送情報の入力に進みます");

      Router.push(
        { pathname: "/shippinginfo", query: { cart: JSON.stringify(cart) } },
        "/shippinginfo"
      );
    } else {
      window.alert("商品が選択されていません");
      Router.push("/");
    }
  }

  function sum() {
    if (addedCart.length > 0) {
      const prices = addedCart.map((itemId, i) => {
        return itemsObj[itemId].price * qty[i];
      });
      return prices.reduce((sum, element) => sum + element, 0);
    } else {
      return 0;
    }
  }

  return (
    <Box minH="calc(100vh - 122px)">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        m="5"
        p="4"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="gray.200"
        borderRadius="10px"
      >
        {addedCart &&
          "map" in addedCart &&
          addedCart.map((itemId, i) => {
            const item = itemsObj[itemId];
            if (item === undefined) return <Box key={i}>なし</Box>;

            return (
              <Box key={i}>
                <Heading
                  w="100%"
                  size="md"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {item.name}
                </Heading>

                <Flex>
                  <Image
                    w="150px"
                    mx="4"
                    mt="2"
                    objectFit="cover"
                    sx={{ aspectRatio: "16/9" }}
                    src={
                      item.imgPath ??
                      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    }
                    alt="item image"
                  />
                  <Box w="calc(100% - 150px)" position="relative">
                    <Text
                      h="80px"
                      pt="2"
                      overflow="hidden"
                      display="-webkit-box"
                      sx={{ WebkitBoxOrient: "vertical", WebkitLineClamp: "3" }}
                    >
                      {item.detail}
                    </Text>
                    <Flex flexWrap="wrap">
                      <Flex>
                        <Button size="xs" onClick={() => addQty(i, -3)}>
                          -
                        </Button>
                        <Text px="3">{qty[i]}</Text>
                        <Button size="xs" onClick={() => addQty(i, 5)}>
                          +
                        </Button>
                      </Flex>

                      <Spacer />

                      <Heading size="md" textAlign="right">
                        ¥{item.price.toLocaleString()}
                      </Heading>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          })}
      </VStack>

      <Heading size="lg" pr="6" textAlign="right">
        計 ¥{sum().toLocaleString()}
      </Heading>

      <Flex my="10">
        <Spacer />
        <Text
          mr="5"
          p="3"
          borderRadius="10"
          fontWeight="bold"
          color="blackAlpha.900"
          bgColor="gray.100"
          display="inline-block"
          boxShadow="xl"
          rounded="xl"
          cursor="pointer"
          transition="all .3s"
          _hover={{
            boxShadow: "2xl",
          }}
          onClick={toShippingInfoPage}
        >
          配送情報を入力する
        </Text>

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
          onClick={() => Router.push("/")}
        >
          トップに戻る
        </Text>
      </Flex>
    </Box>
  );
};

export default Page;
