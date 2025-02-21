import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import RootRealmProvider from '../providers/Realm';

const RootLayout = () => {
    return (
        <>
            <ThemeProvider value={DarkTheme}>
                <RootRealmProvider>
                    <Stack screenOptions={{}} />
                </RootRealmProvider>

            </ThemeProvider>
            <StatusBar style='light' />
        </>
    )
}

export default RootLayout