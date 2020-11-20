const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Haremos un modelo que contenga email, password y dos timestamps: createdAt y updatedAt
const userSchema= new Schema(
    {
        image:{type:String, default:"https://img.blogs.es/anexom/wp-content/uploads/2020/06/pestana-de-incognito-navegacion-oculta.jpg"},
        username: {type: String},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        game: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
        cards:[{ type: Schema.Types.ObjectId, ref: 'CustomCard' }]
    },
    {
        timestamps:{
            createdAt: "created_at",
            updatedAt: "updated_at", 
        },
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;
