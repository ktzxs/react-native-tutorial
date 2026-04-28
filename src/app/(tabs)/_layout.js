import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ backgroundColor: "#858585" }}>
            <Tabs.Screen name="home" 
            options={{ 
                title: "contact"
            }} />
            <Tabs.Screen name="contact" options={{ headerShown: true }} />
        </Tabs>
    )
}
