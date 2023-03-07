import { Box, Flex, Container, Heading, Icon } from "@chakra-ui/react";
import { MdShop } from "react-icons/md";
import NextLink from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Box px={4} bgColor="gray.300">
      <Flex as="header" p="4" alignItems="center">
        <Icon as={MdShop} boxSize="7" mr="2" />
        <NextLink href="/" passHref>
          <Heading as="h1" fontSize="2xl" cursor="pointer">
            penguin.com
          </Heading>
        </NextLink>
      </Flex>
    </Box>
  );
};
