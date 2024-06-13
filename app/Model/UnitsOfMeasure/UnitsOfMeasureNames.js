/**
 * @file Subsystem for obtaining the name of a unit of measure by its identifier.
 */

import
{
    UNIT_OF_MEASURE_CNAME_ACRE,
    UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE, UNIT_OF_MEASURE_CNAME_ANGLE_SECOND,
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

let ruNames = new Map();

/**
 * Returns name of unit of measure by his identifier.
 * @param {string} unitOfMeasureIdentifier
 * @return {string|undefined}
 */
export function getUnitOfMeasureName(unitOfMeasureIdentifier)
{
    return ruNames.get(unitOfMeasureIdentifier);
}

function addRuNamesForTimeUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_YEAR, 'Годы');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MONTH, 'Месяцев');
    ruNames.set(UNIT_OF_MEASURE_CNAME_WEEK, 'Недель');
    ruNames.set(UNIT_OF_MEASURE_CNAME_DAY, 'Дней');
    ruNames.set(UNIT_OF_MEASURE_CNAME_HOUR, 'Часов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MINUTE, 'Минут');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SECOND, 'Секунд');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MILLISECOND, 'Миллисекунд');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MICROSECOND, 'Микросекунд');
    ruNames.set(UNIT_OF_MEASURE_CNAME_NANOSECOND, 'Наносекунд');
}

function addRuNamesForLengthUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_PARSEC, 'Парсек');
    ruNames.set(UNIT_OF_MEASURE_CNAME_LIGHT_YEAR, 'Световых лет');
    ruNames.set(UNIT_OF_MEASURE_CNAME_ASTRONOMICAL_UNIT, 'Астрономических единиц');
    ruNames.set(UNIT_OF_MEASURE_CNAME_NAUTICAL_MILE, 'Морских миль');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MILE, 'Миль');
    ruNames.set(UNIT_OF_MEASURE_CNAME_KILOMETER, 'Километров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_FATHOM, 'Fathom');
    ruNames.set(UNIT_OF_MEASURE_CNAME_METER, 'Метров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_YARD, 'Ярдов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_FOOT, 'Футов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_INCH, 'Инч');
    ruNames.set(UNIT_OF_MEASURE_CNAME_CENTIMETER, 'Сантиметров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MILLIMETER, 'Миллиметров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MICROMETER, 'Микрометров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_NANOMETER, 'Нанометров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_ANGSTROM, 'Ангстремов');
}

function addRuNamesForAreaUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_MILE, 'Квадратных миль');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_KILOMETER, 'Квадартных километров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_HECTARE, 'Гектаров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_ACRE, 'Акров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_METER, 'Квадратных метров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_YARD, 'Квадратных ярдов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_FOOT, 'Квадратных футов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_INCH, 'Квадратных инчей');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_CENTIMETER, 'Квадартных сантиметров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SQUARE_MILLIMETER, 'Квадратных миллиметров');
}

function addRuNamesForWeightUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_LONG_TON, 'Длинных тонн');
    ruNames.set(UNIT_OF_MEASURE_CNAME_TONNE, 'Тонн');
    ruNames.set(UNIT_OF_MEASURE_CNAME_SHORT_TON, 'Коротких тонн');
    ruNames.set(UNIT_OF_MEASURE_CNAME_STONE, 'Stone');
    ruNames.set(UNIT_OF_MEASURE_CNAME_KILOGRAM, 'Килограммов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_POUND, 'Фунтов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_OUNCE, 'Унций');
    ruNames.set(UNIT_OF_MEASURE_CNAME_DRAM, 'Dram');
    ruNames.set(UNIT_OF_MEASURE_CNAME_GRAM, 'Граммов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_GRAIN, 'Grain');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MILLIGRAM, 'Миллиграммов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MICROGRAM, 'Микрограммов');
}

function addRuNamesForVolumeUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_CUBIC_METER, 'Кубических метров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_CUBIC_CENTIMETER, 'Кубических сантиметров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_CUBIC_MILLIMETER, 'Кубических миллиметров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_LITER, 'Литров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_CENTILITER, 'Сантилитров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_DECILITER, 'Децилитров');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MILLILITER, 'Миллилитров');
}

function addRuNamesForStorageUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_PEBIBYTE, 'Пебибайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_PETABYTE, 'Петабайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_TEBIBYTE, 'Тебибайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_TERABYTE, 'Терабайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_GIBIBYTE, 'Гибибайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_GIGABYTE, 'Гигабайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MEBIBYTE, 'Мебибайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_MEGABYTE, 'Мегабайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_KIBIBYTE, 'Кибибайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_KILOBYTE, 'Килобайт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_BYTE, 'Байт');
    ruNames.set(UNIT_OF_MEASURE_CNAME_BIT, 'Бит');
}

function addRuNamesForAngleUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_RADIAN, 'Радиан');
    ruNames.set(UNIT_OF_MEASURE_CNAME_DEGREE, 'Градусов');
    ruNames.set(UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE, 'Угловых минут');
    ruNames.set(UNIT_OF_MEASURE_CNAME_ANGLE_SECOND, 'Угловых секунд');
}

function addRuNamesForPressureUnitsOfMeasure()
{
    ruNames.set(UNIT_OF_MEASURE_CNAME_STANDART_ATMOSPHERE, 'Атмосфер');
    ruNames.set(UNIT_OF_MEASURE_CNAME_BAR, 'Бар');
    ruNames.set(UNIT_OF_MEASURE_CNAME_PASCAL, 'Паскалей');
    ruNames.set(UNIT_OF_MEASURE_CNAME_TORR, 'Торр');
}

function InitRuNames()
{
    addRuNamesForPressureUnitsOfMeasure();
    addRuNamesForAngleUnitsOfMeasure();
    addRuNamesForTimeUnitsOfMeasure();
    addRuNamesForLengthUnitsOfMeasure()
    addRuNamesForAreaUnitsOfMeasure();
    addRuNamesForWeightUnitsOfMeasure();
    addRuNamesForVolumeUnitsOfMeasure();
    addRuNamesForStorageUnitsOfMeasure();
}

InitRuNames();
