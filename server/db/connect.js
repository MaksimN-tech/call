const {connect, connection} = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

connect(`mongodb://localhost:27017/call`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})


module.exports = connection;
