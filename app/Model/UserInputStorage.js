/**
 * @file Subsystem for storing number inputed by user
 */

let rawInput = '';

/**
 * Returns user's input from which number will be generated.
 * @return {string}
 */
export function userInputStorageGetRawInput()
{
    return rawInput;
}

/**
 * Generates number from user's input.
 * @return {number}
 */
export function userInputStorageGenerateNumberFromInput()
{
    if (rawInput === '')
        return 0.0;
    return parseFloat(rawInput);
}

/**
 * Clears user's input from storage.
 * @return {void}
 */
export function userInputStorageClearInput()
{
     rawInput = '';
}

/**
 * Removes last symbol entered to storage.
 * @return {void}
 */
export function userInputStorageRemoveLastSymbol()
{
     rawInput =  rawInput.slice(0, -1);
}

function isDecimalDelimiter(chr)
{
    return (chr === '.') || (chr === ',');
}

function isDigit(chr)
{
    return (chr >= '0') && (chr <= '9');
}

function isExponent(chr)
{
    return (chr === 'e') || (chr === 'E');
}

function countDecimalDelimiters(str)
{
   let result = 0;
   for (let chr of str)
       if (isDecimalDelimiter(chr))
           result++;
   return result;
}

function countExponents(str)
{
    let result = 0;
    for (let chr of str)
        if (isExponent(chr))
            result++;
    return result;
}

function AppendExponentToInputsOfNumberGenerator()
{
    if (rawInput === '')
        return;
    if (countExponents(rawInput) === 0)
         rawInput += 'e';
}

function AppendDecimalDelimiterToInputsOfNumberGenerator()
{
    if (rawInput === '')
        return;
    if (countDecimalDelimiters(rawInput) === 0)
         rawInput += '.';
}

function AppendDigitToInputsOfNumberGenerator(chr)
{
    if ( rawInput !== '0')
         rawInput += chr;
}

export class GivenSymbolCannotBeContainedInNumberException extends Error
{
    givenSymbol;
    constructor(givenSymbol)
    {
        super("Can't add symbol" + givenSymbol +  " to number, because this part can't be contained in a number");
        this.givenSymbol = givenSymbol;
    }
}

export class StringGivenButCharExpectedException extends Error { }

/**
 * Adds new element to user's input storage.
 * @param {string} symbol
 * @throws StringGivenButCharExpectedException
 * @throws GivenSymbolCannotBeContainedInNumberException
 * @return {void}
 */
export function userInputStorageAddSymbol(symbol)
{
    if (symbol === '')
        return;
    if (symbol.length > 1)
        throw new StringGivenButCharExpectedException;
    if (isExponent(symbol))
    {
        AppendExponentToInputsOfNumberGenerator();
        return;
    }
    if (isDecimalDelimiter(symbol))
    {
        AppendDecimalDelimiterToInputsOfNumberGenerator();
        return;
    }
    if (isDigit(symbol))
    {
        AppendDigitToInputsOfNumberGenerator(symbol);
        return;
    }
    throw new GivenSymbolCannotBeContainedInNumberException;
}
