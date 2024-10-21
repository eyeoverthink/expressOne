import mongoose from 'mongoose'; // Import Mongoose
import dotenv from 'dotenv'; // Import dotenv for managing environment variables
import express from 'express'; // Import Express
import Product from './models/product.model.js'; // Import the Product model
import bodyParser from 'body-parser'; // Bodyparser middleware
import cors from 'cors'; // Enable CORS for cross-origin resource sharing

// Load environment variables from.env file
dotenv.config();

const app = express(); // Create an Express application

app.use.apply(express.json()); // Bodyparser middleware)



// Define middleware
app.use(bodyParser.json()); // Bodyparser middleware
app.use(cors());   // Enable CORS for cross-origin resource sharing



// Connect to MongoDB
// mongoose.set('useNewUrlParser', true); // Enable the new URL parser for Mongoose
// mongoose.set('useUnifiedTopology', true); // Enable the new topology for Mongoose
// mongoose.set('useFindAndModify', false); // Disable Mongoose's deprecated findOneAndUpdate method



// Routes
// Define your routes here
app.post('./products', async (req, res) => { // POST request to create a new product
    const product = req.body; // Assuming the request body contains product details

    if (!product.name ||!product.price ||!product.image) { // Return an error if any of the required fields are missing
        return res.status(400).json({ message: 'Missing product details.' }); // Return an error if any of the required fields are missing
    }

    const newProduct = new Product(product); // Create a new product instance with the provided details

    try { // Try to save the new product to the database
        await newProduct.save(); // Save the new product to the database
        return res.status(201).json({ success: true, data: newProduct }); // Return the saved product
    } catch (error) { // Return an error if the product couldn't be saved
        console.error(`Error in creation : ${error.message}`); // Return an error if the server couldn't start
        res.status(500).json({ success: false, message: 'Failed to create product.' }); // Return an error if the server couldn't start
    }
});




export const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Error connecting to MongoDB:', err));
        console.log('MongoDB Connected... : ${conn.connection.host}'); // Log a message indicating the server has started
    } catch (error) { // Return an error if the server couldn't start
        console.error(`Error connecting to MongoDB: ${error.message}`); // Return an error if the server couldn't start
        process.exit(1); // Exit the process with an error code
};



}
// Export the app for testing

// Start the server
app.listen(3000, () => { // Start the server
    console.log('Server is started at http://localhost:3000 '); // Log a message indicating the server has started
    connectDB(); // Connect to MongoDB
});

export default app; // Export the app for testing