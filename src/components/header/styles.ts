import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
    position: "relative",
  },
  title: {
    fontSize: theme.font_size.xlg,
    color: theme.colors.brand.blue,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 40,
  },
  form: {
    height: 54,
    bottom: -52/2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  input: {
    height: 52,
    width: "75%",
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 6,
    color: theme.colors.base.gray100,
    padding: 16,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.regular,
    marginRight: 4,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: "center",
    justifyContent: "center",
  },
});
