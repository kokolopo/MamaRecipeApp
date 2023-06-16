import { View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

import React from 'react'

const FormInput = ({ placeholder, icon, secure = false, value, setter }) => {
    return (
        <View>
            <View className="flex-row px-2 py-3 bg-white rounded-xl">
                {icon}
                <TextInput
                    className="ml-2 text-lg"
                    placeholder={placeholder} secureTextEntry={secure}
                    selectionColor={"#EEC302"}
                    onChangeText={text => setter(text)}
                    value={value}
                />
            </View>
        </View>
    )
}

export default FormInput