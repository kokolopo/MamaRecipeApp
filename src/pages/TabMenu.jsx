import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BottomNavBar from '../components/fragments/BottomNavBar'
import Home from './Home'
import Profile from './Profile'
import useLogin from '../states/useLogin'

const TabMenu = ({ route, navigation }) => {
    const { FMCToken } = route.params;
    const [page, setPage] = React.useState(<Home />)

    const { token } = useLogin()
    // console.log(token);
    // React.useEffect(() => {
    //     if (!token) {
    //         navigation.navigate("Login")
    //     }
    // }, [])

    console.log({ FMCToken });
    return (
        <SafeAreaView className={`flex-1 bg-white pt-7`}>
            {
                page
            }
            <BottomNavBar setPage={setPage} />
        </SafeAreaView>
    )
}

export default TabMenu