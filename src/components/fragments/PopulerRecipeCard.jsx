import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const PopulerRecipeCard = ({ title, desc, rate }) => {
    return (
        <View className="flex-row mb-4">
            <View
                className="w-16 h-16 bg-green-500 rounded-xl"
            ></View>

            <View className="flex justify-between ml-5">
                <View>
                    <Text className="font-medium text-base">{title}</Text>
                    <Text className="text-[#B6B6B6] text-xs">{desc}</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <AntDesign name="star" size={12} color="yellow" />
                    <Text className="text-xs text-[#B6B6B6]">{rate}</Text>
                </View>
            </View>
        </View>
    )
}

export default PopulerRecipeCard