import { Item } from "./types";
import _ from "lodash";

export const items: Item[] = [
  {
    id: "penguin-0001",
    name: "将来が不安なペンギン",
    detail: "働きたくねぇ...",
    price: 330010,
    imgPath: "/item/gentoo.jpg",
  },
  {
    id: "waterbottle-0001",
    name: "すごい水筒",
    detail:
      "なんか冷めづらいいい感じの構造の水筒です。雪山登山にはちょっといいかもしれません。",
    price: 2980,
    imgPath: "/item/water-bottle.jpg",
  },
  {
    id: "castle-0001",
    name: "大きなお城",
    detail:
      "とても大きなお城です。一括で購入して頂けた場合にはエビフライ1本をお付けします。",
    price: 110,
    imgPath: "/item/castle.jpg",
  },
  {
    id: "aquarium-0001",
    name: "でかい水槽",
    detail:
      "世界最大級(当社調べ, 最大ではありません)の水槽です。ジンベイザメおよびその他の魚は付属しません。",
    price: 198010000,
    imgPath: "/item/aquarium.jpg",
  },
  {
    id: "matsutake-0001",
    name: "通学路のきのこ",
    detail: "松茸ではあります。おいしいます。日本國原産。",
    price: 1890,
    imgPath: "/item/matsutake.jpg",
  },
  {
    id: "masuku-0001",
    name: "抗菌マスク",
    detail: "ウイルス100%カットマスク(使用済み) ※実際は1枚のみとなります。",
    price: 54,
    imgPath: "/item/masuku.jpg",
  },
  {
    id: "train-0001",
    name: "雪原を走る鉄道",
    detail: "とってもかっこいい鉄道です。実際のサイズとは異なる場合があります。",
    price: 1923,
    imgPath: "/item/train.jpg",
  },
  {
    id: "tokintokin-0001",
    name: "ときんときん",
    detail:
      "名古屋のシンボルマークであるときんときんのやつです。大人気商品のため、おひとり様1つまでとさせて頂きます。",
    price: 14000,
    imgPath: "/item/tokintokin.jpg",
  },
  {
    id: 'bobpc-0001',
    name: "古びた壁",
    detail: "古びた壁です。縦120mm横240mmとなります。",
    price: 124500,
    imgPath: "/item/bobpc.jpg",
  }
];

export const itemsObj = _.keyBy(items, "id");
