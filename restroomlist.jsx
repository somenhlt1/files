import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Marker, Circle } from "react-native-maps";


export default function List({ data }) {
    return (
        <div>
            <Text>{data.latitude}</Text>
        </div>
    );
}