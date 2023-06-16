import { View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryRecipe = () => {
    return (
        <View className="mt-7">
            <Text className="text-lg font-semibold">Categories</Text>

            <View className="flex-row justify-between mt-5">
                <CategoryCard category={"Soup"} boxColor={"#57CE96"} />
                <CategoryCard category={"Chicken"} boxColor={"#FDE901"} />
                <CategoryCard category={"Seafood"} boxColor={"#000001"} />
                <CategoryCard category={"Dessert"} boxColor={"#FF55BB"} />
            </View>
        </View>
    )
}

export default CategoryRecipe