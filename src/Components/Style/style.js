import react from "react";
import { StyleSheet } from "react-native";






const Farm_style = StyleSheet.create({


    colors: {
        verdePrincipal: "#2E7D32",
        verdeEscuro: "#1B5E20",
        verdeClaro: "#66BB6A",
        marrom: "#795548",
        marromEscuro: "#4E342E",
        creme: "#FFF8E1",
        branco: "#FFFFFF",
        cinza: "#757575",
        cinzaClaro: "#E0E0E0",
        vermelho: "#C62828",
        amarelo: "#F9A825",
    },
    main: {
        flex: 1,
        backgroundColor: "#F5F1E8",
    },
    header: {
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#2E7D32",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    subtitle: {
        fontSize: 16,
        color: "#E8F5E9",
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1B5E20",
        marginBottom: 12,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        width: "100%",
        padding: 20,
    },

    form: {
        width: "100%",
        backgroundColor: "#FFFFFF",

        padding: 20,

        borderRadius: 12,

        elevation: 3,
    },

    label: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#4E342E",

        marginBottom: 6,
        marginTop: 12,
    },



    input: {
        width: "100%",

        height: 50,

        borderWidth: 1,
        borderColor: "#C8C8C8",
        borderRadius: 8,

        paddingHorizontal: 15,
        backgroundColor: "#FFFFFF",
        fontSize: 16,
        color: "#333333",
    },

    inputFocused: {
        borderColor: "#2E7D32",
    },

    inputError: {
        borderColor: "#C62828",
    },



    button: {
        width: "100%",
        height: 50,

        backgroundColor: "#2E7D32",

        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        elevation: 3,
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonSecondary: {
        backgroundColor: "#795548",
    },
    buttonDanger: {
        backgroundColor: "#C62828",
    },
    buttonCancel: {
        backgroundColor: "#757575",
    },



    // modal

    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",

        padding: 20,
    },
    modal: {
        width: "100%",

        maxWidth: 450,

        backgroundColor: "#FFFFFF",

        borderRadius: 15,

        padding: 25,

        elevation: 10,
    },

    modalHeader: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: 15,
    },

    modalTitle: {
        fontSize: 22,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1B5E20",
        fontWeight: "bold",
        
        color: "#1B5E20",
    },

    modalText: {
        fontSize: 16,

        color: "#555555",

        lineHeight: 23,

        marginBottom: 15,
    },

    // cards

    card: {
        width: "100%",

        backgroundColor: "#FFFFFF",

        borderRadius: 12,

        padding: 18,

        marginBottom: 12,

        elevation: 3,
    },

    cardTitle: {
        fontSize: 18,

        fontWeight: "bold",

        color: "#1B5E20",

        marginBottom: 5,
    },

    cardText: {
        fontSize: 14,

        color: "#666666",

        marginBottom: 4,
    },


    // frutas itens
    fruitItem: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        backgroundColor: "#FFFFFF",

        padding: 15,

        borderRadius: 10,

        marginBottom: 10,

        elevation: 2,
    },

    fruitName: {
        fontSize: 17,

        fontWeight: "bold",

        color: "#4E342E",
    },

    fruitCategory: {
        fontSize: 13,

        color: "#2E7D32",

        marginTop: 3,
    },

    // erro e sucesso

    errorText: {
        color: "#C62828",

        fontSize: 14,

        marginTop: 5,
    },

    successText: {
        color: "#2E7D32",

        fontSize: 14,

        marginTop: 5,
    },



    marginTop: {
        marginTop: 15,
    },

    marginBottom: {
        marginBottom: 15,
    },

    center: {
        alignItems: "center",
        justifyContent: "center",
    },

});

export default Farm_style;


