const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Established connection to database"))
.catch(() => console.log("Failed to establish connection to database", err))