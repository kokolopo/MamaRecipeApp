import { View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryRecipe = () => {
    return (
        <View className="mt-7">
            <Text className="text-lg font-semibold">Categories</Text>

            <View className="flex-row justify-between mt-5">
                <CategoryCard
                    category={"Soup"}
                    boxColor={"#57CE96"}
                    imageURL={require('../../../assets/populer_1.png')}
                />
                <CategoryCard
                    category={"Soup"}
                    boxColor={"#FDE901"}
                    imageURL={require('../../../assets/populer_2.png')}
                />
                <CategoryCard
                    category={"Soup"}
                    boxColor={"#000001"}
                    imageURL={require('../../../assets/populer_3.png')}
                />
                <CategoryCard
                    category={"Soup"}
                    boxColor={"#FF55BB"}
                    imageURL={require('../../../assets/populer_1.png')}
                />
            </View>
        </View>
    )
}

export default CategoryRecipe