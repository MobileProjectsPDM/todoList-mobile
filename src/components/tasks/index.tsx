import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme";
import { tasksDTO } from "../../dtos/TaskDTO";

export function Task({ title, isCompleted }: tasksDTO) {
  return (
    <View style={styles.tecnologyContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={22}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  );
}
