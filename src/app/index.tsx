import { View, Text } from 'react-native'
import React from 'react'
import TaskBoard from '../components/TaskBoard'
import { Stack } from 'expo-router'

const App = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Project Board' }} />
            <TaskBoard />
        </>
    )
}

export default App