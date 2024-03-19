const express = require('express');
const router = express.Router();
const carTypes = require('../models/car_types');
const carMakes = require('../models/car_makes')
const cars = require('../models/cars');


//GET all Car Types
router.get('/carTypes', (req, res) => {
    carTypes.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//GET all Car Makes
router.get('/carMakes', (req, res) => {
    carMakes.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//GET all Cars
router.get('/cars', (req, res) => {
    cars.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//GET Car by ID
router.get('/cars/:carId', function (req, res) {
    let carId = parseInt(req.params.carId);
    //    console.log('hello world');
    //    console.log(carId);
    cars.findByPk(carId)
        .then(function (result) {
            res.send(result);
        })
        .catch(function (err) {
            console.log(err);
        })
});

//GET Car by Make
//router.get('/carMakes/:searchMake', async (req, res) => {
//
//    try {
//        const searchMake = req.params.searchMake;
//        const cars = await carMakes.findAll({
//          where: {
//            make: searchMake,
//          },
//        });
//    
//        res.json(cars);
//
//     } catch (error) {
//        console.error(error);
//        res.status(500).json({ error: 'Internal Server Error' });
//      }
//    });

//GET Car by Year
//router.get('/carMakes/:searchYear', async (req, res) => {
//
//    try {
//        const searchYear = req.params.searchYear;
//        const cars = await carMakes.findAll({
//            where: {
//               year: searchYear,
//            },
//        });
//
//        res.json(cars);
//
//    } catch (error) {
//        console.error(error);
//        res.status(500).json({ error: 'Internal Server Error' });
//    }
//});

//GET Car by Brand
// router.get('/carMakes/:searchBrand', async (req, res) => {

//     try {
//         const searchBrand = req.params.searchBrand;
//         const cars = await carMakes.findAll({
//             where: {
//                 brand: searchBrand,
//             },
//         });
//
//         res.json(cars);
//
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

//GET Car by Type
router.get('/carTypes/:searchType', async (req, res) => {

    try {
        const searchType = req.params.searchType;
        const cars = await carTypes.findAll({
            where: {
                build: searchType,
            },
        });

        res.json(cars);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;