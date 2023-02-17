import {  StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',

    },
    resultado: {
        color: 'white',
        fontSize: 200,
        textAlign: 'right',
        marginBottom:10,
    },
    calculadoraContiner: {
        paddingHorizontal: 20,
        justifyContent:'flex-end',
        fontSize: 60,
    },
    resultadopequeño: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 200,
        textAlign: 'right',
    },
    boton: {
        height: 200,
        width: 200,
        backgroundColor: '#9B9B9B',
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal:10,
    },
    botonTexto: {
        textAlign: 'center',
        padding:10,
        fontSize:60,
        color:'white',
        fontWeight:'300',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,

    }
});  