import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useLogin from '../states/useLogin'

const Editprofile = () => {
    const { response, token, editProfile } = useLogin()

    const [name, setName] = React.useState(response.name)
    const [email, setEmail] = React.useState(response.email)
    const [phone, setPhone] = React.useState(response.phone)

    const handleOnPress = () => {
        const input = { name, email, phone }
        console.log(input);

        editProfile(token, input)

    }

    return (
        <SafeAreaView>
            <View
                className="w-full h-[35vh] bg-amber-400 flex flex-col 
                justify-center items-center"
            >
                {/* Avatar */}
                <View className="w-24 h-24 bg-white rounded-full">
                    <Image source={{ uri: `${response.photo}` }} alt='poto' className="w-full h-full" />
                </View>
                <View className="mt-4">
                    <Button
                        title='Pick a Picture'
                    />
                </View>
            </View>

            {/* Form */}
            <View
                className="flex flex-col py-5 space-y-5 px-7"
            >
                <View>
                    <Text className="text-lg">Name</Text>
                    <View className="p-2 border border-gray-300 rounded-lg">
                        <TextInput
                            className="ml-2 text-lg"
                            placeholder={"placeholder"}
                            selectionColor={"#EEC302"}
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                    </View>
                </View>
                <View>
                    <Text className="text-lg">Email</Text>
                    <View className="p-2 border border-gray-300 rounded-lg">
                        <TextInput
                            className="ml-2 text-lg"
                            placeholder={"Email"}
                            selectionColor={"#EEC302"}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                    </View>
                </View>
                <View>
                    <Text className="text-lg">Phone</Text>
                    <View className="p-2 border border-gray-300 rounded-lg">
                        <TextInput
                            className="ml-2 text-lg"
                            placeholder={"Phone"}
                            keyboardType='numeric'
                            selectionColor={"#EEC302"}
                            onChangeText={text => setPhone(text)}
                            value={phone}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleOnPress}
                    className="flex items-center justify-center w-full py-3 rounded-lg bg-amber-400"
                >
                    <Text className="text-xl font-semibold text-white">Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Editprofile