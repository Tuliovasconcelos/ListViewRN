import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default props => {

    const [user, setUser] = useState(props.route.params ? props.route.params : {})

    return (
        <View style={style.form}>
            <Text>
                Nome
            </Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>
                E-mail
            </Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o email"
                value={user.email}
            />
            <Text>
                URL do Avatar
            </Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o URL"
                value={user.avatarUrl}
            />
            <Button
                style={style.button}
                title="Salvar"
                onPress={() => {
                    //Pegando como propriedade da navegação (route)
                    props.navigation.goBack()
                }}
            />
        </View>

    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5
    },
    form: {
        padding: 20,
    },
    button: {
        borderRadius: 5
    }
})