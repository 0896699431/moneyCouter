import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Components from '../components';
import CheckBox from '@react-native-community/checkbox';
import useHooks from '../hooks';
import { useGlobal } from '../hooks/store';

const EditModeModal = (props) => {
    const { onPress } = props;
    const [index, setIndex] = useState(0);
    const [globalState, globalActions] = useGlobal();
    const [storageItem, updateStorageItem, clearStorageItem] = useHooks.useAsyncStorage('editMode');
    const [data, setData] = useState(globalState.vn.menhgia);
    const [checkL1, setCheckL1] = useState(true);
    const [visible500, setVisible500] = useState(false);
    const [visible1000, setVisible1000] = useState(false);
    const [visible2000, setVisible2000] = useState(false);
    const [visible5000, setVisible5000] = useState(false);
    const [visible10000, setVisible10000] = useState(false);
    const [visible20000, setVisible20000] = useState(false);
    const [visible50000, setVisible50000] = useState(false);
    const [visible100000, setVisible100000] = useState(false);
    const [visible200000, setVisible200000] = useState(false);
    const [visible500000, setVisible500000] = useState(false);


    function onSave() {
        let tam = data;
        for (let i = 0; i < tam.length; i++) {
            if (tam[i].gia == 500) tam[i].isActive = visible500
            else if (tam[i].gia == 1000) tam[i].isActive = visible1000
            else if (tam[i].gia == 2000) tam[i].isActive = visible2000
            else if (tam[i].gia == 5000) tam[i].isActive = visible5000
            else if (tam[i].gia == 10000) tam[i].isActive = visible10000
            else if (tam[i].gia == 20000) tam[i].isActive = visible20000
            else if (tam[i].gia == 50000) tam[i].isActive = visible50000
            else if (tam[i].gia == 100000) tam[i].isActive = visible100000
            else if (tam[i].gia == 200000) tam[i].isActive = visible200000
            else if (tam[i].gia == 500000) tam[i].isActive = visible500000
        }
        updateStorageItem(JSON.stringify(tam));
        let tam2 = [];
        for (let i = 0; i < tam.length; i++) {
            if (tam[i].isActive)
                tam2.push(tam[i]);
        }
        globalActions.setData(tam2);
        onPress({ key: 'load', value: data[index] })
    }
    useEffect(() => {
        if (storageItem != null && checkL1) {
            console.log({ data: storageItem });
            setData(JSON.parse(storageItem));
            setCheckL1(false);
        } else
            for (let i = 0; i < data.length; i++) {
                if (data[i].gia == 500) setVisible500(data[i].isActive)
                else if (data[i].gia == 1000) setVisible1000(data[i].isActive)
                else if (data[i].gia == 2000) setVisible2000(data[i].isActive)
                else if (data[i].gia == 5000) setVisible5000(data[i].isActive)
                else if (data[i].gia == 10000) setVisible10000(data[i].isActive)
                else if (data[i].gia == 20000) setVisible20000(data[i].isActive)
                else if (data[i].gia == 50000) setVisible50000(data[i].isActive)
                else if (data[i].gia == 100000) setVisible100000(data[i].isActive)
                else if (data[i].gia == 200000) setVisible200000(data[i].isActive)
                else if (data[i].gia == 500000) setVisible500000(data[i].isActive)
            }


    }, [data, storageItem]);
    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={{ width: '80%', minHeight: "80%", maxHeight: "80%", backgroundColor: "#fff", borderRadius: 5 }}>
                <Components.Header title='EDIT MODE'></Components.Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>500</Text>
                        <CheckBox
                            value={visible500}
                            onValueChange={setVisible500}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>1,000</Text>
                        <CheckBox
                            value={visible1000}
                            onValueChange={setVisible1000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>2,000</Text>
                        <CheckBox
                            value={visible2000}
                            onValueChange={setVisible2000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>5,000</Text>
                        <CheckBox
                            value={visible5000}
                            onValueChange={setVisible5000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>10,000</Text>
                        <CheckBox
                            value={visible10000}
                            onValueChange={setVisible10000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>20,000</Text>
                        <CheckBox
                            value={visible20000}
                            onValueChange={setVisible20000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>50,000</Text>
                        <CheckBox
                            value={visible50000}
                            onValueChange={setVisible50000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>100,000</Text>
                        <CheckBox
                            value={visible100000}
                            onValueChange={setVisible100000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>200,000</Text>
                        <CheckBox
                            value={visible200000}
                            onValueChange={setVisible200000}
                            style={{ flex: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 6, fontSize: 25, color: "green", marginRight: 10, textAlign: "right" }}>500,000</Text>
                        <CheckBox
                            value={visible500000}
                            onValueChange={setVisible500000}
                            style={{ flex: 4 }}
                        />
                    </View>
                </ScrollView>

                <View style={{ flexDirection: "row", height: 50, width: '100%', justifyContent: "flex-end", alignItems: "center", padding: 10, borderTopColor: "#ccc", borderTopWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => onPress({ key: 'exit', value: data[index] })}><Text style={{ textAlign: "center", fontWeight: "bold", marginRight: 20 }}>THOÁT</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onSave()}><Text style={{ textAlign: "center", fontWeight: "bold", color: "green", marginRight: 10 }}>SAVE</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    );
};
module.exports = { EditModeModal };