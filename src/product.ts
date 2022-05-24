let productID = window.navigator.product;


const getProductID = (productID): String | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Other' | Error => {
    if (productID === 'Gecko') {
        return 'Gecko'
    }
    else if (productID === 'WebKit') {
        return 'WebKit'
    }
    else if (productID === 'Trident') {
        return 'Trident'
    }
    else if (productID === 'Presto') {
        return 'Presto'
    }
    else {
        throw new Error("Unknown engine \(UAD_1702\)")  // throw error;
    }
}

let engine = getProductID(productID);