import React from "react";
import { View, Text, StyleSheet, ViewProperties } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IRatingIcon {
  rating?: number;
  style?: ViewProperties;
}

export default function RatingIcon(props: IRatingIcon) {
  function renderHalfStar() {
    return <FontAwesome name={"star-half-empty"} />;
  }
  function renderOneStar() {
    return <FontAwesome name={"star"} />;
  }
  function renderTwoStar() {
    return (
      <View style={styles.row}>
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
      </View>
    );
  }
  function renderThreeStar() {
    return (
      <View style={styles.row}>
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
      </View>
    );
  }
  function renderFourStar() {
    return (
      <View style={styles.row}>
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
      </View>
    );
  }
  function renderFiveStar() {
    return (
      <View style={styles.row}>
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
        <FontAwesome name={"star"} />
      </View>
    );
  }

  switch (props.rating) {
    case 1:
      return <View style={props.style}>{renderOneStar()}</View>;
    case 1.5:
      return (
        <View style={[props.style, styles.row]}>
          {renderOneStar()}
          {renderHalfStar()}
        </View>
      );
    case 2:
      return <View style={props.style}>{renderTwoStar()}</View>;
    case 2.5:
      return (
        <View style={[props.style, styles.row]}>
          {renderTwoStar()}
          {renderHalfStar()}
        </View>
      );
    case 3:
      return <View style={props.style}>{renderThreeStar()}</View>;
    case 3.5:
      return (
        <View style={[props.style, styles.row]}>
          {renderThreeStar()}
          {renderHalfStar()}
        </View>
      );
    case 4:
      return <View style={props.style}>{renderFourStar()}</View>;
    case 4.5:
      return (
        <View style={[props.style, styles.row]}>
          {renderFourStar()}
          {renderHalfStar()}
        </View>
      );
    case 5:
      return <View style={props.style}>{renderFiveStar()}</View>;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
