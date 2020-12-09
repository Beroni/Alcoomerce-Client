let initialState = {
    buyer: {
        name: "",
        password: "",
        email: "",
        cpf: "",
        street: "",
        number: "",
        complement: "",
        city: "",
        zipcode: "",
        state: ""
    },
    billing: {
        creditCard: "",
        cvc: "",
        validDate: ""
    }
}

export default function order(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return action.data;
        default:
            return state;
    }
}
