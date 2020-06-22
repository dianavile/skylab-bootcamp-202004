import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Entypo, Feather } from '@expo/vector-icons';

import Home from './Home'
import Profile from './Profile'
import Search from './Search'
import AddUsers from './AddUsers'
import Pending from './Pending'

import { retrieveEscapeRooms, retrieveEscapeIds, suggestEscapeRooms } from 'escape-me-client-logic'

export default function () {
    const [escapes, setEscapes] = useState()
    const [escapeRoomsSuggested, setEscapeRoomsSuggested] = useState([])
    const [loaded, setLoaded] = useState(false)

    const handleEscapeLists = async () => {
        const { participated = [], pending = [], favorites = [] } = await retrieveEscapeIds()
        setEscapes({ participated, pending, favorites })
        console.log(escapes)
    }

    useEffect(() => {
        (async () => {
            const escapes = await retrieveEscapeIds()
            setEscapes(escapes)
            escapeList = await suggestEscapeRooms()
            setEscapeRoomsSuggested(escapeList)
            setLoaded(true)
        })()
    }, [])

    const handleLogOut = () => {
        //   setToken()
        //   setView('landing')
    }

    return (loaded ?
        <View style={styles.container}>
            <View style={styles.appheader}>
                <Text style={styles.title}>Escape Me</Text>
                <TouchableOpacity style={styles.logOut} onPress={handleLogOut}>
                    <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <NavigationContainer>
                <NavTabs handleEscapeLists={handleEscapeLists}
                    escapes={escapes}
                    escapeRoomsSuggested={escapeRoomsSuggested} />
            </NavigationContainer>
        </View>
        :
        <View></View>
    )
}

const styles = StyleSheet.create({
    appheader: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#4ecdc4',
    },
    container: {
        flex: 1
    },
    logOut: {
        position: 'absolute',
        right: 20
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
})

const Tab = createMaterialBottomTabNavigator();

function NavTabs({ handleEscapeLists, escapes, escapeRoomsSuggested }) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: "#4ecdc4" }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                // initialParams={{
                //     'handleEscapeLists': handleEscapeLists,
                //     'escapes': escapes,
                //     'escapeRoomsSuggested': escapeRoomsSuggested
                // }}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={26} color={color} />),
                }}
            />
            <Tab.Screen
                name="Pending"
                component={Pending}
                options={{
                    tabBarLabel: 'Pending',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Follow"
                component={AddUsers}
                options={{
                    tabBarLabel: 'Follow',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user-plus" size={24} color={color} />),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
