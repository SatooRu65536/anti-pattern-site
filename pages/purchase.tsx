import { useState } from "react";
import type { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";

const Page: NextPage = () => {
  const router = useRouter();
  const [addedCart, setAddedCart] = useState(router.query.cart);

  return (
    <Box>
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
        onClick={() =>
          Router.push({ pathname: "/purchase", query: { cart: addedCart } })
        }
      >
        購入を続ける
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
    </Box>
  );
};

export default Page;
