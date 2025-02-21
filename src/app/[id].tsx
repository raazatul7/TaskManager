import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useObject } from '@realm/react';
import { Task } from '../models/Tasks';
import { BSON } from 'realm';

const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

    if (!task) {
        return <Text>Task not found</Text>
    }

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Task Details' }} />
            <Text style={{ color: 'white', fontSize: 20 }}>{task.description}</Text>
        </View>
    )
}

export default TaskDetails