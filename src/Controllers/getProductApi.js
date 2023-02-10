const axios = require("axios");

const getProducts = async () => {


//     let colors = ["black", "white", "green", "gold", "red", "blue"];
//     let ram = ["4GB", "8GB", "16GB"];
//     let camera = ["16MP", "32MP", "64MP"];

//     let productsMotorola = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Motorola");
//     productsMotorola = productsMotorola.data.results.slice(0, 25);
//     const cellphonesMotorola = productsMotorola.map(e => {
        


//         if(e.domain_id==="MLA-CELLPHONES"){

//             let img = e.thumbnail;
//             let identfier = img.slice(28, 56)
//             let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

//             return {
//                 color: colors[Math.ceil(Math.random() * 5)],
//                 model: e.title,
//                 ram: ram[Math.ceil(Math.random() * 2)],
//                 camera: camera[Math.ceil(Math.random() * 2)],
//                 marca: e.attributes[0].value_name,
//                 price: e.price,
//                 stock: e.available_quantity,
//                 condition: e.condition,
//                 image: image,//"https://http2.mlstatic.com/D_NQ_NP_854793-MLA50262132804_062022-O.webp",//e.thumbnail,
//                 os: "Android"
//             }

        

//         }
//     })
//     let productsSamsung = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Samsung");
//     productsSamsung = productsSamsung.data.results.slice(0, 25);
//     const cellphonesSamsung = productsSamsung.map(e => {
        


//         if(e.domain_id==="MLA-CELLPHONES"){

//             let img = e.thumbnail;
//             let identfier = img.slice(28, 56)
//             let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

//             return {
//                 model: e.title,
//                 color: colors[Math.ceil(Math.random() * 5)],
//                 ram: ram[Math.ceil(Math.random() * 2)],
//                 camera: camera[Math.ceil(Math.random() * 2)],
//                 marca: e.attributes[0].value_name,
//                 price: e.price,
//                 stock: e.available_quantity,
//                 condition: e.condition,
//                 image: image,
//                 os: "Android"
//             }
//         }
//     })
//     let productsHuawei = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Huawei");
//     productsHuawei = productsHuawei.data.results.slice(0, 25);
//     const cellphonesHuawei = productsHuawei.map(e => {
        

        
//         if(e.domain_id==="MLA-CELLPHONES"){

//             let img = e.thumbnail;
//             let identfier = img.slice(28, 56)
//             let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

//             return {
//                 model: e.title,
//                 color: colors[Math.ceil(Math.random() * 5)],
//                 ram: ram[Math.ceil(Math.random() * 2)],
//                 camera: camera[Math.ceil(Math.random() * 2)],
//                 marca: e.attributes[0].value_name,
//                 price: e.price,
//                 stock: e.available_quantity,
//                 condition: e.condition,
//                 image: image,
//                 os: "Android"
//             }
//         }
//     })
//     let productsIphone = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Iphone");
//     productsIphone = productsIphone.data.results.slice(0, 25);
//     const cellphonesIphone = productsIphone.map(e => {
        
        
        
//         if(e.domain_id==="MLA-CELLPHONES"){

//             let img = e.thumbnail;
//             let identfier = img.slice(28, 56)
//             let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

//             return {
//                 model: e.title,
//                 color: colors[Math.ceil(Math.random() * 5)],
//                 ram: ram[Math.ceil(Math.random() * 2)],
//                 camera: camera[Math.ceil(Math.random() * 2)],
//                 marca: e.attributes[0].value_name,
//                 price: e.price,
//                 stock: e.available_quantity,
//                 condition: e.condition,
//                 image: image,
//                 os: "IOS"
//             }
//         }
//     });
//     const allCellphones = [...cellphonesMotorola, ...cellphonesSamsung, ...cellphonesHuawei, ...cellphonesIphone];
  

//     return allCellphones;

// }
    


    let colors = ["black", "white", "green", "gold", "red", "blue", "pink"];
    let ram = ["4GB", "8GB", "16GB"];
    let camera = ["16MP", "32MP", "64MP"];

    let productsMotorola = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Motorola");
    productsMotorola = productsMotorola.data.results.slice(0, 25);
    const cellphonesMotorola = productsMotorola.map(e => {





        let img = e.thumbnail;
        let identfier = img.slice(28, 56)
        let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

        return {
            color: colors[Math.ceil(Math.random() * 5)],
            model: e.title,
            ram: ram[Math.ceil(Math.random() * 2)],
            camera: camera[Math.ceil(Math.random() * 2)],
            marca: e.attributes[0].value_name,
            price: e.price,
            stock: e.available_quantity,
            condition: e.condition.toLowerCase(),
            image: image,//"https://http2.mlstatic.com/D_NQ_NP_854793-MLA50262132804_062022-O.webp",//e.thumbnail,
            os: "Android"
        }




    })
    let productsSamsung = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Samsung");
    productsSamsung = productsSamsung.data.results.slice(0, 25);
    const cellphonesSamsung = productsSamsung.map(e => {





        let img = e.thumbnail;
        let identfier = img.slice(28, 56)
        let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

        return {
            model: e.title,
            color: colors[Math.ceil(Math.random() * 5)],
            ram: ram[Math.ceil(Math.random() * 2)],
            camera: camera[Math.ceil(Math.random() * 2)],
            marca: e.attributes[0].value_name,
            price: e.price,
            stock: e.available_quantity,
            condition: e.condition.toLowerCase(),
            image: image,
            os: "Android"
        }

    })
    let productsHuawei = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Huawei");
    productsHuawei = productsHuawei.data.results.slice(0, 25);
    const cellphonesHuawei = productsHuawei.map(e => {





        let img = e.thumbnail;
        let identfier = img.slice(28, 56)
        let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

        return {
            model: e.title,
            color: colors[Math.ceil(Math.random() * 5)],
            ram: ram[Math.ceil(Math.random() * 2)],
            camera: camera[Math.ceil(Math.random() * 2)],
            marca: e.attributes[0].value_name,
            price: e.price,
            stock: e.available_quantity,
            condition: e.condition.toLowerCase(),
            image: image,
            os: "Android"
        }

    })
    let productsIphone = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Iphone");
    productsIphone = productsIphone.data.results.slice(0, 25);
    const cellphonesIphone = productsIphone.map(e => {





        let img = e.thumbnail;
        let identfier = img.slice(28, 56)
        let image = "https://http2.mlstatic.com/D_NQ_NP_" + identfier + "-O.webp"

        return {
            model: e.title,
            color: colors[Math.ceil(Math.random() * 5)],
            ram: ram[Math.ceil(Math.random() * 2)],
            camera: camera[Math.ceil(Math.random() * 2)],
            marca: e.attributes[0].value_name,
            price: e.price,
            stock: e.available_quantity,
            condition: e.condition.toLowerCase(),
            image: image,
            os: "IOS"
        }

    });
    const allCellphones = [...cellphonesMotorola, ...cellphonesSamsung, ...cellphonesHuawei, ...cellphonesIphone];
    //console.log(allCellphones)

    return allCellphones;

}

module.exports = getProducts;