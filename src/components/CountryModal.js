import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Components from '../components';
import useHooks from '../hooks';

const CountryModal = (props) => {
    const { onPress } = props;
    const background_nodata = require('./icon/background_nodata.png');
    const flag_vn = require('./icon/flag_vn.jpg');
    const [titleIndexOfArr] = useHooks.useService();
    const [index, setIndex] = useState(0);
    const [txtInput, setTxtInput] = useState('');
    const data = [
        {
            id: '1', icon: flag_vn, name: 'Vietnamese Dong (VND)',
            data: [
                { gia: 500, sl: '0', isActive: true },
                { gia: 1000, sl: '0', isActive: true },
                { gia: 2000, sl: '0', isActive: true },
                { gia: 5000, sl: '0', isActive: true },
                { gia: 10000, sl: '0', isActive: true },
                { gia: 20000, sl: '0', isActive: true },
                { gia: 50000, sl: '0', isActive: true },
                { gia: 100000, sl: '0', isActive: true },
                { gia: 200000, sl: '0', isActive: true },
                { gia: 500000, sl: '0', isActive: true },
            ]
        }
    ];
    function renderList() {
        let a = [];
        for (let i = 0; i < data.length; i++) {
            if (titleIndexOfArr(txtInput, data[i].id, data[i].name, data[i].time)) {
                a.push(<TouchableOpacity key={i} onPress={() => { setIndex(i) }}>
                    <View style={{ height: 50, borderBottomWidth: 0.5, borderColor: index == i ? 'green' : "#ccc", paddingBottom: 10, marginBottom: 2, flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 22, height: 15, marginRight: 5 }} source={data[i].icon}></Image>
                        <Text style={{ fontSize: 16, color: index == i ? 'green' : "#000"}}>{data[i].name}</Text>
                    </View>
                </TouchableOpacity>)
            }

        }
        if (a.length == 0) a.push(<View key={0} style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={background_nodata} style={{ resizeMode: "center" }}></Image>
        </View>)

        return a;
    }

    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={{ width: '80%', minHeight: "80%", maxHeight: "80%", backgroundColor: "#fff", borderRadius: 5 }}>
                <Components.Header title='LOAD CURRENCY'></Components.Header>
                <Components.TextInputSearchCustomt placeholder='Nhập từ khoá'
                    onChangeText={(x) => {
                        setTxtInput(x);
                    }}
                ></Components.TextInputSearchCustomt>

                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingLeft: 5, paddingRight: 5 }}>
                    {renderList()}
                </ScrollView>

                <View style={{ flexDirection: "row", height: 50, width: '100%', justifyContent: "flex-end", alignItems: "center", padding: 10, borderTopColor: "#ccc", borderTopWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => onPress({ key: 'exit', value: data[index] })}><Text style={{ textAlign: "center", fontWeight: "bold", marginRight: 20 }}>THOÁT</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onPress({ key: 'load', value: data[index] })}><Text style={{ textAlign: "center", fontWeight: "bold", color: "green", marginRight: 10 }}>LOAD</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
module.exports = { CountryModal };