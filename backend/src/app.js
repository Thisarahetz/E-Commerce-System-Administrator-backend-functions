const express = require('express');
const App = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


/Accesp JSON/
App.use(express.json());

const productRouter = require("./routes/product.router");
const categoryRouter = require("./routes/category.router");

const cors = require('cors');
//Enable CORE
App.use(cors());
dotenv.config();

App.use("/api/product", productRouter);
App.use("/api/category", categoryRouter);

const PORT = process.env.PORT;

App.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
/*  
connect mongoose server
*/
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB Connection Successfull!!!!"))
    .catch((err) => console.log(err));