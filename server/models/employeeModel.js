import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    empID:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    DOJ:{
        type:Date,
        require:true
    },
    position:{
        type:String,
        require:true
    }
});
export default mongoose.model("employee",employeeSchema);
