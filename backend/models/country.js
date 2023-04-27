const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    import_value:{
        type:String,
        required:false,
        default:0
    },
    export_value:{
        type:String,
        required:false,
        default:0
    },
    full_date:{
        type:String,
        required:false,
        default:"00/00/0000"
    },
    month:{
        type:String,
        required:false,
        default:"00"
    },
    year:{
        type:String,
        required:false,
        default:"0000"
    },
    day:{
        type:String,
        required:false,
        default:"00"
    }

})

module.exports = mongoose.model('country',countrySchema);
