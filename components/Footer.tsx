import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Box position="fixed" bottom="0" w="100%" bgColor="gray.300">
      <Text fontSize="sm" pt="2" textAlign="center">
        SatooRu © 2023 Copyright.
      </Text>
      <NextLink href="https://www.pakutaso.com">
        <Text fontSize="sm" pb="2" textAlign="center">
          フリー素材ぱくたそ（www.pakutaso.com）
        </Text>
      </NextLink>
    </Box>
  );
};
