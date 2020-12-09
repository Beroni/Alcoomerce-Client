import api from '.'
import Tikira from "../assets/tempproduct.jpg";
const wait = () => new Promise((r) => setTimeout(r, 400));

export const getOne = async (id) => {
    await wait()

    return {
        id: 1,
        name: 'Tikira',
        description: 'Tiquira é uma bebida alcoólica artesanal típica de alguns estados do nordeste brasileiro\n' +
            '                            (Maranhão, Piauí[1] e Ceará). De forte teor alcoólico e geralmente de cor roxa, é obtida\n' +
            '                            através\n' +
            '                            da destilação artesanal da mandioca fermentada (não industrializada), sendo encontrada\n' +
            '                            comumente\n' +
            '                            nos mercados de produtos regionais.',
        value: 77.34,
        image: Tikira,
        category: 3,
        quantity: 2
    }
}

export const getList = (filter = {}) => {
    return api("GET", "/products", {}, {}, filter);
}