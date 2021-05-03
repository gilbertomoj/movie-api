if (process.env.NODE_ENV == "production") {
    module.exports = {
        mongoURI : "mongodb+srv://ggibamede:ggibamede123@cluster0.t9w8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
} else {
    module.exports = {
        mongoURI : "mongodb+srv://ggibamede:ggibamede123@cluster0.t9w8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
}