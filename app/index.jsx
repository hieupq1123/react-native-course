import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoggedIn, isLoading } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center">
              Discover Endless Possibility with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            containerStyles="w-full mt-7"
            handlePress={() => router.push("/sign-in")}
            title={"Continue with Email"}
          />
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor="161622" style="dark" /> */}
    </SafeAreaView>
  );
}
