const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
mongoose.connect(URI, { useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(" DB conneted.................");
})