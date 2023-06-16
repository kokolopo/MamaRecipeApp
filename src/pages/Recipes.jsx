import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeSearch from '../components/fragments/HomeSearch'
import RecipeCard from '../components/fragments/RecipeCard';
import useRecipes from '../states/useRecipes';
import useLogin from '../states/useLogin';
import { Ionicons } from '@expo/vector-icons';

const recipes = [
    { id: 1, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 2, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 3, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 4, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 5, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 6, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 7, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
    { id: 8, title: "Masakan Mama", image: "https://picsum.photos/200/300", category: "Nusantara", ingredients: "komposisi" },
]

const Recipes = () => {
    const { fetchRecipes, response, totalPages } = useRecipes()
    const [recipes, setRecipes] = React.useState(response);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sort, setSort] = React.useState('desc');
    const [searchQuery, setSearchQuery] = React.useState('');
    const { token } = useLogin()

    React.useEffect(() => {
        fetchRecipes(token, 10, currentPage, sort)
    }, [response, currentPage, sort])

    // console.log(recipes);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredData = recipes.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setRecipes(filteredData);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };
    const renderPagination = () => {
        return (
            <View>
                <View
                    className="flex-row items-center justify-center"
                >
                    <TouchableOpacity
                        onPress={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 bg-slate-300 rounded-xl"
                    >
                        <Ionicons name="chevron-back" size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="mx-3 text-xl">Page {currentPage} of {totalPages}</Text>
                    <TouchableOpacity
                        onPress={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 bg-slate-300 rounded-xl"
                    >
                        <Ionicons name="chevron-forward" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView
            className="flex-1 px-4 pt-1 bg-white"
        >
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
            > */}
            <View className="h-[85%]">
                <HomeSearch handleSearch={handleSearch} searchQuery={searchQuery} />

                <View
                    className="h-full mt-7"
                >
                    <View
                        className="flex-row justify-between"
                    >
                        <Text className="text-lg font-semibold">Recipes</Text>
                        <TouchableOpacity onPress={() => {
                            const val = sort === 'asc' ? 'desc' : 'asc'
                            setSort(val)
                        }}>
                            <AntDesign name="filter" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <View
                        className="items-start"
                    >
                    </View>

                    <FlatList
                        data={response}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <RecipeCard recipe={item} />}
                        showsVerticalScrollIndicator={false}
                    />

                    {renderPagination()}
                </View>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Recipes