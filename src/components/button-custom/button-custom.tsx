import { TouchableOpacity, Text, StyleSheet } from "react-native"

type Props = {
  onPress: () => void
}

export const ButtonCustom = ({ onPress }: Props) => {

  return (
    <TouchableOpacity style={styles.styleButton} onPress={onPress}>
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    styleButton: {
        height: 52,
        width: '60%', 
        backgroundColor: "lightblue",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },

    textButton: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600"
    }
})