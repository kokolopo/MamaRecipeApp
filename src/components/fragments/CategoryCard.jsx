import { View, Text } from 'react-native'
import React from 'react'

const CategoryCard = ({ category, boxColor }) => {
    return (
        <View className="items-center">
            <View
                className="w-16 h-16 rounded-xl"
                style={{ backgroundColor: boxColor }}
            ></View>
            <Text className="font-medium">{category}</Text>
        </View>
    )
}

export default CategoryCard