let productID = window.navigator.product;
const getProductID = (productID) => {
    if (productID === 'Gecko') {
        return 'Gecko';
    }
    else if (productID === 'WebKit') {
        return 'WebKit';
    }
    else if (productID === 'Trident') {
        return 'Trident';
    }
    else if (productID === 'Presto') {
        return 'Presto';
    }
    else {
        console.error("Unknown engine \(UAD_1702\)"); // throw error;
        return "Other";
    }
};
let engine = getProductID(productID);
export { engine };
