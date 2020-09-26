
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Modal, Share } from 'react-native';
import Components from '../components';
import { useGlobal } from '../hooks/store'
import useHooks from '../hooks';

const bg = require('../assets/background_draw.jpg')
let eraser = require('../assets/eraser.png');
let save = require('../assets/save.png');
let edit = require('../assets/edit.png');
let share = require('../assets/share.png');
let load = require('../assets/load.png');
let money = require('../assets/money.png');
export function DrawerContent(props) {
    const [globalState, globalActions] = useGlobal();
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [storageItem, updateStorageItem, clearStorageItem] = useHooks.useAsyncStorage('counterSave');
    const [counterTam, updateCounterTam] = useHooks.useAsyncStorage('counterTam');

    function clearData() {
        let tam = [
            { gia: 500, sl: '0' },
            { gia: 1000, sl: '0' },
            { gia: 2000, sl: '0' },
            { gia: 5000, sl: '0' },
            { gia: 10000, sl: '0' },
            { gia: 20000, sl: '0' },
            { gia: 50000, sl: '0' },
            { gia: 100000, sl: '0' },
            { gia: 200000, sl: '0' },
            { gia: 500000, sl: '0' },
        ]
        globalActions.setData(tam);
        props.navigation.closeDrawer();
        updateCounterTam(JSON.stringify(tam));
    }
    function onSave(value) {
        let dataT = globalState.data;
        let sum = 0;
        dataT.map(value => {
            sum = sum + value.gia * value.sl;
        });
        let arrT = storageItem != null ? JSON.parse(storageItem) : [];
        if (arrT == null) arrT = [];
        let tam = {
            id: useHooks.useIdRandom(13),
            name: value,
            data: globalState.data,
            time: useHooks.useDayTime(),
            sum: useHooks.useFormatNumber(sum)
        }
        arrT.unshift(tam);
        updateStorageItem(JSON.stringify(arrT));
        props.navigation.closeDrawer();
    }
    function onLoad(value) {
        if (typeof (value.value) != 'undefined') {
            globalActions.setData(value.value.data);
            props.navigation.closeDrawer();
        }


    }
    function onDelete(value) {
        let listData = storageItem != null ? JSON.parse(storageItem) : [];
        listData.splice(value.index, 1);
        updateStorageItem(JSON.stringify(listData));
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'https://play.google.com/store/apps/details?id=com.tracuu&hl=vi',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <ImageBackground style={{ flex: 1 }} source={bg}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <Components.AlertSave
                    title="Save"
                    message="Enter name to save"
                    txtBtnTrue="Save"
                    txtBtnFalse="Cancel"
                    onPressAlert={(value) => {
                        setVisible(false);
                        onSave(value.value);
                    }}>
                </Components.AlertSave>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible2}
            >
                <Components.ListModal
                    data={storageItem != null ? JSON.parse(storageItem) : []}
                    onPress={(value) => {
                        if (value.key == 'exit')
                            setVisible2(false);
                        if (value.key == 'delete')
                            onDelete(value);
                        if (value.key == 'load') {
                            setVisible2(false);
                            onLoad(value);
                        }
                    }}
                >
                </Components.ListModal>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible3}
            >
                <Components.EditModeModal
                    onPress={(value) => {
                        setVisible3(false)
                    }}
                >
                </Components.EditModeModal>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible4}
            >
                <Components.CountryModal
                    onPress={() => {
                        setVisible4(false)
                    }}
                >
                </Components.CountryModal>
            </Modal>

            <View>
                <View
                    style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 48, borderBottomWidth: 0.5, borderColor: "#fff" }}
                >
                    <Text style={{ fontSize: 16, marginLeft: 10, color: "#fff", fontWeight: "bold" }}></Text>

                </View>
                <Components.BlockIconText text='Clear' icon={eraser} onPress={() => clearData()}></Components.BlockIconText>
                <Components.BlockIconText text='Save' icon={save} onPress={() => { setVisible(true) }}></Components.BlockIconText>
                <Components.BlockIconText text='Load' icon={load} onPress={() => { setVisible2(true) }}></Components.BlockIconText>
                <Components.BlockIconText text='Currency' icon={money} onPress={() => { setVisible4(true) }}></Components.BlockIconText>
                <Components.BlockIconText text='Edit Mode' icon={edit} onPress={() => { setVisible3(true) }}></Components.BlockIconText>
                <Components.BlockIconText text='Share' icon={share} onPress={() => { onShare() }}></Components.BlockIconText>
            </View>
            <Text style={{ fontSize: 11, width: '100%', textAlign: "center", position: "absolute", bottom: 10, color: '#fff' }}> Money Couter v1.0</Text>
        </ImageBackground >
    );
}

