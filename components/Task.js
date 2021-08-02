import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (content) => {
    return (
        <View style={styles.taskItem}>
            <View style={styles.taskItemLeft}>
                <TouchableOpacity style={styles.squareOpacity}></TouchableOpacity>
                <Text style={styles.taskItemText}>{content.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: "#262929",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    taskItemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    squareOpacity: {
        width: 24,
        height: 24,
        backgroundColor: '#0066ff',
        borderRadius: 4,
        opacity: 0.4,
        marginRight: 15,
    },
    taskItemText: {
        fontSize: 18,
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#0066ff',
        borderWidth: 1,
        borderRadius: 5,
    },

});
export default Task;