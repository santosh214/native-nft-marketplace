import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ height: 24, width: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({minWidth,fontSize,handlePress,...props}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth:minWidth,
        padding:SIZES.small,
        ...props,
      }}
    >
     <Text style={{fontFamily:FONTS.semiBold,fontSize:fontSize,color:COLORS.white,textAlign:'center'}}>
      Place a bid
     </Text>
    </TouchableOpacity>
  );
};
