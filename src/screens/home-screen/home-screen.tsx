import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import { useEffect, useState } from "react"
import { api } from "@/src/services/api"
import { useRouter } from "expo-router"
import { styles } from "./styles"


type Product = {
    id: number
    title: string
    price: number
    thumbnail: string
}

export const HomeScreen = () => {

    const router = useRouter()


    const [products, setProducts] = useState<Product[]>([])
    const [category, setCategory] = useState("mens-shirts")

    async function loadProducts(){

        const response = await api.get(`/category/${category}`)

        setProducts(response.data.products)
    }

    useEffect(()=>{
        loadProducts()
    },[category])

    function handleLogout(){
        router.replace("/firts-page")
    }


    return(

        <View style={{flex:1}}>

            {/* Tabs */}

            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                padding:15
            }}>

                <TouchableOpacity onPress={()=>setCategory("mens-shirts")}>
                    <Text>Produtos Masculinos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setCategory("womens-dresses")}>
                    <Text>Produtos Femininos</Text>
                </TouchableOpacity>

            </View>


            {/* Lista */}

            <FlatList<Product>
                data={products}
                numColumns={2}
                keyExtractor={(item)=>String(item.id)}
                

                renderItem={({item})=>(
                <TouchableOpacity
                    onPress={() =>
                        router.push({
                            pathname: "./product-details",
                            params: { id: item.id }
                        })
                    }
                    style={{
                        width: "48%",
                        borderWidth: 1,
                        borderRadius: 10,
                        margin: 5,
                        padding: 10
                    }}
                >

                        <Image
                            source={{uri:item.thumbnail}}
                            style={{height:120}}
                        />

                        <Text>{item.title}</Text>

                        <Text>R$ {item.price}</Text>

                    </TouchableOpacity>
                )}

            />

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}