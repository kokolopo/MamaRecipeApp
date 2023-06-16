import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../components/elements/FormInput';
import useRegister from '../states/useRegister';

const Registration = () => {
    const navigation = useNavigation();

    const { response, loading, error, userRegister } = useRegister()

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confPassword, setConfPassword] = React.useState("")

    const handleOnSubmit = () => {
        const input = {
            name, email, phone, password, confPassword
        }
        userRegister(input)
    }

    React.useEffect(() => {
        if (response) {
            navigation.goBack()
        }
    }, [response])

    return (
        <SafeAreaView
            className="flex-1 px-4 pt-4 bg-slate-200"
        >
            <View
                className="items-center justify-center mt-12"
            >
                <Text className="text-2xl font-semibold text-[#EFC81A]">Let's Get Started !</Text>
                <Text className="text-gray-400">Create new account to access all feautures</Text>
            </View>

            {/* TextInput */}
            <View className="mt-12">
                <FormInput
                    icon={<Feather name="user" size={30} color="#EEC302" />}
                    placeholder={"Name"}
                    setter={setName}
                    value={name}
                /><View className="h-4" />
                <FormInput
                    icon={<Feather name="mail" size={30} color="#EEC302" />}
                    placeholder={"Email"}
                    setter={setEmail}
                    value={email}
                /><View className="h-4" />
                <FormInput
                    icon={<Feather name="phone" size={30} color="#EEC302" />}
                    placeholder={"Phone"}
                    setter={setPhone}
                    value={phone}
                /><View className="h-4" />
                <FormInput
                    icon={<Feather name="lock" size={30} color="#EEC302" />}
                    placeholder={"Password"}
                    secure={true}
                    setter={setPassword}
                    value={password}
                /><View className="h-4" />
                <FormInput
                    icon={<Feather name="unlock" size={30} color="#EEC302" />}
                    placeholder={"Confirm Password"}
                    secure={true}
                    setter={setConfPassword}
                    value={confPassword}
                />

                <TouchableOpacity
                    onPress={handleOnSubmit}
                    className="bg-[#EEC302] py-3 justify-center items-center rounded-xl mt-3"
                >
                    {
                        loading ?
                            <Text className="text-xl font-semibold text-white">LOADING....</Text>
                            :
                            <Text className="text-xl font-semibold text-white">CREATE</Text>
                    }
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-center mt-4 space-x-1">
                <Text className="text-gray-400">
                    Already have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text className="text-[#EEC302]">Log in Here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Registration