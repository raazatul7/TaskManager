import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Task } from '../models/Tasks';
import { useRealm } from '@realm/react';

export const ItemHeight = 60;


const TaskListItems = ({ task }: { task: Task }) => {

    const realm = useRealm();

    const deleteTask = () => {
        realm.write(() => {
            realm.delete(task)
        }
        )
    }
    return (
        <Link href={`/${task._id}`} asChild>
            <Pressable style={styles.container}>
                <Text style={styles.text}>{task.description}</Text>
                <AntDesign name="close" onPress={deleteTask} size={16} color="gray" />
            </Pressable>
        </Link>
    )
}


const styles = StyleSheet.create({
    root: {
        height: ItemHeight,
        paddingVertical: 3,
    },
    container: {
        backgroundColor: '#1D2125',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default TaskListItems