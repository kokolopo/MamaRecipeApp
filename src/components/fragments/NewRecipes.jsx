import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import NewRecipeCard from './NewRecipeCard'

//state 
import useRecipes from '../../states/useRecipes'
import useLogin from '../../states/useLogin'

const NewRecipes = () => {
    const { response, loading, error, fetchRecipes } = useRecipes()
    const { token } = useLogin()
    console.log(loading);


    React.useEffect(() => {
        fetchRecipes(token, 5, 1)
    }, [])


    return (
        <View className="mt-7">
            <Text className="text-lg font-semibold">New Recipes</Text>
            <View className="mt-5">
                {
                    loading ?
                        <Text className="text-xl font-semibold text-green-400">LOADING....</Text>
                        :
                        <FlatList
                            horizontal
                            data={response}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <NewRecipeCard id={item.id} title={item.title} imageUrl={item.image} />}
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        </View>
    )
}

export default NewRecipes