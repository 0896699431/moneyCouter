import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const BlockIconText = (props) => {
    const { icon, text, onPress } = props;
    return (
        <View
            style={{ flexDirection: "row", alignItems: "center", height: 50, borderBottomWidth: 0.5, borderColor: "#fff" }}
            onPress={() => { onPress() }}
        >
            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
                onPress={() => { onPress() }}
            >

                <Image style={{ height: 25, width: 25, marginLeft:10 }} source={icon}></Image>
                <Text style={{ fontSize: 16, marginLeft: 15, color: "#fff" }}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
};
module.exports = { BlockIconText };