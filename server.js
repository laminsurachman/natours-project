/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app.js');

// console.log(process.env);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: ['A Tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: ' Adventure Merbabu Mountain',
  rating: 5,
  price: 600,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  // eslint-disable-next-line no-unused-vars
  .catch((err) => {
    console.log('err');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
