import { StyleSheet, Text, View } from "react-native";

export default function Produto() {
  return (
    <View style={styles.container}>
      <Text>Produto</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    },
});