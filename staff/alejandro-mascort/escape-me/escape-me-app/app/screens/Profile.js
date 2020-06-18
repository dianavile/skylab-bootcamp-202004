import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import UserItem from '../components/UserItem'
import Card from '../components/Card'
import { retrieveEscapeRooms, retrieveUser, retrieveFollowing, retrieveEscapeIds, retrieveFollowingIds } from 'escape-me-client-logic'

import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Profile() {
    const [userLists, setUserLists] = useState()
    const [followingIds, setFollowingIds] = useState([])
    const [tag, setTag] = useState('favorites')
    const [user, setUser] = useState({})
    const [following, setFollowing] = useState([])
    const [escapeRooms, setEscapeRooms] = useState([])

    const handleEscapeLists = async () => {
        const { participated = [], pending = [], favorites = [] } = await retrieveEscapeIds()
        setUserLists({ participated, pending, favorites })
    }

    let escapeList, follow
    useEffect(() => {
        (async () => {
            const { name = '', surname = '', username = '' } = await retrieveUser()
            setUser({ name, surname, username })

            const { participated = [], pending = [], favorites = [] } = await retrieveEscapeIds()
            setUserLists({ participated, pending, favorites })

            const followingUsers = await retrieveFollowingIds()
            setFollowingIds(followingUsers)

            escapeList = await retrieveEscapeRooms(tag)
            setEscapeRooms(escapeList)

        })()
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >
                <UserItem name={user.name ? user.name : ''} surname={user.surname ? user.surname : ''} email={`@${user.username}`} image={require('../assets/tyler.jpg')} main={true} />
                <TouchableOpacity style={styles.edit}>
                    <Entypo name="pencil" size={30} color="white" />
                    <Text style={styles.text}>Edit profile</Text>
                </TouchableOpacity>
                <View style={styles.details}>
                    <TouchableOpacity style={tag === 'favorites' ? [styles.pair, styles.selected] : styles.pair} onPress={async () => {
                        escapeList = await retrieveEscapeRooms('favorites')
                        setEscapeRooms(escapeList)
                        setTag('favorites')
                    }}>
                        <FontAwesome name="heart" size={24} color={'#fc5c65'} />
                        <Text>Favorite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tag === 'participated' ? [styles.pair, styles.selected] : styles.pair} onPress={async () => {
                        escapeList = await retrieveEscapeRooms('participated')
                        setEscapeRooms(escapeList)
                        setTag('participated')
                    }}>
                        <MaterialIcons name="done-all" size={24} color="black" />
                        <Text>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tag === '' ? [styles.pair, styles.selected] : styles.pair} onPress={async () => {
                        follow = await retrieveFollowing()
                        setFollowing(follow)
                        setTag('')
                    }}>
                        <Ionicons name="md-contacts" size={24} color="black" />
                        <Text>Following</Text>
                    </TouchableOpacity>
                </View>
                {
                    tag !== '' ?
                        escapeRooms.length ?
                            escapeRooms.map(({ id, genre, image: _image, name, playersMax, playersMin, priceMax, priceMin }) => {
                                return (<Card
                                    key={id}
                                    title={name}
                                    rating='4.9'
                                    escapeId={id}
                                    people={`${playersMin}-${playersMax}`}
                                    genre={genre} price={`${priceMin}-${priceMax}€`} image={{ uri: _image }}
                                    participated={userLists.participated.includes(id)}
                                    pending={userLists.pending.includes(id)}
                                    favorites={userLists.favorites.includes(id)}
                                    onEscapes={handleEscapeLists}
                                />)
                            })
                            :
                            <Text>No escape rooms added yet.</Text>

                        :
                        following.length ?
                            following.map(({ name, surname, username, id }) => {
                                return (<UserItem key={id}
                                    name={name ? name : ''}
                                    surname={surname ? surname : ''}
                                    email={`@${username}`}
                                    image={require('../assets/tyler.jpg')}
                                    following={followingIds.includes(id)}
                                    userId={id}
                                    onEscapes={handleEscapeLists}
                                />)
                            })
                            :
                            <Text>You're not following people yet.</Text>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        backgroundColor: '#f8f4f4',
        paddingTop: 30
    },
    details: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    edit: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fc5c65',
        padding: 10,
        borderRadius: 20
    },
    pair: {
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 5,
        padding: 10,
        borderColor: '#4ecdc4'
    },
    selected: {
        borderColor: '#fc5c65'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    }
});