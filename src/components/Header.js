import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Header = (props) => {
    const containerHeight = 0.4 * height;
    return (
        <SafeAreaView>
            <View
                style={{
                    backgroundColor: "#009688",
                    width: width,
                    height: containerHeight,
                    flexDirection: "column",
                    padding: 5,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 5
                    }}
                >
                    <View style={{ width: 0.8 * width }}>
                        <Text style={{ fontSize: 24, color: "#fff" }}>
                            Greater London
                        </Text>
                    </View>
                    <View style={{ width: 0.2 * width }}>
                        <Text style={{ fontSize: 18, color: "#fff" }}>
                            location
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: containerHeight * 0.7}}>
                    <View><Text style={{ fontSize: 18, color: "#fff" }}>Sunday, 26 Nov 2021</Text></View>
                    <View><Text style={{ fontSize: 18, color: "#fff" }}>8 Shawwal 1441</Text></View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // headerContainer: {
    //   elevation: 8,
    //   backgroundColor: "#009688",
    //   borderRadius: 10,
    //   paddingVertical: 10,
    //   paddingHorizontal: 12
    // },
    // appButtonText: {
    //   fontSize: 18,
    //   color: "#fff",
    //   fontWeight: "bold",
    //   alignSelf: "center",
    //   textTransform: "uppercase"
    // }
});

export default Header;
