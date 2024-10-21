import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();



const productSchema = new mongoose.Schema({ // Define the structure of the product document
    name: { // Define the name field
        type: String, // The type of the field is a string
        required: true // The field is required
    },
    price: { // Define the price field
        type: Number, // The type of the field is a number
        required: true // The field is required
    },

    image: { // Define the image field

        type: String, // The type of the field is a string
        required: true // The field is optional
},
    description: { // Define the description field
        type: String, // The type of the field is a string
        required: false, // The field is optional

    },
}, 

{ // Options for the schema
    //    timestamps:  true // Include timestamps for created and modified fields

}

);
const Product = mongoose.model('Product', productSchema); // Create a Product model using the schema

export default Product; //
