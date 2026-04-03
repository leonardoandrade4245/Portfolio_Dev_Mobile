import { HomeScreen } from "@/src/screens/home-screen/home-screen"
import { Stack } from "expo-router"

export default function HomeScreenPage(){

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => null
        }}
      />

      <HomeScreen />
    </>
  )
}