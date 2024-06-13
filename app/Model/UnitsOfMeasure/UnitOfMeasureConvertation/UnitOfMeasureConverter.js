/**
 * @file A subsystem for converting a value from one unit of measurement to another
 */

import {getMultiplierForUnitOfMeasureConvertion} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/UnitsOfMeasureConvertionMultipliers";

export class ConvertationNotImplementedException extends Error {}

/**
 * Converts a number from one unit of measure to another.
 * @param {number} value
 * @param {string} currentUnitOfMeasureId Identifier of current unit of measure.
 * @param {string} targetUnitOfMeasureId Identifier of target unit of measure.
 * @throws ConvertationNotImplementedException
 * @returns {number}
 */
export function ConvertValueToAnotherUnitOfMeasure(value,
                                                   currentUnitOfMeasureId,
                                                   targetUnitOfMeasureId)
{
    let multiplier = getMultiplierForUnitOfMeasureConvertion
    (
        currentUnitOfMeasureId,
        targetUnitOfMeasureId
    );
    if (multiplier === undefined)
        throw new ConvertationNotImplementedException();
    return value * multiplier;
}
