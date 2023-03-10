import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  return <Box minH="calc(100vh - 122px)"></Box>;
};

export default Page;
