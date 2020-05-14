interface Mountain {
    name: string,
    height: number
};

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];

const findNameOfTallestMountain = (mountainArray: Mountain[]): string => {
    //at the beginning of the array the first mountain is the tallest
    let tallestMountain = mountainArray[0];
    //going through the array, check each mountain and compare each one tp each other
    mountainArray.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain
        }
    });
    return tallestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));

//products

interface Product {
    productName: string,
    productPrice: number
};

//products is an array of objects where each object meets the interface(contract) Products
let products: Product[] = [
    { productName: "brush", productPrice: 5.99 },
    { productName: "toothpaste", productPrice: 4.99 },
    { productName: "toothbrush", productPrice: 100.00 }
];

//the function requires an array to complete its task, but requires the array of objects to meet the product interface, returns number
const calAverageProductPrice = (productArray: Product[]): number => {
    let productSum = 0;
    //forEach loop- loops through each part of the array to find the product
    productArray.forEach((product) => {
        //the productSum is is the sum of products plus the new sum in the array
        productSum += product.productPrice
    })
    //.length is a way to get number of items in an array
    return productSum / productArray.length
};
console.log(calAverageProductPrice(products));


//======ASSESSMENT LOOKS LIKE THIS=======^^^^^^^^


//inventory


interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory: InventoryItem[] = [
    { product: { productName: "motor", productPrice: 10.00 }, quantity: 10 },
    { product: { productName: "sensor", productPrice: 12.50 }, quantity: 4 },
    { product: { productName: "LED", productPrice: 1.00 }, quantity: 20 }
]
const calcInventoryValue = (inventoryArray: InventoryItem[]): number => {
    let inventorySum = 0
    inventoryArray.forEach((inventoryItem) => {
        inventorySum += inventoryItem.product.productPrice * inventoryItem.quantity
    })
    return inventorySum
}
//console.log the function and pass through the array, references the array 
console.log(calcInventoryValue(inventory))

//productprice * productvalue = inventoryvalue
