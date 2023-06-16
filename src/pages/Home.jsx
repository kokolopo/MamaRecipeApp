import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeSearch from '../components/fragments/HomeSearch'
import NewRecipes from '../components/fragments/NewRecipes'
import CategoryRecipe from '../components/fragments/CategoryRecipe'
import PopulerRecipes from '../components/fragments/PopulerRecipes'

export default function Home() {
    return (
        <SafeAreaView className="flex-1 px-4 bg-white pt-7">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Searc */}
                <HomeSearch />
                {/* {response} */}

                {/* Category Recipe */}
                <CategoryRecipe />

                {/* New Recipe */}
                <NewRecipes />

                {/* Popular Recipes */}
                <PopulerRecipes />
            </ScrollView>
        </SafeAreaView>
    )
}