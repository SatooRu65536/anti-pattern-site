import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Page: NextPage = () => {
  const [payData, setPayData] = useState({
    cardNum: "xxxx-xxxx-xxxx-xxxx",
    expiry: "xx/xx",
    securityCode: "xxx",
  });
  const [errMsg, setErrMsg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  function submit() {
    if (!payData.cardNum.match(/\d{4}-\d{4}-\d{4}-\d{4}/))
      setErrMsg("正しく入力してください");
    else if (payData.cardNum === "") setErrMsg("必須項目が入力されていません");
    else if (!payData.expiry.match(/\d{2}\/\d{2}/))
      setErrMsg("正しく入力してください");
    else if (payData.expiry === "") setErrMsg("必須項目が入力されていません");
    else if (!payData.securityCode.match(/\d{3}/))
      setErrMsg("正しく入力してください");
    else if (payData.securityCode === "")
      setErrMsg("必須項目が入力されていません");
    else {
      Router.push("/completion");
      return;
    }

    setPayData({
      cardNum: "xxxx-xxxx-xxxx-xxxx",
      expiry: "xx/xx",
      securityCode: "xxx",
    });
  }

  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.alert("戻るボタンが押されたためトップページに移動します");
      Router.push("/");
    });
  }, []);

  return (
    <Box minH="calc(100vh - 122px)" p="4">
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              注意
            </AlertDialogHeader>

            <AlertDialogBody>購入をキャンセルしますか？</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                onClick={() => {
                  Router.push("/");
                }}
              >
                はい
              </Button>
              <Button colorScheme="red" ml={3} onClick={onClose}>
                キャンセル
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

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
          onClick={onOpen}
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
          onClick={submit}
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
          カード番号
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="カード番号"
          w="80%"
          minW="200px"
          mr="2"
          value={payData.cardNum}
          onChange={(e) =>
            setPayData({
              ...payData,
              cardNum: e.target.value,
            })
          }
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          有効期限
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="MM/YY"
          w="80%"
          minW="200px"
          mr="2"
          value={payData.expiry}
          onChange={(e) =>
            setPayData({
              ...payData,
              expiry: e.target.value,
            })
          }
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          セキュリティコード
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="セキュリティコード"
          w="80%"
          minW="200px"
          mr="2"
          value={payData.securityCode}
          onChange={(e) =>
            setPayData({
              ...payData,
              securityCode: e.target.value,
            })
          }
        />
      </Box>

      <Text color="red">{errMsg}</Text>
    </Box>
  );
};

export default Page;
