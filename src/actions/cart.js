export function add(data){
    return {
        type: 'ADD',
        data
    }
}

export function addAnother(id){
    return {
        type: 'ADD_ANOTHER',
        id
    }
}

export function slice(id){
    return {
        type: 'SLICE',
        id
    }
}

export function remove(id){
    return {
        type: 'REMOVE',
        id
    }
}

export function update(data, id){
    return {
        type: 'UPDATE',
        id,
        data
    }
}


