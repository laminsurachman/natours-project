/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
const express = require('express');
// eslint-disable-next-line import/no-useless-path-segments
const tourController = require('./../controllers/tourController.js');
const router = express.Router();

// router.param('id', tourController.checkID);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
