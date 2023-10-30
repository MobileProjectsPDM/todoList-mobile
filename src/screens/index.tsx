import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/header";
import { Task } from "../components/tasks";
import { useState } from "react";
import { tasksDTO } from "../dtos/TaskDTO";
import { Empty } from "../components/empty";
import { uuid } from "../uuid";
export function HomeScreen() {
  const [list, setList] = useState<tasksDTO[]>([]);
  const [newTecnology, setNewTecnology] = useState("");

  function handleTecnologyAdd() {
    if (newTecnology !== "" && newTecnology.length >= 5) {
      setList((list) => [
        ...list,
        { id: uuid(), isCompleted: false, title: newTecnology.trim() },
      ]);
      setNewTecnology("");
    }
  }
  return (
    <View style={styles.container}>
      <Header
        tecnology={newTecnology}
        onChangeText={setNewTecnology}
        onPress={handleTecnologyAdd}
      />
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
        <FlatList
          data={list}
          keyExtractor={(list) => list.id!}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
            />
          )}
          ListEmptyComponent={<Empty />}
        />

        {/* <Task title="Estudar React Native" isCompleted />
        <Task title="Estudar React Native" isCompleted={false} />
        <Task title="Estudar React Native" isCompleted /> */}
      </View>
    </View>
  );
}
