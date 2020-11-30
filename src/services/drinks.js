import PImage from '../assets/tempproduct.jpg';


let drinks = [
    {
        name: 'Tikira',
        description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
        value: 77.34,
        id: 1,
        image: PImage,
        category: 3
    }
]

const wait = () => new Promise((r) => setTimeout(r, 400));

export const getList = async () => {
    //await
    await wait()

    return drinks
}