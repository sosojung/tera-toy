import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 78,
        paddingHorizontal: 20,
        paddingBottom: 41,
    },
    writeWrap1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 12,
  },
})

export default commonStyles;

export const buttonStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#6C67FF',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
})

export const inputStyles = StyleSheet.create({
    input: {
        width: "100%",
        height: 46,
        padding: 10,
        borderRadius: 8,
        fontSize: 5,
        backgroundColor: '#E0DFFF',
        color: "#4D49B5",
    },
})

export const textStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})