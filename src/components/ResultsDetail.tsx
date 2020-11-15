import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface IResultsDetailProps {
  result: any; // business object
}

export default function ResultsDetail(props: IResultsDetailProps) {
  const { result } = props;
  return (
    <View style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{`${result.rating} Stars, ${result.review_count} Reviews`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
