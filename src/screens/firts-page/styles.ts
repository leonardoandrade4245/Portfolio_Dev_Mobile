import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#f2f2f2"
},

blueArea:{
    height:"45%",
    backgroundColor:"#2F66D0",
    justifyContent:"center",
    alignItems:"center",
    padding:20
},

title:{
    color:"#fff",
    fontSize:26,
    fontWeight:"bold"
},

subtitle:{
    color:"#fff",
    marginTop:10,
    textAlign:"center"
},

card:{
    backgroundColor:"#fff",
    marginHorizontal:20,
    marginTop:-60,
    borderRadius:20,
    padding:20,
    elevation:5
},

titleInput:{
    marginTop:10,
    marginBottom:5,
    fontWeight:"600"
},

styleInput:{
    borderWidth:1,
    borderColor:"#ddd",
    height:50,
    borderRadius:8,
    paddingHorizontal:10
}

})