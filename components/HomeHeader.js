import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, assets, FONTS } from "../constants";

const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
          {/* <View style={{ marginVertical: SIZES.font }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.white,
              }}
            >
              {" "}
              Hello Santosh 👋
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.white,
                marginTop: SIZES.base / 2,
              }}
            >
              {" "}
              Let's find a master piece
            </Text>
          </View>
          <View style={{ marginTop: SIZES.font }}>
            <View>
              <Image
                source={assets.search}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: SIZES.base }}
              />
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
