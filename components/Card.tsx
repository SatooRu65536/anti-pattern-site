import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
} from "@chakra-ui/react";
import { Item } from "./types";

export default function ItemCard({ name, imgPath, detail, price }: Item) {
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
            h="70px"
            pt="2"
            mb="4"
            fontSize="sm"
            overflow="hidden"
            display="-webkit-box"
            sx={{ "-webkit-box-orient": "vertical", "-webkit-line-clamp": "3" }}
          >
            {detail ?? "とっても可愛いペンギンです"}
          </Text>
          <Heading size="md" textAlign="end">
            ¥{price ? price.toLocaleString() : 330}
          </Heading>
        </Box>
      </CardBody>
    </Card>
  );
}
