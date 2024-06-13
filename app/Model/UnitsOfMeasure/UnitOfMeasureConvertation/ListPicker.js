/**
 * @file A subsystem for storing a list of unique items and selecting two items from it.
 */

let set = undefined;
let firstSelectedElement = undefined;
let secondSelectedElement = undefined;

export class ListPickerNotInitiliasedException extends Error {}
export class ListPickerGivenNonUniqueItems extends Error
{
    items;
    constructor(items)
    {
        super('Given non unique items in ListPicker: ' + items);
        this.items = items;
    }
}
export class ElementIsNotInListPickerException extends Error
{
    element;
    listPickerContents;
    constructor(element, listPickerContents)
    {
        super('Element ' + element + ' is not in ListPicker ' + listPickerContents);
        this.element = element;
        this.listPickerContents = listPickerContents;
    }
}

/**
 * Sets the contents of the ListPicker.
 * @param {string[]} elementsIdentifiers Must be unique values
 * @throws ListPickerGivenNonUniqueItems
 * @return {void}
 */
export function ListPickerSetElements(elementsIdentifiers)
{
    if (elementsIdentifiers.length === 0)
        return;
    set = new Set(elementsIdentifiers);
    if (set.size !== elementsIdentifiers.length)
        throw new ListPickerGivenNonUniqueItems(elementsIdentifiers);
    firstSelectedElement = elementsIdentifiers[0];
    secondSelectedElement = elementsIdentifiers[0];
}

/**
 * Sets first selected item of the ListPicker.
 * @param {string} elementIdentifier
 * @throws ListPickerNotInitiliasedException
 * @throws ElementIsNotInListPickerException
 * @return {void}
 */
export function ListPickerSetFirstSelectedElement(elementIdentifier)
{
    if (set === undefined)
        throw new ListPickerNotInitiliasedException();
    if (!set.has(elementIdentifier))
        throw new ElementIsNotInListPickerException(elementIdentifier, [...set]);
    firstSelectedElement = elementIdentifier;
}

/**
 * Sets second selected item of the ListPicker.
 * @param {string} elementIdentifier
 * @throws ListPickerNotInitiliasedException
 * @throws ElementIsNotInListPickerException
 * @return {void}
 */
export function ListPickerSetSecondSelectedElement(elementIdentifier)
{
    if (set === undefined)
        throw new ListPickerNotInitiliasedException();
    if (!set.has(elementIdentifier))
        throw new ElementIsNotInListPickerException(elementIdentifier, [...set]);
    secondSelectedElement = elementIdentifier;
}

/**
 * Returns first selected item of the ListPicker.
 * If ListPicker is not initialised then returns undefined.
 * @return {string|undefined}
 */
export function ListPickerGetFirstSelectedElement()
{
    return firstSelectedElement;
}

/**
 * Returns second selected item of the ListPicker.
 * If ListPicker is not initialised then returns undefined.
 * @return {string|undefined}
 */
export function ListPickerGetSecondSelectedElement()
{
    return secondSelectedElement;
}

/**
 * Returns all non-selected items of the ListPicker.
 * @return {string[]}
 */
export function ListPickerGetNonSelectedElements()
{
    if (set === undefined)
        return [];
    set.delete(firstSelectedElement);
    set.delete(secondSelectedElement);
    let result = [...set];
    set.add(firstSelectedElement);
    set.add(secondSelectedElement);
    return result;
}

/**
 * Returns all items of the ListPicker
 * @return {string[]}
 */
export function ListPickerGetAllElements()
{
    if (set === undefined)
        return [];
    return [...set];
}
