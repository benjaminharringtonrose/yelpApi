import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetailScreen from "./src/screens/ResultDetailScreen";

export enum Routes {
  search = "seach",
  resultDetail = "resultDetail",
}

const navigator = createStackNavigator(
  {
    [Routes.search]: SearchScreen,
    [Routes.resultDetail]: ResultDetailScreen,
  },
  {
    initialRouteName: Routes.search,
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
