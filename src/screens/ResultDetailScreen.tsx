import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import yelp from "../api/yelp";
import { SafeAreaView } from "react-navigation";
import RatingIcon from "../atoms/RatingIcon";

export default function ResultDetailScreen({ navigation }: any) {
  const [result, setResult] = useState();
  const resultId = navigation.getParam("resultId");

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(resultId);
  }, []);

  console.log(result);

  function renderImages() {
    return (
      <View style={styles.imageListContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  }

  if (!result) {
    return <ActivityIndicator />;
  }

  const isOpenNow: boolean = result?.hours?.[0]?.is_open_now;

  return (
    <View style={styles.rootContainer}>
      {!!result.name && <Text style={styles.businessNameText}>{result.name}</Text>}
      {!!result.rating && <RatingIcon style={styles.ratingIcon} rating={result.rating} />}
      {!!result.photos && renderImages()}
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>{`${result.location.display_address}`}</Text>
        {!!isOpenNow && <Text style={styles.infoText}>{"They're open right now!"}</Text>}
        <Text style={styles.infoText}>{`${result.rating}`}</Text>

        <Text style={styles.infoText}>{`${result.price}`}</Text>
        <Text style={styles.infoText}>{`${result.price}`}</Text>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 8,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  businessNameText: {
    paddingTop: 10,

    fontSize: 18,
    fontWeight: "bold",
  },
  ratingIcon: {
    marginBottom: 25,
  },
  imageListContainer: {
    marginBottom: 25,
  },
  infoTextContainer: {
    flex: 2,
    marginRight: 15,
  },
  infoText: {
    paddingBottom: 5,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
    marginRight: 15,
  },
});
