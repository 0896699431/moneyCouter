import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

const Header = (props) => {
    const { headerStyle, bgHeader } = styles;
    const { title } = props;
    return (
        <ImageBackground style={bgHeader}>
            <Text style={headerStyle}>{title}</Text>
        </ImageBackground>
    );
};

const HeaderSaveClear = (props) => {
    let eraser = require('./icon/eraser.png');
    let save = require('./icon/save.png');
    let more = require('./icon/more.png');
    const { onPress } = props;
    const { headerStyle, bgHeader } = styles;
    return (
        <View style={bgHeader}>
            <TouchableOpacity style={{ padding: 10, position: "absolute", left: 0 }}
                onPress={() => {
                    onPress({ more: true, clear: false, save: false });
                }}
            >
                <Image style={{ height: 20, width: 21.5 }} source={more}></Image>
            </TouchableOpacity>

            <Text style={headerStyle}>{props.headerText}</Text>
            <TouchableOpacity style={{ padding: 10, position: "absolute", right: 15 }}
                onPress={() => {
                    onPress({ more: false, clear: true, save: false });
                }}
            >
                <Image style={{ height: 25, width: 23 }} source={eraser}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, position: "absolute", right: 50 }}
                onPress={() => {
                    onPress({ more: false, clear: false, save: true });
                }}
            >
                <Image style={{ height: 25, width: 23 }} source={save}></Image>
            </TouchableOpacity>

        </View>
    );
};

const styles = {
    bgHeader: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green",
        flexDirection: "row"

    },
    headerStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
};

module.exports = { Header, HeaderSaveClear };