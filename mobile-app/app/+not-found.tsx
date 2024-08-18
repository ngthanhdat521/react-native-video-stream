import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Link href="/" style={styles.link}>
        123
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
