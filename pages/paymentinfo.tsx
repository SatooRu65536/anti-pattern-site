import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { Box, Flex, Heading, Input, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const [userData, setUserData] = useState({
    firstName: "名前",
    lastName: "名字",
    pref: "都道府県",
    city: "市区町村",
    address: "住所",
    build: "建物名",
    postCode: "xxx-xxxx",
    phone: "xxx-xxxx-xxxx",
  });
  const [errMsg, setErrMsg] = useState("");

  function toPaymentInfoPage() {
    if (errMsg === "") Router.push("/paymentinfo");
  }

  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.alert("戻るボタンが押されたためトップページに移動します");
      Router.push("/");
    });
  }, []);

  return (
    <Box minH="calc(100vh - 122px)" p="4">
      <Flex my="4">
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
          onClick={toPaymentInfoPage}
        >
          キャンセルする
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
          購入を完了する
        </Text>
      </Flex>
      <Heading size="md">支払情報の入力</Heading>
      <Text color="red" fontSize="sm">
        送信されませんが、実際の個人情報は入力しないでください
      </Text>

      <Box p="4">
        <Heading size="sm" mb="2">
          氏名
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="名字"
          w="40%"
          mr="2"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({
              ...userData,
              lastName: e.target.value,
            })
          }
        />
        <Input
          placeholder="名前"
          w="40%"
          value={userData.firstName}
          onChange={(e) =>
            setUserData({
              ...userData,
              firstName: e.target.value,
            })
          }
        />
      </Box>

      <Text color="red">{errMsg}</Text>
    </Box>
  );
};

export default Page;
