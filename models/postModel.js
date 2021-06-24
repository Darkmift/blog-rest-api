const mongoose = require("mongoose");
const Joi = require("joi");
const userModel = require("../models/userModel");

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    create_date: {
        type: Date, default: Date.now()
    },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }
});

exports.PostModel = mongoose.model("posts", postSchema);

exports.validPost = (_dataBody) => {
    let joiSchema = Joi.object({
        title: Joi.string().min(2).max(99).required(),
        body: Joi.string().min(2).max(500).required(),
        author_id: Joi.string()
    })

    return joiSchema.validate(_dataBody)
};


// מייצר מספר רנדומלי ובודק שלא קיים ולא שייך לעסק אחר בקולקשן
// exports.genPostNumber = async (_postModel) => {
//     while (true) {
//         let randomNum = random(1, 999999);
//         let post = await this.PostModel.findOne({ business_numbe: randomNum });
//         if (!post) {
//             return randomNum;
//         }
//     }
// };

// exports.genPostnumber = async()