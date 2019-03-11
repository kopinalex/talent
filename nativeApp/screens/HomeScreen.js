import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, TextInput,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText, PrettySlyledText} from '../components/StyledText';
import {styles as St} from './homeScreenStyle'
import {setName} from "../actions/startScreenActions";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const {name} = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image source={require('../assets/images/logo.png')} style={styles.welcomeImage}/>
                    </View>

                    <View style={St.flexContainer}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/icon1.png')}/>
                        </TouchableOpacity>
                    </View>

                    <TextInput style={St.textInput}
                               placeholder={'input your name'}
                               onChangeText={(text) => {
                                   this.props.setName(text)
                               }}
                    />

                </View>

            </ScrollView>
        );
    }

    handleChangeName = (text) => {
        this.props.setName(text);
    };

    _maybeRenderDevelopmentModeWarning() {
        if (__DEV__) {
            const learnMoreButton = (
                <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
                    Learn more
                </Text>
            );

            return (
                <Text style={styles.developmentModeText}>
                    Development mode is enabled, your app will be slower but you can use useful development
                    tools. {learnMoreButton}
                </Text>
            );
        } else {
            return (
                <Text style={[styles.developmentModeText]}>
                    You are not in development mode, your app will run at full speed.
                </Text>
            );
        }
    }

    _handleLearnMorePress = () => {
        WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
    };

    _handleHelpPress = () => {
        WebBrowser.openBrowserAsync(
            'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#cff8ff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(255,255,200, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    simpleTextMessage: {
        fontSize: 20,
        color: 'green',
        textAlign: 'center',
    },
    testScrollView: {
        // height: '200',
        backgroundColor: 'white',
    },
    textRed: {
        color: 'red'
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
};

const mapStateToPros = (state) => {
    return {
        name: state.infoReducer.name
    }
};


export default connect(mapStateToPros, mapDispatchToProps)(HomeScreen);