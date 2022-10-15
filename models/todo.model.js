const mongose = require('mongoose');
const Schema = mongose.Schema;

let TodoSchema = new Schema({
    todo: {type: String, required: true, max: 100},
    done: {type: Boolean, required: true}
    
})

module.exports = mongose.model('Todo', TodoSchema)