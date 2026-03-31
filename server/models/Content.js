const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },
    org_text:{
        type:String,
        required:true
    },

    outputs: {
        twitter: { type: String },
        linkedin: { type: String },
        email: { type: String },
        videoScript: { type: String },
        blogSummary: { type: String }
      },

    platforms: [{ type: String }]
},{
    timestamps:true

})

module.exports = mongoose.model("Content", contentSchema);