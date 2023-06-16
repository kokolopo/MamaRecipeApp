import { View, Text, TouchableOpacity } from 'react-native'
import { Feather, Octicons, Ionicons } from '@expo/vector-icons';
import React from 'react'
import Home from '../../pages/Home';
import AddRecipe from '../../pages/AddRecipe';
import Recipes from '../../pages/Recipes';
import Profile from '../../pages/Profile';

const BottomNavBar = ({ setPage }) => {
    const [colors, setColors] = React.useState({
        home: '#EEC302',
        add: '#6E80B0',
        recipes: '#6E80B0',
        profile: '#6E80B0'
    });

    const handleOnClick = (page, obj) => {
        setPage(page)

        switch (obj) {
            case 'home':
                setColors(prevColors => ({
                    ...prevColors,
                    home: '#EEC302',
                    add: '#6E80B0',
                    recipes: '#6E80B0',
                    profile: '#6E80B0'
                }));
                break;
            case 'add':
                setColors(prevColors => ({
                    ...prevColors,
                    add: '#EEC302',
                    recipes: '#6E80B0',
                    profile: '#6E80B0',
                    home: '#6E80B0'
                }));
                break;
            case 'recipes':
                setColors(prevColors => ({
                    ...prevColors,
                    home: '#6E80B0',
                    add: '#6E80B0',
                    recipes: '#EEC302',
                    profile: '#6E80B0'
                }));
                break;
            case 'profile':
                setColors(prevColors => ({
                    ...prevColors,
                    home: '#6E80B0',
                    add: '#6E80B0',
                    recipes: '#6E80B0',
                    profile: '#EEC302'
                }));
                break;

            default:
                break;
        }
    }

    return (
        <View
            className="flex-row items-center justify-between w-full px-4 py-2 bg-white"
        >
            <TouchableOpacity
                onPress={() => handleOnClick(<Home />, 'home')}
                className="flex-row items-center px-4 py-3 space-x-2 bg-slate-200 rounded-xl"
            >
                <Feather name="home" size={24} color={colors.home} />
                <Text className="text-lg" style={{ color: colors.home }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleOnClick(<AddRecipe />, "add")}
            >
                <Octicons name="diff-added" size={24} color={colors.add} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleOnClick(<Recipes />, "recipes")}
            >
                <Ionicons name="fast-food-outline" size={24} color={colors.recipes} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleOnClick(<Profile />, "profile")}
            >
                <Feather name="user" size={24} color={colors.profile} />
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavBar