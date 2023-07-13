import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import useLogin from '../states/useLogin';

const Profile = () => {
    const navigation = useNavigation();

    const { response, removeCredential, token } = useLogin()
    console.log(response);

    const handleLogout = () => {
        console.log(token);
        removeCredential()
        navigation.navigate("Login")
    }

    return (
        <View className="flex-1">
            <View className="bg-[#EEC302] h-[45%] justify-center items-center">
                <View className="items-center">
                    <View className="w-24 h-24 bg-white rounded-full">
                        <Image source={{ uri: `${response.photo}` }} alt='poto' className="w-full h-full" />
                    </View>
                    <Text className="text-xl font-semibold text-white">{response.name}</Text>
                </View>
            </View>

            <View
                className="absolute w-full px-3 bg-white h-[60%] bottom-0 rounded-2xl pt-4"
            >
                {/* Edit Profile */}
                <TouchableOpacity
                    className="flex-row items-center justify-between mt-3"
                    onPress={() => navigation.navigate("EditProfile")}
                >
                    <View
                        className="flex-row items-center"
                    >
                        <Feather name="user" size={35} color={"#EEC302"} />
                        <Text className="ml-3 text-lg">Edit Profile</Text>
                    </View>
                    <Ionicons name="ios-chevron-forward" size={28} color="gray" />
                </TouchableOpacity>

                {/* My Recipes */}
                <TouchableOpacity
                    className="flex-row items-center justify-between mt-5"
                    onPress={() => navigation.navigate("MyRecipes")}
                >
                    <View
                        className="flex-row items-center"
                    >
                        <Feather name="bookmark" size={35} color="#EEC302" />
                        <Text className="ml-3 text-lg">My Recipes</Text>
                    </View>
                    <Ionicons name="ios-chevron-forward" size={28} color="gray" />
                </TouchableOpacity>

                {/* Logout */}
                <TouchableOpacity
                    className="flex-row items-center justify-between mt-5"
                    onPress={handleLogout}
                >
                    <View
                        className="flex-row items-center"
                    >
                        <Feather name="user" size={35} color={"#EEC302"} />
                        <Text className="ml-3 text-lg">Logout</Text>
                    </View>
                    <Ionicons name="ios-chevron-forward" size={28} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile