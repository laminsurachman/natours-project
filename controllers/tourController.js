/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */

// eslint-disable-next-line no-unused-vars
const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};
exports.getTour = (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};
exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    //       data: {
    //         tour: newTour,
    //       },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: null,
  });
};
