import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { time } from "@/components/util";

const Page: NextPage = () => {
  const [startTime, setStartTime] = useRecoilState(time);
  const endTime = new Date().getTime();

  return (
    <Box minH="calc(100vh - 122px)" p="4" textAlign="center">
      <Heading mt="5" size="xl">
        購入が完了しました
      </Heading>
      <Button
        mt="5"
        onClick={() => {
          Router.push("/");
        }}
      >
        トップページに戻る
      </Button>

      <Text mt="10">記録: {(endTime - startTime) / 1000}秒</Text>
    </Box>
  );
};

export default Page;
