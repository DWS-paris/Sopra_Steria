export interface RegisterModel {
    userName: {
        label: string,
        value: string
    },
    userEmail: {
        label: string,
        value: string
    },
    userPassword: {
        label: string,
        value: string
    },
    userRepeatPassword?: { // Paramêtre optionnel
        label: string,
        value: string
    },
    userTos?: { // Paramêtre optionnel
        label: string,
        value: boolean
    }
}