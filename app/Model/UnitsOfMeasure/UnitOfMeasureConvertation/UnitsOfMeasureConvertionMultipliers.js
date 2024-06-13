/**
 * @file A subsystem for getting a multiplier for converting one unit of measure to another.
 */
import {
    UNIT_OF_MEASURE_CNAME_ACRE, UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE, UNIT_OF_MEASURE_CNAME_ANGLE_SECOND,
    UNIT_OF_MEASURE_CNAME_ANGSTROM,
    UNIT_OF_MEASURE_CNAME_ASTRONOMICAL_UNIT, UNIT_OF_MEASURE_CNAME_BAR,
    UNIT_OF_MEASURE_CNAME_BIT,
    UNIT_OF_MEASURE_CNAME_BYTE,
    UNIT_OF_MEASURE_CNAME_CENTILITER,
    UNIT_OF_MEASURE_CNAME_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_CUBIC_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_CUBIC_METER,
    UNIT_OF_MEASURE_CNAME_CUBIC_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_DAY,
    UNIT_OF_MEASURE_CNAME_DECILITER, UNIT_OF_MEASURE_CNAME_DEGREE,
    UNIT_OF_MEASURE_CNAME_DRAM,
    UNIT_OF_MEASURE_CNAME_FATHOM,
    UNIT_OF_MEASURE_CNAME_FOOT,
    UNIT_OF_MEASURE_CNAME_GIBIBYTE,
    UNIT_OF_MEASURE_CNAME_GIGABYTE,
    UNIT_OF_MEASURE_CNAME_GRAIN,
    UNIT_OF_MEASURE_CNAME_GRAM,
    UNIT_OF_MEASURE_CNAME_HECTARE,
    UNIT_OF_MEASURE_CNAME_HOUR,
    UNIT_OF_MEASURE_CNAME_INCH,
    UNIT_OF_MEASURE_CNAME_KIBIBYTE,
    UNIT_OF_MEASURE_CNAME_KILOBYTE,
    UNIT_OF_MEASURE_CNAME_KILOGRAM,
    UNIT_OF_MEASURE_CNAME_KILOMETER,
    UNIT_OF_MEASURE_CNAME_LIGHT_YEAR,
    UNIT_OF_MEASURE_CNAME_LITER,
    UNIT_OF_MEASURE_CNAME_LONG_TON,
    UNIT_OF_MEASURE_CNAME_MEBIBYTE,
    UNIT_OF_MEASURE_CNAME_MEGABYTE,
    UNIT_OF_MEASURE_CNAME_METER,
    UNIT_OF_MEASURE_CNAME_MICROGRAM,
    UNIT_OF_MEASURE_CNAME_MICROMETER,
    UNIT_OF_MEASURE_CNAME_MICROSECOND,
    UNIT_OF_MEASURE_CNAME_MILE,
    UNIT_OF_MEASURE_CNAME_MILLIGRAM,
    UNIT_OF_MEASURE_CNAME_MILLILITER,
    UNIT_OF_MEASURE_CNAME_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_MILLISECOND,
    UNIT_OF_MEASURE_CNAME_MINUTE,
    UNIT_OF_MEASURE_CNAME_MONTH,
    UNIT_OF_MEASURE_CNAME_NANOMETER,
    UNIT_OF_MEASURE_CNAME_NANOSECOND,
    UNIT_OF_MEASURE_CNAME_NAUTICAL_MILE,
    UNIT_OF_MEASURE_CNAME_OUNCE,
    UNIT_OF_MEASURE_CNAME_PARSEC, UNIT_OF_MEASURE_CNAME_PASCAL,
    UNIT_OF_MEASURE_CNAME_PEBIBYTE,
    UNIT_OF_MEASURE_CNAME_PETABYTE,
    UNIT_OF_MEASURE_CNAME_POUND, UNIT_OF_MEASURE_CNAME_RADIAN,
    UNIT_OF_MEASURE_CNAME_SECOND,
    UNIT_OF_MEASURE_CNAME_SHORT_TON,
    UNIT_OF_MEASURE_CNAME_SQUARE_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_FOOT,
    UNIT_OF_MEASURE_CNAME_SQUARE_INCH,
    UNIT_OF_MEASURE_CNAME_SQUARE_KILOMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_METER,
    UNIT_OF_MEASURE_CNAME_SQUARE_MILE,
    UNIT_OF_MEASURE_CNAME_SQUARE_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_YARD, UNIT_OF_MEASURE_CNAME_STANDART_ATMOSPHERE,
    UNIT_OF_MEASURE_CNAME_STONE,
    UNIT_OF_MEASURE_CNAME_TEBIBYTE,
    UNIT_OF_MEASURE_CNAME_TERABYTE,
    UNIT_OF_MEASURE_CNAME_TONNE, UNIT_OF_MEASURE_CNAME_TORR,
    UNIT_OF_MEASURE_CNAME_WEEK,
    UNIT_OF_MEASURE_CNAME_YARD,
    UNIT_OF_MEASURE_CNAME_YEAR
} from "~/Model/UnitsOfMeasure/UnitsOfMeasureIdentifiers";
import {getFileAccess} from "@nativescript/core";

let unitsOfMeasureConvertionMultipliers = new Map();

/**
 * Returns multiplier for converting a value from one unit of measure to another.
 * If convertation not implemented then returns undefined.
 * @param {string} currentUnitOfMeasureId Id of current unit of measure.
 * @param {string} targetUnitOfMeasureId Id of target unit of measure.
 * @returns {number|undefined}
 */
export
function getMultiplierForUnitOfMeasureConvertion(currentUnitOfMeasureId,
                                                 targetUnitOfMeasureId)
{
    let convertionName = currentUnitOfMeasureId + '/' + targetUnitOfMeasureId;
    return unitsOfMeasureConvertionMultipliers.get(convertionName);
}

function addConvertionMultipliersForMeasureUnit(measureUnitsIds,
                                                multipliers,
                                                elementIndex)
{
    let multiplier = 1;
    let convertionName = '';
    for (let i = 0; i < measureUnitsIds.length; i++)
    {
        convertionName = measureUnitsIds[elementIndex] + '/' +
                         measureUnitsIds[i];
        multiplier = multipliers[i] / multipliers[elementIndex];
        unitsOfMeasureConvertionMultipliers.set(convertionName, multiplier);
    }
}

function addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers)
{
    for (let i = 0; i < measureUnitsIds.length; i++)
        addConvertionMultipliersForMeasureUnit(measureUnitsIds, multipliers, i);
}


function addMultipliersForTimeUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_YEAR,
        UNIT_OF_MEASURE_CNAME_MONTH,
        UNIT_OF_MEASURE_CNAME_WEEK,
        UNIT_OF_MEASURE_CNAME_DAY,
        UNIT_OF_MEASURE_CNAME_HOUR,
        UNIT_OF_MEASURE_CNAME_MINUTE,
        UNIT_OF_MEASURE_CNAME_SECOND,
        UNIT_OF_MEASURE_CNAME_MILLISECOND,
        UNIT_OF_MEASURE_CNAME_MICROSECOND,
        UNIT_OF_MEASURE_CNAME_NANOSECOND
    ];
    let multipliers =
    [
        1,                  //year
        12,                 //month
        1 / (52 + 1/7),     //week
        365,                //day
        8760,               //hour
        525600,             //minute
        31536000,           //second
        31536000000,        //millisecond
        31536000000000,     //microsecond
        31536000000000000,  //nanosecond
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForLengthUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_PARSEC,
        UNIT_OF_MEASURE_CNAME_LIGHT_YEAR,
        UNIT_OF_MEASURE_CNAME_ASTRONOMICAL_UNIT,
        UNIT_OF_MEASURE_CNAME_NAUTICAL_MILE,
        UNIT_OF_MEASURE_CNAME_MILE,
        UNIT_OF_MEASURE_CNAME_KILOMETER,
        UNIT_OF_MEASURE_CNAME_FATHOM,
        UNIT_OF_MEASURE_CNAME_METER,
        UNIT_OF_MEASURE_CNAME_YARD,
        UNIT_OF_MEASURE_CNAME_FOOT,
        UNIT_OF_MEASURE_CNAME_INCH,
        UNIT_OF_MEASURE_CNAME_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_MILLIMETER,
        UNIT_OF_MEASURE_CNAME_MICROMETER,
        UNIT_OF_MEASURE_CNAME_NANOMETER,
        UNIT_OF_MEASURE_CNAME_ANGSTROM
    ];
    let multipliers =
    [
        1,                          //parsec
        3.2615637769,               //light year
        206264.80625,               //astronomical unit
        16661326032829,             //nautical mile
        19173473228376,             //mile
        30856775812800,             //kilometer
        16872690186351360,          //fathom
        30856775812799588,          //meter
        33745380372702720,          //yard
        101235938645825620,         //foot
        1214833693417291800,        //inch
        3085677581279958500,        //centimeter
        30856775812799586000,       //millimeter
        30856775812799586000000,    //micrometer
        30856775812799586000000000, //nanometer
        308567758127995860000000000,//angstrom
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForAreaUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_SQUARE_MILE,
        UNIT_OF_MEASURE_CNAME_SQUARE_KILOMETER,
        UNIT_OF_MEASURE_CNAME_HECTARE,
        UNIT_OF_MEASURE_CNAME_ACRE,
        UNIT_OF_MEASURE_CNAME_SQUARE_METER,
        UNIT_OF_MEASURE_CNAME_SQUARE_YARD,
        UNIT_OF_MEASURE_CNAME_SQUARE_FOOT,
        UNIT_OF_MEASURE_CNAME_SQUARE_INCH,
        UNIT_OF_MEASURE_CNAME_SQUARE_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_SQUARE_MILLIMETER
    ];
    let multipliers =
    [
        1,                              //square mile
        2.58999,                        //square kilometer
        258.99881,                      //hectare
        640,                            //acre
        2589988.11034,                  //square meter
        3097600,                        //square yard
        27878400,                       //square foot
        4014489600,                     //square inch
        2589988.11034 * 10000,          //square centimeter
        2589988.11034 * 10000000,       //square millimeter
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForWeightUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_LONG_TON,
        UNIT_OF_MEASURE_CNAME_TONNE,
        UNIT_OF_MEASURE_CNAME_SHORT_TON,
        UNIT_OF_MEASURE_CNAME_STONE,
        UNIT_OF_MEASURE_CNAME_KILOGRAM,
        UNIT_OF_MEASURE_CNAME_POUND,
        UNIT_OF_MEASURE_CNAME_OUNCE,
        UNIT_OF_MEASURE_CNAME_DRAM,
        UNIT_OF_MEASURE_CNAME_GRAM,
        UNIT_OF_MEASURE_CNAME_GRAIN,
        UNIT_OF_MEASURE_CNAME_MILLIGRAM,
        UNIT_OF_MEASURE_CNAME_MICROGRAM
    ];
    let multipliers =
    [
        1,                      //long ton
        1.01605,                //tone
        1.12,                   //short ton
        160,                    //stone
        1016.0469088,           //kilogram
        2240,                   //pound
        35840,                  //ounce
        573440,                 //dram
        1016046.9088,           //gram
        15680000,               //grain
        1016046908.8,           //milligram
        1016046908800,          //microgram
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForVolumeUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_CUBIC_METER,
        UNIT_OF_MEASURE_CNAME_CUBIC_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_CUBIC_MILLIMETER,
        UNIT_OF_MEASURE_CNAME_LITER,
        UNIT_OF_MEASURE_CNAME_CENTILITER,
        UNIT_OF_MEASURE_CNAME_DECILITER,
        UNIT_OF_MEASURE_CNAME_MILLILITER
    ];
    let multipliers =
    [
        1,              //cubic meter
        1000000,        //cubic centimeter
        1000000000,     //cubic millimeter
        1000,           //liter
        100000,         //centiliter
        10000,          //deciliter
        1000000,        //milliliter
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForStorageUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_PEBIBYTE,
        UNIT_OF_MEASURE_CNAME_PETABYTE,
        UNIT_OF_MEASURE_CNAME_TEBIBYTE,
        UNIT_OF_MEASURE_CNAME_TERABYTE,
        UNIT_OF_MEASURE_CNAME_GIBIBYTE,
        UNIT_OF_MEASURE_CNAME_GIGABYTE,
        UNIT_OF_MEASURE_CNAME_MEBIBYTE,
        UNIT_OF_MEASURE_CNAME_MEGABYTE,
        UNIT_OF_MEASURE_CNAME_KIBIBYTE,
        UNIT_OF_MEASURE_CNAME_KILOBYTE,
        UNIT_OF_MEASURE_CNAME_BYTE,
        UNIT_OF_MEASURE_CNAME_BIT
    ];
    let multipliers =
    [
        1,                          //pebibyte
        1.1258999068426,            //petabyte
        1024,                       //tebibyte
        1125.8999068426,            //terabyte
        1048576,                    //gibibyte
        1048576 * 1.073741824,      //gigabyte
        1073741824,                 //mebibyte
        1073741824 * 1.048576,      //megabyte
        1099511627776,              //kibibyte
        1099511627776 * 1.024,      //kilobyte
        1125899906842624,           //byte
        1125899906842624 * 8        //bit
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForAngleUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_RADIAN,
        UNIT_OF_MEASURE_CNAME_DEGREE,
        UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE,
        UNIT_OF_MEASURE_CNAME_ANGLE_SECOND
    ];
    let multipliers =
    [
        1,                          //radian
        180 / Math.PI,              //degree
        180 / Math.PI * 60,         //minute
        180 / Math.PI * 3600,       //second
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function addMultipliersForPressureUnitsOfMeasure()
{
    let measureUnitsIds =
    [
        UNIT_OF_MEASURE_CNAME_STANDART_ATMOSPHERE,
        UNIT_OF_MEASURE_CNAME_BAR,
        UNIT_OF_MEASURE_CNAME_PASCAL,
        UNIT_OF_MEASURE_CNAME_TORR
    ];
    let multipliers =
    [
        1,                  //standart atmosphere
        1.01325,            //bar
        101325,             //pascal
        760                 //torr
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsIds, multipliers);
}

function InitUnitOfMeasureConvertionMultipliers()
{
    addMultipliersForLengthUnitsOfMeasure();
    addMultipliersForAreaUnitsOfMeasure();
    addMultipliersForWeightUnitsOfMeasure();
    addMultipliersForVolumeUnitsOfMeasure()
    addMultipliersForTimeUnitsOfMeasure();
    addMultipliersForAngleUnitsOfMeasure();
    addMultipliersForStorageUnitsOfMeasure();
    addMultipliersForPressureUnitsOfMeasure();
}

InitUnitOfMeasureConvertionMultipliers();
