import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ backgroundColor: "#858585" }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="singUp" 
            options={{ 
                headerShown: true, 
                title: "cadastro"    
            }}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}
