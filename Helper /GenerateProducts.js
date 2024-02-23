import mongoose from "mongoose";
import Product from "../Model/product.js";

function generateRandomData(category) {
    const names = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'];
    const descriptions = ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'];
    const prices = [20, 30, 40, 50, 60];

    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    return {
        name: getRandomElement(names),
        description: getRandomElement(descriptions),
        price: getRandomElement(prices),
        category: category,
    };
}

async function insertRandomData() {
    const categories = ['footwear', 'clothes', 'perfume', 'cosmetics', 'glasses', 'bags'];
    const recordsPerCategory = 10;

    for (const category of categories) {
        const randomData = Array.from({length: recordsPerCategory}, () => generateRandomData(category));
        try {
            const result = await Product.insertMany(randomData);
            console.log(`Inserted ${result.length} records for category: ${category}`);
        } catch (error) {
            console.error(`Error inserting records for category ${category}:`, error.message, error.lineNumber);
        }
    }
}

export default insertRandomData;



