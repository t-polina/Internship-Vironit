const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true
});