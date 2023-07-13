import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ category, boxColor, imageURL }) => {
    console.log(imageURL);
    return (
        <View className="items-center">
            <View
                className="flex items-center justify-center w-16 h-16 rounded-xl"
                style={{ backgroundColor: boxColor }}
            >
                {/* <Image source={require(`../../../assets/populer_1.png`)} /> */}
                <Image source={imageURL} />
            </View>
            <Text className="font-medium">{category}</Text>
        </View>
    )
}

export default CategoryCard