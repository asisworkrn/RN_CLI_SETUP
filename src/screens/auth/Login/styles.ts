import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },

  title: {
    fontSize: 18,
    color: theme.colors.text,
    // fontWeight: "600",
  },
}));