import { View, Text, FlatList, Alert } from "react-native";
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

  function handleTecnologyDone(id: string) {
    setList((item) =>
      item.map((item) => {
        item.id === id ? (item.isCompleted = !item.isCompleted) : null;
        return item;
      })
    );
  }
  function handleTecnologyDeleted(id: string) {
    Alert.alert("Excluir Tarefa", "Are you sure about it");
    setList((list) => list.filter((list) => list.id !== id));
  }

  const totalTecnologysCreated = list.length;
  const totalTecnologysDone = list.filter(
    ({ isCompleted }) => isCompleted
  ).length;

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
              <Text style={styles.counterText}>{totalTecnologysCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTecnologysDone}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={list}
          keyExtractor={(list) => list.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTecnologyDone={() => handleTecnologyDone(item.id)}
              onTecnologyDeleted={() => handleTecnologyDeleted(item.id)}
              {...item}
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
