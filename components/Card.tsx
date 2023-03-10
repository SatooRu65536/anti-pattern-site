import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Item } from "./types";
import { MdShoppingCart, MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";

const ItemCard = ({
  id,
  name,
  imgPath,
  detail,
  price,
  switchCartItem,
}: Item & { switchCartItem: Function }) => {
  const [isAdded, setIsAdded] = useState(false);
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
          {name}
        </Heading>
      </CardHeader>

      <Image
        w="100%"
        objectFit="cover"
        sx={{ aspectRatio: "16/9" }}
        src={imgPath}
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
            {detail}
          </Text>
          <Heading size="md" pt="3" textAlign="end">
            ¥{price.toLocaleString()}
          </Heading>

          <Icon
            as={isAdded ? MdShoppingCart : MdAddShoppingCart}
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
              setIsAdded((isAddedSnap) => !isAddedSnap);
              switchCartItem(id);
              setTimeout(() => {
                switchCartItem(id, true);
                setIsAdded(false);
              }, 5 * 1000);
            }}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
