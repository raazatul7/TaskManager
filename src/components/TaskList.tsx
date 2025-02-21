import { View, Text, FlatList, TextInput, Button } from 'react-native'
import React from 'react'
import TaskListItems from './TaskListItems'

const TaskList = () => {
    const [tasks, setTasks] = React.useState([
        { id: 1, description: "First task" },
        { id: 2, description: "Second task" },
    ])

    const [newTask, setNewTask] = React.useState('')

    const createTask = () => {
        setTasks([...tasks, { description: newTask, id: tasks.length + 1 }])
        setNewTask('')
    }
    return (
        <View style={{ backgroundColor: '#101112', padding: 10, gap: 10 }}>
            <Text style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                marginVertical: 10
            }}>TODO</Text>

            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskListItems task={item} />}
                contentContainerStyle={{ gap: 5 }}
            />
            <TextInput value={newTask} onChangeText={setNewTask} placeholder='New task' placeholderTextColor={'gray'} style={{ padding: 15, color: 'white', backgroundColor: '#1D2125', borderRadius: 5 }} />
            <Button title='Add task' onPress={createTask} />
        </View>
    )
}

export default TaskList