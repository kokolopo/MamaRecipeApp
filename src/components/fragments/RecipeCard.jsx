import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RecipeCard = ({ recipe }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            className="flex-row mt-3"
            onPress={() => navigation.navigate("Detail", {
                recipeId: recipe.id,
                title: recipe.title,
                ingredients: recipe.ingredients,
                image: recipe.image,
                video: recipe.video,
            })}
        >
            <Image
                style={{
                    width: 85,
                    height: 85,
                }}
                source={{ uri: `${recipe.image}` }}
                alt="gambar"
                className="rounded-xl"
            />

            <View
                className="flex-row w-2/3 space-x-3"
            >
                <View className="flex w-[60%] h-full ml-3 justify-evenly">
                    <Text className="text-lg font-semibold">{recipe.title}</Text>
                    <Text className="text-xs text-slate-400">{recipe.ingredients}</Text>
                    {/* <Text>{}</Text> */}
                </View>

                <View
                    className="flex-row items-center space-x-2"
                >
                    <View
                        className="bg-[#EEC302] p-2 rounded-xl"
                    >
                        <Feather name="bookmark" size={24} color="white" />
                    </View>

                    <View
                        className="p-2 bg-white border border-[#EEC302] rounded-xl"
                    >
                        <AntDesign name="like2" size={24} color={"#EEC302"} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});