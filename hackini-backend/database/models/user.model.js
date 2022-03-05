const mongoose = require("mongoose"),
    bcrypt = require("bcrypt"),

    userSchema = new mongoose.Schema({
        mail : {
            type : String,
            required : true,
            unique : true
        },
        userName : {
            type : String,
            required : true,
        },

        password : {
            type : String,
            required : true
        },

        Hobbies : [{
            type : String,
        }]
    })

    userSchema.pre('save', async function (next){
        try{
            if(this.isNew)
                this.password = await bcrypt.hash(this.password, 10)
            next()
        }catch(err){
            next(err)
        }
    })

    userSchema.methods.comparePasswords = async function(password, next){
        try{
            return await bcrypt.compare(password, this.password)
        }catch(e){
            console.log(`error in comparing passwords !!! ${e}`);
            next(e)
        }

    }

    userSchema.statics = {
        create : function(data, callback){
            try{
                var user = new this(data)
                user.save(callback)
            }catch(e){
                console.log("could not create a user in user.model !!!\nERROR :")
                console.error(e);
            }
        },

        get : async function(data, callback){
            try{
                await this.find(data).populate("meets")
                .exec(callback)
            }catch(e){
                console.log("could not get a user in user.model !!!\nEROOR :");
                console.error(e);
            }
        },

        update : async function(data, newData, callback){
            try{
                await this.findOneAndUpdate(data, {$set : newData},{new : true, omitUndefined : true}, callback)
            }catch(e){
                console.log("could not update the user in user.model !!!\n ERROR : ");
                console.error(e);
            }
        },

        delete : async function(data, callback){
            try{
                await this.deleteOne(data, callback)
            }catch(e){
                console.log("could not delete the user in user.model !!!\n ERROR : ");
                console.error(e);
            }
        },

        
    }



    module.exports = mongoose.model('user', userSchema)