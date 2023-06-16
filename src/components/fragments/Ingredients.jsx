import { View, TextInput } from 'react-native'
import React from 'react'

const Ingredients = ({ value }) => {
    return (
        <View className="mt-7">
            <TextInput value={value} />
        </View>
    )
}

export default Ingredients