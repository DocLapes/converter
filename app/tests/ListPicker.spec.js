import
{
    ListPickerSetElements,
    ListPickerSetFirstSelectedElement,
    ListPickerGetFirstSelectedElement,
    ListPickerGetNonSelectedElements,
    ListPickerGetAllElements, ListPickerSetSecondSelectedElement
}
    from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";

describe('ListPicker stores all given elements.', testListPickerStoresAllGivenElements);
describe('ListPicker stores only unique items.', testListPickerStoresOnlyUniqueItems);
describe('ListPicker returns non-selected items correctly.', testListPickerReturnsNonSelectedItemsCorrectly);

function testListPickerStoresAllGivenElements()
{
    let list = [1, 2, 3, 4, 5, 'Hello'];
    it(list + ' must be stored in ListPicker ', function ()
    {
        ListPickerSetElements(list);
        expect(ListPickerGetAllElements()).toEqual(list);
    });
}

function testListPickerStoresOnlyUniqueItems()
{
    let list = [1, 2, 2, 3, 4, 5, 'Hello'];
    it(list + ' must throw an exception because ListPicker contains only unique items', function ()
    {
        expect(function() { ListPickerSetElements(list); }).toThrow();
    });
}

function testListPickerReturnsNonSelectedItemsCorrectly()
{
    let list = [1, 2, 3, 4, 5, 'Hello'];
    let selectedItem = list.at(-1);
    it('Selected item from list ' + list + ' must be ' + selectedItem, function ()
    {
        ListPickerSetElements(list);
        ListPickerSetFirstSelectedElement(selectedItem);
        ListPickerSetSecondSelectedElement(list[0]);
        expect(ListPickerGetNonSelectedElements()).toEqual(list.slice(1, -1));
    });
}
