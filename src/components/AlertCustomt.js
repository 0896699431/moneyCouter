import React, { Component, useState, useEffect } from 'react';
import {
    View, Button, Text, StyleSheet, Image, Alert, TouchableOpacity, TextInput
} from 'react-native';
import useHooks from '../hooks';
const AlertClose = (props) => {
    const logoI = require('./icon/close.png');
    const { title, message, onPress } = props;

    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>

            <View style={{ width: "70%", backgroundColor: "#fff", alignItems: "center", padding: 10, borderRadius: 10 }}>

                <Image source={logoI} style={{ height: 50, width: 50, position: "absolute", top: -25 }}></Image>

                <Text style={{ marginTop: 30, fontSize: 18 }}>{title}</Text>
                <Text style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}>{message}</Text>

                <TouchableOpacity style={{ width: '100%', backgroundColor: "red", height: 40, justifyContent: "center", alignItems: "center", borderRadius: 2 }}
                    onPress={() => onPress()}
                >
                    <Text style={{ color: "#fff" }}>ĐÓNG</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
};

const AlertSave = (props) => {
    const logoI = require('./icon/close.png');
    const clear = require('./icon/clear.png')
    const { onPressAlert, title } = props;
    const value = useHooks.useDayTime();
    const [text, setText] = useState(value);
    const [icon, setIcon] = useState(logoI);
    const [textS, setTextS] = useState({ checkbtn: true, value: value });

    const changeText = (x) => {
        setText(x);
        if (x == "")
            setTextS({ checkbtn: true, value: value });
        else setTextS({ checkbtn: true, value: x });
        // onChangeText(x);
    };

    const onSave = () => {
        // let logoI = require('./icon/search.png');
        // setIcon(logoI);
        onPressAlert(textS)

    };


    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={{ width: "90%", backgroundColor: "#fff", alignItems: "center", padding: 10, borderRadius: 10 }}>
                <Image source={icon} style={{ height: 50, width: 50, position: "absolute", top: -25 }}></Image>
                <Text style={{ marginTop: 30, fontSize: 18 }}>{title}</Text>
                <View style={{ flexDirection: "row", width: "100%", height: 45, paddingLeft: 10, paddingRight: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
                    <TextInput style={{ flex: 1, textAlign: "center", fontSize: 18, padding:2 }}
                        placeholder={value}//chu goi y
                        placeholderTextColor={'#ccc'}//mau chu goi y
                        selectTextOnFocus={true}//chon tat ca text
                        selectionColor={'blue'}//mau con tro
                        editable={true}//co the chinh sua
                        value={text}
                        onChangeText={(x) => changeText(x)}

                    ></TextInput>
                    {text != "" ? <TouchableOpacity style={{ padding: 10 }} onPress={() => { changeText('') }}>
                        <Image style={{ width: 15, height: 15 }} source={clear}></Image>
                    </TouchableOpacity> : null}
                </View>


                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ marginRight: "10%", width: "40%", backgroundColor: "green", height: 40, justifyContent: "center", alignItems: "center", borderRadius: 5 }}
                        onPress={() => onSave()}>
                        <Text>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: "40%", backgroundColor: "red", height: 40, justifyContent: "center", alignItems: "center", borderRadius: 5 }}
                        onPress={() => { onPressAlert({ checkbtn: false, value: value }) }}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        height: '30%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404040',
        borderRadius: 10,
        padding: 10
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    middlePart: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 2
    },
    bottomPart: {
        marginTop: 20,
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'
    },
    alertIconStyle: {
        height: 40,
        width: 40
    },
    alertTitleTextStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 2,
        marginHorizontal: 2
    },
    alertMessageTextStyle: {
        color: '#ffffff',
        textAlign: 'justify',
        fontSize: 16,
        padding: 16
    },
    alertMessageButtonStyle: {
        paddingHorizontal: 15,
        marginVertical: 6,
        borderRadius: 5,
        backgroundColor: '#401107',
        justifyContent: 'center',
        height: 35,


    },
    alertMessageButtonTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
module.exports = { AlertClose, AlertSave };