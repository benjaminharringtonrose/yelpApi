import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ISearchBarProps {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}

export default function SearchBar(props: ISearchBarProps) {
  const { term, onTermChange, onTermSubmit } = props;

  return (
    <View style={styles.rootContainer}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.input}
        placeholder={"Search"}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 3,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});
