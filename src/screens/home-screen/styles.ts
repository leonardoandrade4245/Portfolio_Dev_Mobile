import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#F2F2F2", 
    marginTop: 5
},

tabs:{
    flexDirection:"row",
    justifyContent:"space-around",
    paddingTop:20,
    backgroundColor:"#FFF"
},

tabText:{
    fontSize:16,
    fontWeight:"500",
    paddingBottom:10
},

tabActive:{
    borderBottomWidth:3,
    borderBottomColor:"#2F66D0"
},

list:{
    padding:10
},

card:{
    width:"47%",
    backgroundColor:"#FFF",
    borderRadius:12,
    margin:6,
    borderWidth:1,
    borderColor:"#E0E0E0",
    overflow:"hidden"
},

image:{
    height:120,
    width:"100%",
    resizeMode:"contain",
    backgroundColor:"#F8F8F8"
},

cardContent:{
    padding:10
},

title:{
    fontSize:16,
    fontWeight:"600"
},

description:{
    fontSize:12,
    color:"#777",
    marginTop:4
},

priceRow:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:8
},

price:{
    fontSize:16,
    fontWeight:"bold"
},

oldPrice:{
    fontSize:12,
    color:"#999",
    textDecorationLine:"line-through",
    marginLeft:6
},

fab:{
    position:"absolute",
    bottom:90,
    right:20,
    width:55,
    height:55,
    backgroundColor:"#2F66D0",
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    elevation:5
},

fabText:{
    color:"#FFF",
    fontSize:26
},

bottomNav:{
    position:"absolute",
    bottom:0,
    width:"100%",
    height:70,
    backgroundColor:"#FFF",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderTopWidth:1,
    borderTopColor:"#E0E0E0"
},

navText:{
    fontSize:12,
    color:"#777"
}, 

logoutButton:{
    backgroundColor:"#E53935",
    height:50,
    width:"60%",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:"auto",
    alignSelf: "center",
},

logoutText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
}

})