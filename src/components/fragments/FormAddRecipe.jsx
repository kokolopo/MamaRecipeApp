import { View, Text, TextInput, TouchableOpacity, Platform, Button, Image, ScrollView } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react'
// State
import useRecipes from '../../states/useRecipes';
import useLogin from '../../states/useLogin';

const FormAddRecipe = () => {
    const { postRecipe, responsePost, error } = useRecipes()
    const { token } = useLogin()

    const [image, setImage] = React.useState(null);
    const [title, setTitle] = React.useState("")
    const [ingredients, setIngredients] = React.useState("")
    const [video, setVideo] = React.useState("")

    const pickImage = async () => {
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
            // console.log(image);
        }
    };

    const handleOnSubmit = () => {
        const formData = new FormData();
        formData.append("title", title)
        formData.append("ingredients", ingredients)
        formData.append("video", video)
        formData.append('image', {
            uri: image,
            name: new Date() + "_recipe",
            type: 'image/png'
        });
        console.log(formData);
        postRecipe(token, formData)
    }

    return (
        <ScrollView
            className="flex space-y-3 mt-7"
        >
            {/* <Text>{JSON.stringify(error)}</Text> */}
            {image && <Image source={{ uri: image }} style={{ width: '100%', height: 150 }} />}
            <View
                className="flex-row items-center px-3 py-2 space-x-2 rounded-lg bg-slate-200"
            >
                <Feather name="book-open" size={24} color="gray" />
                <TextInput
                    className=""
                    placeholder='Title'
                    onChangeText={text => setTitle(text)}
                    value={title}
                />
            </View>

            <View
                className="flex-row items-center px-3 py-2 space-x-2 rounded-lg bg-slate-200"
            >
                <TextInput
                    multiline={true}
                    numberOfLines={7}
                    style={{ height: 140, textAlignVertical: 'top', }}
                    placeholder='Ingedients'
                    value={ingredients}
                    onChangeText={text => setIngredients(text)}
                />
            </View>

            <View
                className="flex-row items-center px-3 py-2 space-x-2 rounded-lg bg-slate-200"
            >
                <Ionicons name="ios-videocam-outline" size={24} color="gray" />
                <TextInput
                    placeholder='Video'
                    value={video}
                    onChangeText={text => setVideo(text)}
                />
            </View>

            <View className="">
                {
                    !image &&
                    <TouchableOpacity
                        onPress={pickImage}
                        className="flex items-center justify-center py-4 bg-sky-500 rounded-xl"
                    >
                        <Text className="text-lg font-semibold text-white">Pick an Image</Text>
                    </TouchableOpacity>
                }
            </View>

            <View className="px-24 py-3">
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

export default FormAddRecipe