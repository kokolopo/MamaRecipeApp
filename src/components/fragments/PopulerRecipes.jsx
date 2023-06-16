import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PopulerRecipeCard from './PopulerRecipeCard'

const PopulerRecipes = () => {
    return (
        <View className="mt-7">
            <View
                className="flex-row items-center justify-between"
            >
                <Text className="text-lg font-semibold">Popular Recipes</Text>
                <TouchableOpacity>
                    <Text className="text-[#6D61F2]">More info</Text>
                </TouchableOpacity>
            </View>

            <View className="flex mt-5">

                {/* PopulerRecipeCard */}

                <PopulerRecipeCard title={"Teriyaki Salmon"} desc={"spicy, salted"} rate={"4.7"} />
                <PopulerRecipeCard title={"Beef Steak"} desc={"Beef steak with nopales, tartare ...."} rate={"4.4"} />
                <PopulerRecipeCard title={"Spaghetti"} desc={"Crbonara sauce with grilled ..."} rate={"4.5"} />
                <PopulerRecipeCard title={"Veg Loaded"} desc={"In Pizza Mania"} rate={"4.8"} />

            </View>
        </View>
    )
}

export default PopulerRecipes