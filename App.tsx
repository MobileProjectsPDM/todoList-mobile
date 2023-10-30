import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
// import { theme } from "./src/theme";
import { HomeScreen } from "./src/screens";
import { Loading } from "./src/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  return (
    < >
      {fontsLoaded ? <HomeScreen /> : <Loading />}
      <StatusBar style="inverted"/>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.colors.base.gray600,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
