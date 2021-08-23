import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import UsersContext from '../context/UsersContext'


export default props => {

    //Utilizando o context dos usuários para acessar os valors compartilhados
    const { state } = useContext(UsersContext)

    //função para exibir alerta de exclusão
    function confirmUserDeletion(user) {
        //Titulo, mensagem, botão
        Alert.alert("Excluir Usuário", 'Deseja excluir o usuário?', [
            {
                text: 'Sim'
            },
            {
                text: 'Não'
            }
        ])
    }

    //função para exibir as ações de cada item
    function getAction(user) {
        return (
            <>
                <Button
                    icon={<Icon name="edit" size={25} color="orange" />}
                    type='clear'
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <Button
                    icon={<Icon name="delete" size={25} color="red" />}
                    type='clear'
                    onPress={() => confirmUserDeletion(user)}
                />
            </>
        )
    }

    //função para exibir usuarios em uma lista
    function getUserItem({ item: user }) {
        return (
            //linha para dividir os itens
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>

                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                {
                    //utilizando a função para exibir os botões de ação
                    getAction()
                }
            </ListItem>
        )
    }

    return (
        <View>
            {/* Exibir os dados do objeto users em uma lista */}
            <FlatList
                keyExtractor={user => user.id.toString()}
                //de onde ven os dados da lista
                data={state.users}
                //o que vai ser renderizado na tela
                renderItem={getUserItem}
            />
        </View>
    )
}