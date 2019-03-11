import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PrettySlyledText} from "../components/StyledText";
import {Text} from "react-native";
import {connect} from "react-redux";

class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Result tab',
    };


    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.greetingText}>Hello, {this.props.name}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    greetingText: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'noto-bold',
        color: '#065798'
    }
});

const mapStateToPros = (state) => {
    return {
        name: state.infoReducer.name
    }
};

export default connect(mapStateToPros)(LinksScreen);