import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity, Alert, ScrollView, } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import FormInput from '../components/elements/FormInput';
import { useNavigation } from '@react-navigation/native';
import useLogin from '../states/useLogin';

const Login = () => {
    const navigation = useNavigation()

    // State
    const { response, loading, error, userLogin, removeError, token } = useLogin()
    // input data
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleOnSubmit = () => {
        if (email == "" || password == "") {
            Alert.alert('Warning!', 'Form cannot be empy', [
                { text: 'OK' },
            ]);
        } else {
            userLogin({ email: email, password: password })
        }
    }

    React.useEffect(() => {
        if (token) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'TabMenu' }],
            })
        }
    }, [token])

    return (
        <SafeAreaView className="flex-1 px-4 bg-slate-200">

            <ScrollView>
                <View className="items-center justify-center mt-12">
                    <View
                        className="flex p-4 bg-gray-300 rounded-full"
                    >
                        <Feather name="user" size={100} color={"white"} />
                    </View>
                </View>
                <View className="items-center mt-4">
                    <Text className="text-xl font-semibold text-[#EFC81A]">Welcome!</Text>
                    <Text className="text-sm text-gray-400">Log in to your exiting account.</Text>
                </View>

                {
                    error &&
                    <TouchableOpacity
                        className="items-center justify-center"
                        onPress={() => removeError()}>
                        <Text className="text-lg text-red-500">{error.response.data.msg}</Text>
                    </TouchableOpacity>
                }

                {/* form */}
                <View className="mt-8 bg-bla">
                    <FormInput
                        icon={<Feather name="user" size={30} color={"#EEC302"} />}
                        placeholder={"Email"}
                        setter={setEmail}
                        value={email}
                    />
                    <View className="h-4" />
                    <FormInput
                        icon={<Feather name="lock" size={30} color="#EEC302" />}
                        placeholder={"Password"}
                        secure={true}
                        setter={setPassword}
                        value={password}
                    />
                    <TouchableOpacity
                        className="items-end justify-center mt-3"
                    >
                        <Text className="text-sm text-gray-400">Forgot Password ?</Text>
                    </TouchableOpacity>
                    <View className="mt-3">
                        <TouchableOpacity
                            onPress={handleOnSubmit}
                            className="bg-[#EEC302] items-center justify-center rounded-xl py-3"
                        >
                            {
                                loading ?
                                    <Text className="text-xl font-semibold text-white">LOADING....</Text> : <Text className="text-xl font-semibold text-white">LOGIN</Text>
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    className="flex-row items-center justify-center mt-3"
                >
                    <Text className="text-sm text-gray-400">Don’t have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.push("Registration")}
                    ><Text className="text-[#EEC302] text-sm">Sign Up</Text></TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login