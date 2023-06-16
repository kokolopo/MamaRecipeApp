import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../components/elements/FormInput'
import { Feather, Ionicons } from '@expo/vector-icons';
import useRecipe from '../states/useRecipe';
import useLogin from '../states/useLogin';

const EditRecipe = ({ route }) => {
    const { recipeId, title, ingredients, image, video } = route.params;
    const { editRecipe, loading, response } = useRecipe()
    const { token } = useLogin()

    const [imageN, setImage] = React.useState(image);
    const [titleN, setTitle] = React.useState(title)
    const [ingredientsN, setIngredients] = React.useState(ingredients)
    const [videoN, setVideo] = React.useState(video)
    console.log(response);

    const pickImage = async () => {
        setImage(null)
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result.uri);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(image);
        }
    };

    const handleOnSubmit = () => {
        const formData = new FormData();
        formData.append("title", titleN)
        formData.append("ingredients", ingredientsN)
        formData.append("video", videoN)
        formData.append('image', {
            uri: imageN,
            name: new Date() + "_recipe",
            type: 'image/png'
        });
        console.log(formData);
        editRecipe(recipeId, formData, token)
    }

    if (loading) {
        return (
            <SafeAreaView className="items-center justify-center flex-1">
                <Text className="text-2xl text-blue-400">LOADING....</Text>
            </SafeAreaView>
        )
    }

    return (
        <ScrollView
            className="flex-1 px-4 pt-12 bg-slate-300 space-y-7"
        >
            <View
                className="items-center"
            >
                <Text
                    className="text-2xl font-semibold text-[#EFC81A]"
                >Edit Your Recipe</Text>
            </View>
            {response && <Text className="text-2xl font-semibold text-green-500">{response.message}</Text>}
            {imageN && <Image source={{ uri: imageN }} style={{ width: '100%', height: 150 }} />}

            <View className="flex-col">
                <FormInput
                    icon={<Feather name="book-open" size={24} color="gray" />}
                    placeholder={"Title"}
                    setter={setTitle}
                    value={titleN}
                />
                <View className="h-4" />
                <TextInput
                    multiline={true}
                    numberOfLines={7}
                    style={{ height: 140, textAlignVertical: 'top', }}
                    placeholder='Ingedients'
                    value={ingredientsN}
                    onChangeText={text => setIngredients(text)}
                    className="px-3 py-2 text-lg bg-white rounded-xl"
                />
                <View className="h-4" />
                <FormInput
                    icon={<Ionicons name="ios-videocam-outline" size={24} color="gray" />}
                    placeholder={"Video"}
                    setter={setVideo}
                    value={videoN}
                />
            </View>

            <View className="">
                {
                    imageN &&
                    <TouchableOpacity
                        onPress={pickImage}
                        className="flex items-center justify-center py-4 bg-sky-500 rounded-xl"
                    >
                        <Text className="text-lg font-semibold text-white">Pick an Image</Text>
                    </TouchableOpacity>
                }
            </View>

            <View className="px-24 py-3 mb-24">
                <TouchableOpacity
                    onPress={handleOnSubmit}
                    className="rounded-lg bg-[#EFC81A] items-center py-3"
                >
                    <Text className="text-lg font-semibold text-white">POST</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EditRecipe