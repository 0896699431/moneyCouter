import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import useHooks from '../hooks';

const CouterComponent = (props) => {
    const dautru = require('./icon/dautru.png');
    const daucong = require('./icon/daucong.png');
    const { gia, soluong, onChange } = props;
    const [size, setSize] = useState({ input: 18, output: 18 });
    const [check, setCheck] = useState(false);





    const changeText = (x) => {
        let t = x == "" ? '0' : x;
        let t2 = parseInt(t).toString();
        let l = t2.length;
        if (l < 7)
            onChange({ gia: gia, sl: t2, check: false });
        else
            onChange({ gia: gia, sl: soluong, check: true });
    };

    useEffect(() => {
        let s = 18;
        if (soluong > 10000000) s = 8
        else if (soluong > 1000000) s = 10
        else if (soluong > 100000) s = 12
        else if (soluong > 10000) s = 14
        else if (soluong > 1000) s = 16

        let s2 = 18;
        let giatril = (soluong * gia).toString().length;
        if (giatril > 11) s2 = 14
        else if (giatril > 10) s2 = 15
        else if (giatril > 9) s2 = 16

        let ss = { input: s, output: s2 }
        setSize(ss)
        setCheck(false);
        return (() => {

        })
    }, [soluong]);





    return (
        <View style={{ width: '100%', height: 50, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginLeft: 5, width: 100, fontSize: 18, color: "green", textAlign: "right" }}>{useHooks.useFormatNumber(gia)}</Text>
            <Text style={{ paddingLeft: 5, paddingRight: 10, color: '#ccc', fontSize: 18 }}>x</Text>
            <TouchableOpacity style={{ padding: 5 }}
                disabled={check}
                onPress={() => {
                    setCheck(true);
                    if (soluong > 0) {
                        let x = soluong != '' ? ((parseInt(soluong) - 1).toString()) : '1';
                        changeText(x);
                    }
                }}>
                <Image style={{ width: 20, height: 20 }} source={dautru}></Image>
            </TouchableOpacity>


            <TextInput style={{ width: 60, padding: 0, textAlign: "center", borderBottomWidth: 2, borderColor: "#ccc" }}
                placeholderTextColor={'#ccc'}//mau chu goi y
                selectTextOnFocus={true}//chon tat ca text
                selectionColor={'#ccc'}//mau con tro
                keyboardType={'number-pad'}
                editable={true}
                value={soluong}
                fontSize={size.input}
                onChangeText={(x) => changeText(x)}
                onEndEditing={() => {
                }}
            ></TextInput>
            <TouchableOpacity style={{ padding: 5 }}
                disabled={check}
                onPress={() => {
                    setCheck(true);
                    let x = soluong != '' ? ((parseInt(soluong) + 1).toString()) : '1';
                    changeText(x);
                }}
            >
                <Image style={{ width: 20, height: 20 }} source={daucong}></Image>
            </TouchableOpacity>

            <Text style={{ paddingLeft: 10, paddingRight: 10, color: '#ccc', fontSize: 18 }}>=</Text>
            <Text style={{ fontSize: size.output, color: "green", textAlign: "right", flex: 1, padding: 0 }}>{useHooks.useFormatNumber(gia * soluong)} đ</Text>
        </View>
    )
}

module.exports = { CouterComponent };