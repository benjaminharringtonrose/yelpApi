import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price: string) => {
    return results.filter((result: any) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.rootContainer}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList title={"Cost Effective"} results={filterResultsByPrice("$")} />
        <ResultsList title={"Bit Pricier"} results={filterResultsByPrice("$$")} />
        <ResultsList title={"Big Spender"} results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
});
