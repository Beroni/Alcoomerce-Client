import PImage from '../assets/tempproduct.jpg';

let products = [
    {
        name: 'Tikira',
        description: 'Tiquira é uma bebida alcoólica artesanal típica de alguns estados do nordeste brasileiro\n' +
            '                            (Maranhão, Piauí[1] e Ceará). De forte teor alcoólico e geralmente de cor roxa, é obtida\n' +
            '                            através\n' +
            '                            da destilação artesanal da mandioca fermentada (não industrializada), sendo encontrada\n' +
            '                            comumente\n' +
            '                            nos mercados de produtos regionais.',
        value: 77.34,
        id: 1,
        image: PImage,
        category_id: 3,
        quantity: 2
    }
]

const wait = () => new Promise((r) => setTimeout(r, 400));

export const getList = async () => {
    //await
    await wait();
    return products;
}

export const getOne = async (id) => {
    await wait();

    return {
        id,
        name: 'Drinks',
        description: 'Aqui estao listados todos os drinks oferecidos',
        image: PImage,
    }
}