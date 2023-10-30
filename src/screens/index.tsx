import { View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/header";
import { Task } from "../components/tasks";
export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>
        <Task title="Estudar React Native" isCompleted />
        <Task title="Estudar React Native" isCompleted={false} />
        <Task title="Estudar React Native" isCompleted />
      </View>
    </View>
  );
}