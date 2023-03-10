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
    postCode: "ｘｘｘ-ｘｘｘｘ",
    phone: "xxxxxxxxxxx",
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.alert("戻るボタンが押されたためトップページに移動します");
      Router.push("/");
    });
  }, []);

  const prefs = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  function blurPref() {
    if (["東京"].includes(userData.pref)) {
      setUserData({ ...userData, pref: userData.pref + "都" });
    } else if (["北海"].includes(userData.pref)) {
      setUserData({ ...userData, pref: userData.pref + "道" });
    } else if (["大阪", "京都"].includes(userData.pref)) {
      setUserData({ ...userData, pref: userData.pref + "府" });
    } else {
      setUserData({ ...userData, pref: userData.pref + "県" });
    }
  }

  function toPaymentInfoPage() {
    let isErr = true;
    if (userData.firstName.match(/[名前]/))
      setErrMsg("「名前」を正しく入力してください");
    else if (userData.firstName === "")
      setErrMsg("必須項目が入力されていません");
    else if (userData.lastName.match(/[名字]/))
      setErrMsg("「名前」を正しく入力してください");
    else if (userData.lastName === "")
      setErrMsg("必須項目が入力されていません");
    else if (!prefs.includes(userData.pref))
      setErrMsg("都道府県を正しく入力してください");
    else if (!userData.city.match(/[\s\S]+[市][\s\S]*区*/))
      setErrMsg("市区町村を正しく入力してください");
    else if (userData.address.match(/[住所]/))
      setErrMsg("住所を正しく入力してください");
    else if (userData.address === "") setErrMsg("必須項目が入力されていません");
    else if (userData.build.match(/[建物名]/))
      setErrMsg("住所を正しく入力してください");
    else if (userData.build === "") setErrMsg("必須項目が入力されていません");
    else if (
      !userData.postCode.match(
        /[０１２３４５６７８９]{3}-[０１２３４５６７８９]{4}/
      )
    )
      setErrMsg("郵便番号を正しく入力してください");
    else if (userData.postCode === "")
      setErrMsg("必須項目が入力されていません");
    else if (!userData.phone.match(/[0-9]{11}/))
      setErrMsg("電話番号を正しく入力してください");
    else if (userData.phone === "") setErrMsg("必須項目が入力されていません");
    else {
      setErrMsg("");
      isErr = false;
    }

    if (isErr) {
      setUserData({
        firstName: "名前",
        lastName: "名字",
        pref: "都道府県",
        city: "市区町村",
        address: "住所",
        build: "建物名",
        postCode: "ｘｘｘ-ｘｘｘｘ",
        phone: "xxxxxxxxxxx",
      });
    } else {
      Router.push("/paymentinfo");
    }
  }

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
          支払情報を入力する
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
      </Flex>
      <Heading size="md">配送情報の入力</Heading>
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

      <Box p="4">
        <Heading size="sm" mb="2">
          都道府県
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="都道府県"
          w="80%"
          mr="2"
          value={userData.pref}
          onChange={(e) => setUserData({ ...userData, pref: e.target.value })}
          onBlur={blurPref}
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          市区町村
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="市区町村"
          w="80%"
          mr="2"
          value={userData.city}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          住所
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="住所"
          w="80%"
          mr="2"
          value={userData.address}
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          建物名
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="建物名"
          w="80%"
          mr="2"
          value={userData.build}
          onChange={(e) => setUserData({ ...userData, build: e.target.value })}
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          郵便番号
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Text fontSize="sm">全角ハイフンあり</Text>
        <Input
          placeholder="郵便番号"
          w="80%"
          mr="2"
          value={userData.postCode}
          onChange={(e) =>
            setUserData({ ...userData, postCode: e.target.value })
          }
        />
      </Box>

      <Box p="4">
        <Heading size="sm" mb="2">
          電話番号
          <Text as="span" fontSize="sm" color="red" ml="2">
            必須
          </Text>
        </Heading>
        <Input
          placeholder="電話番号"
          w="80%"
          mr="2"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
      </Box>

      <Text color="red">{errMsg}</Text>
    </Box>
  );
};

export default Page;
