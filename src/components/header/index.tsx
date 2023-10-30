import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../theme";


type HeaderProps ={
  tecnology: string,
  onChangeText:(tecnology:string) => void
  onPress: () => void
}

export function Header({tecnology,onChangeText, onPress}:HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Minhas Tecnologias</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor={theme.colors.base.gray300}
          value={tecnology}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <AntDesign name="pluscircleo" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
