import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ingredients from '../components/fragments/Ingredients';
import Videos from '../components/fragments/Videos';
import { useNavigation } from '@react-navigation/native';

const DetailRecipe = ({ route }) => {
    const { recipeId, title, ingredients, image, video } = route.params;
    const navigation = useNavigation()

    const [content, setContent] = React.useState(<Ingredients value={ingredients} />)
    const [colors, setColors] = React.useState({
        ingredients: '#EFC81A',
        videos: 'gray',
    });

    const clickTab = (cont, menu) => {
        setContent(cont)
        switch (menu) {
            case 'ingredients':
                setColors(prevColors => ({
                    ...prevColors,
                    ingredients: '#EFC81A',
                    videos: 'gray',
                }));
                break;
            case 'videos':
                setColors(prevColors => ({
                    ...prevColors,
                    ingredients: 'gray',
                    videos: '#EFC81A',
                }));
                break;

            default:
                break;
        }
    }

    return (
        <View className="flex-1">
            <View className="bg-[#EEC302] h-[45%] relative">
                <Image
                    source={{ uri: image }}
                    alt='poto' className="w-full h-full"
                />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute top-7 left-5"
                >
                    <MaterialIcons name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
                <View
                    className="absolute w-1/2 bottom-7 left-5"
                >
                    <Text className="text-4xl font-bold text-white">{title}</Text>
                </View>
            </View>

            <View
                className="absolute w-full px-5 bg-white h-[57%] bottom-0 rounded-2xl pt-4"
            >
                {/* Tab */}
                <View
                    className="flex-row space-x-6"
                >
                    <TouchableOpacity onPress={() => clickTab(<Ingredients value={ingredients} />, "ingredients")}>
                        <Text className="text-2xl font-medium" style={{ color: colors.ingredients }}>Ingredients</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => clickTab(<Videos value={video} />, "videos")}>
                        <Text className="text-2xl font-medium" style={{ color: colors.videos }}>Video Step</Text>
                    </TouchableOpacity>
                </View>

                {
                    content
                }


            </View>
        </View>
    )
}

export default DetailRecipe