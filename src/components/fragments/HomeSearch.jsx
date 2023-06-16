import { View, Text, TextInput } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import React from 'react'

const HomeSearch = ({ handleSearch, searchQuery }) => {
    return (
        <View className="flex-row p-4 bg-slate-200 rounded-xl">
            <AntDesign name="search1" size={24} color="gray" />
            <TextInput
                className="ml-2"
                placeholder='Search Pasta, Bread, etc'
                onChangeText={handleSearch}
                value={searchQuery}
            />
        </View>
    )
}

export default HomeSearch