const initialState = [];

export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            if (state.find(item => item.id === action.data.id)) {
                return [...state.map(item => item.id === action.data.id ? {
                    ...item,
                    quantityInCart: item.quantityInCart + 1
                } : item)];
            } else {
                return [...state, action.data];
            }
        case 'ADD_ANOTHER':
            return [...state.map(item => item.id === action.id ? {
                ...item,
                quantityInCart: item.quantityInCart + 1
            } : item)];
        case 'SLICE':
            return [...state.map(item => {
                if (item.id === action.id) {
                    if (item.quantityInCart !== 1) {
                        return {...item, quantityInCart: item.quantityInCart - 1}
                    }
                    return null
                } else
                    return item
            })].filter(item => item);
        case 'UPDATE':
            return state.map((item) => item.id === action.id ? action.data : item);
        case 'REMOVE':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
}
