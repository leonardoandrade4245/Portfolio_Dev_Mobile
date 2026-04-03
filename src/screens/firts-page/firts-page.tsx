import { View, Text, TextInput, Alert } from "react-native"
import { styles } from "@/src/screens/firts-page/styles"
import { useState } from "react"
import { ButtonCustom } from "@/src/components/button-custom/button-custom"
import { useRouter } from "expo-router"

export const FirtsPage = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){

        if(!email || !password){
            Alert.alert("Erro", "Preencha todos os campos")
            return
        }

        if(
            (email === "leonardoandrade@gmail.com" && password === "4245") ||
            (email === "usertutor@gmail.com" && password === "tutor01")
        ){
            router.push("/home-screen")
        }else{
            Alert.alert("Erro", "Usuário ou senha inválidos")
        }

    }

    return(

        <View style={styles.container}>

            <View style={styles.blueArea}>
                <Text style={styles.title}>Bem-vindo de volta!</Text>
                <Text style={styles.subtitle}>
                    Insira seus dados para entrar na sua conta
                </Text>
            </View>

            <View style={styles.card}>

                <Text style={styles.titleInput}>Email</Text>

                <TextInput
                    style={styles.styleInput}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.titleInput}>Senha</Text>

                <TextInput
                    style={styles.styleInput}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <ButtonCustom onPress={handleLogin}/>

            </View>

        </View>

    )
}