import { View, Text, } from 'react-native'
import React from 'react'
import FormAddRecipe from '../components/fragments/FormAddRecipe'

const AddRecipe = () => {

    return (
        <View className="flex-1 px-4 pt-12 bg-white space-y-7">

            <View
                className="items-center"
            >

                <Text
                    className="text-2xl font-semibold text-[#EFC81A]"
                >Add Your Recipe</Text>
            </View>

            <FormAddRecipe />
        </View>
    )
}

export default AddRecipe