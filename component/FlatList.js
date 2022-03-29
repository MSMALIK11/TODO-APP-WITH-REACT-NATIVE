import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

export const FlatListDemo = () => {
  const [Value, setValue] = useState("");
  const [task, setTask] = useState([
    {
      id: "1",
      todo: "Let's Lear React Native",
      completed: false,
    },
  ]);

  React.useEffect(() => {
    getTask();
  }, []);
  React.useEffect(() => {
    saveTaskToUserDevice();
  }, []);
  const AddTask = () => {
    console.log("todo", task);
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      todo: Value,
      completed: false,
    };

    setTask([...task, newTodo]);

    setValue("");
  };
  const deleteTodo = (id) => {
    console.log("id", id);
    const fillTodo = task.filter((val) => val.id !== id);
    setTask(fillTodo);
    console.log("fillTodo", fillTodo);
  };
  const done = (id) => {
    const markTodo = task.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });

    setTask(markTodo);
  };
  // save todo to user device
  const saveTaskToUserDevice = async () => {
    try {
      const stringifyTask = JSON.stringify(task);
      await AsyncStorage.setItem("task", stringifyTask);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async () => {
    const plan = await AsyncStorage.getItem("task");
    if (task !== null) {
      setTask(JSON.parse(plan));
    }
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>MSNOTES 😎</Text>
      </View>

      <View style={style.textBox}>
        <Text style={style.heading}>Enter Task</Text>
        <View style={style.inputWraper}>
          <TextInput
            style={style.input}
            value={Value}
            placeholder={"Enter Your Task"}
            onChangeText={(actualValue) => setValue(actualValue)}
          />
          <TouchableOpacity style={style.addTask} onPress={() => AddTask()}>
            {/* <Text>Add Task</Text> */}
            <Icon name="add" size={40} />
          </TouchableOpacity>
        </View>

        <FlatList
          style={StyleSheet.flatItem}
          data={task}
          renderItem={({ item }) => (
            <View style={style.view}>
              <Text
                style={{
                  fontrSize: 35,
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  textDecorationLine: item?.completed
                    ? "line-through"
                    : "none ",
                }}
              >
                {item.todo}
              </Text>

              <View style={{ flexDirection: "row" }}>
                {!item?.completed && (
                  <TouchableOpacity
                    onPress={() => done(item.id)}
                    style={{ backgroundColor: "green", marginRight: 10 }}
                  >
                    <Icon name="done" size={20} color="white" />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={{ backgroundColor: "red" }}
                  onPress={() => deleteTodo(item.id)}
                >
                  <Icon name="delete" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* <TextInput /> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    height: "100vh",
    paddingTop: 30,

    padding: 10,
    backgroundColor: "papayawhip",
  },
  header: {
    backgroundColor: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    position: "fixed",
    zIndex: 9999,
    width: "100%",
    top: 0,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  inputWraper: {
    display: "flex",
    flexDirection: "row",
  },
  view: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    margin: 4,
    height: 60,

    backgroundColor: "indigo",
    color: "#111",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    color: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textBox: {
    width: "400px",
    minHeight: "500px",
    height: "auto",
    paddingHorizontal: 30,
    paddingTop: 30,
    marginBottom: 20,
    marginTop: 100,
    backgroundColor: "#eee",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  input: {
    width: "300px",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  addTask: {
    backgroundColor: "indigo",
    textAlign: "center",
    padding: 5,
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginVertical: 15,
  },
  flatItem: {
    marginTop: 20,
  },
});
