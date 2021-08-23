import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'



const Stack = createNativeStackNavigator()

export default props => {
    return (
        //Envolvendo a aplicação toda com o provider para passar os dados do provider
        <UsersProvider>
            {/* Envolve qualquer tipo de navgacao */}
            <NavigationContainer>
                {/* Definir rota inicial e o que vai ser escrito na AppBar */}
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>


                    {/* Tela de lista dos usuários */}
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        // Colocar titulo e botão no App Bar da lista de usuários
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        icon={<Icon name="add" size={25} color='white' />}
                                        onPress={() => navigation.navigate("UserForm")}
                                    />
                                )
                            }
                        }}
                    />

                    {/* Tela de Cadastro de usuários */}
                    < Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: "Formuário de Usuários" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

//Estilo do screen options (AppBar)
const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }

}