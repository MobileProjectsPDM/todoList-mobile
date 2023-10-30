import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../theme";

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Minhas Tecnologias</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor={theme.colors.base.gray300}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="pluscircleo" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
