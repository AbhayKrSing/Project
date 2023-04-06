const mongoose=require('mongoose')
mongoose.set('runValidators',true)
mongoose.set('strictQuery',true)
const connect=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Builder').then(()=>{
    console.log('Connected')
    }).
    catch(error => handleError(error));
}

module.exports=connect