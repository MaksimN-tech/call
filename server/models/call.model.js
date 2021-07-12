const {Schema, pluralize, model} = require('mongoose');
pluralize(null);


const callSchema = Schema({
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  call_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "ok"
  },
})


const Call = model('call', callSchema);

module.exports = Call;

