import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { api } from "@/src/services/api"

export default function ProductDetails(){

    const { id } = useLocalSearchParams()
    const router = useRouter()

    const [product, setProduct] = useState<any>()

    async function loadProduct(){
        const response = await api.get(`/${id}`)
        setProduct(response.data)
    }

    useEffect(()=>{
        loadProduct()
    },[])


    if(!product){
        return <Text>Carregando...</Text>
    }

    return(

        <View style={styles.container}>

            <Image
                source={{uri: product.thumbnail}}
                style={styles.image}
            />

            <Text style={styles.title}>
                {product.title}
            </Text>

            <Text style={styles.description}>
                Descrição: {product.description}
            </Text>

            <Text style={styles.price}>
                Preço: R$ {product.price}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff",
    justifyContent:"flex-start"
},

image:{
    height:250,
    resizeMode:"contain",
    marginBottom:20
},

title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:10
},

description:{
    fontSize:16,
    color:"#555",
    marginBottom:15
},

price:{
    fontSize:20,
    fontWeight:"bold",
    color:"#2F66D0",
    marginBottom:30
}

})