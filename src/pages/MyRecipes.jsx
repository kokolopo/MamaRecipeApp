import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import useMyRecipes from '../states/useMyRecipes'
import useLogin from '../states/useLogin'
import { useNavigation } from '@react-navigation/native';
import useRecipe from '../states/useRecipe';

const MyRecipeCard = ({ recipe, token }) => {
    const navigation = useNavigation()

    const { deleteRecipe } = useRecipe()

    const handleDelete = () => {
        Alert.alert(
            'Konfirmasi Hapus',
            'Apakah Anda yakin ingin menghapus data?',
            [
                { text: 'Batal', style: 'cancel' },
                { text: 'Hapus', style: 'destructive', onPress: () => deleteRecipe(recipe.id, token) },
            ],
            { cancelable: true }
        );
    };

    return (
        <View className="w-screen h-[100px] flex-row shadow-lg mt-3">
            <Image
                className="w-1/3 h-full rounded-xl"
                source={{ uri: `${recipe.image}` }}

            />
            <View
                className="flex flex-col ml-3 justify-evenly"
            >
                <Text className="text-xl text-blue-400">{recipe.title}</Text>
                <Text>{recipe.ingredients}</Text>
            </View>
            <View className="flex-row items-center ml-3 space-x-2">
                <TouchableOpacity
                    onPress={() => navigation.navigate("EditRecipe", {
                        recipeId: recipe.id,
                        title: recipe.title,
                        ingredients: recipe.ingredients,
                        image: recipe.image,
                        video: recipe.video,
                    })}
                    className="p-1 bg-[#EEC302] rounded-lg"
                >
                    <Feather name="edit-2" size={26} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleDelete}
                    className="p-1 border rounded-lg border-amber-400"
                >
                    <MaterialIcons name="delete" size={26} color="#EEC302" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const MyRecipes = () => {
    const { myRecipes, getMyRecipes, loading, error } = useMyRecipes()
    const { token } = useLogin()

    React.useEffect(() => {
        getMyRecipes(token)
    }, [myRecipes])


    return (
        <SafeAreaView className="px-4 py-5">
            {/* <Text>{JSON.stringify(myRecipes)}</Text> */}

            <FlatList
                data={myRecipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MyRecipeCard recipe={item} token={token} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default MyRecipes