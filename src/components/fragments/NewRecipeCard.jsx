import { View, Text, Image } from 'react-native'
import React from 'react'

const NewRecipeCard = ({ id, title, imageUrl }) => {
    return (
        <View
            key={id}
            className="relative w-[130px] h-40 rounded-xl mr-5 bg-teal-400"
        >
            <Image
                className="w-full h-full rounded-xl"
                alt='gambar'
                source={{ uri: `${imageUrl}` }}//https://is3.cloudhost.id/foodimages//bMAoJ5KJe?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=57JUVUQPDFPAGDLQTYA2%2F20230612%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230612T083936Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2c002d5ba306247a6780fe89bcd5efb9f8c8ee5e68b4ba3a2d061f0854869e0
            />
            <View
                className="w-[60%] absolute bottom-5 left-5"
            >
                <Text
                    className="text-base font-medium text-white "
                >{title}</Text>
            </View>
        </View>
    )
}

export default NewRecipeCard