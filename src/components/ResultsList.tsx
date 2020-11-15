import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { Routes } from "../../App";
import { withNavigation } from "react-navigation";

interface IResultsListProps {
  title: string;
  results: any;
  navigation: any;
}

function ResultsList(props: IResultsListProps) {
  const { title, results, navigation } = props;

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.resultDetail, { resultId: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default withNavigation(ResultsList);
