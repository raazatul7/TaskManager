import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useObject, useRealm } from '@realm/react';
import { Task } from '../models/Tasks';
import { BSON } from 'realm';

const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
    const realm = useRealm();
    const [desc, setDesc] = useState(task?.description || '');

    const updateTask = () => {
        if(!task) {
            return;
        }
        realm.write(() => {
           task.description = desc;
        })
    }

    if (!task) {
        return <Text>Task not found</Text>
    }

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Task Details' }} />
            <TextInput style={{ color: 'white', fontSize: 20 }}
                value={desc}
                onChangeText={setDesc}
                onEndEditing={updateTask}
            />
        </View>
    )
}

export default TaskDetails