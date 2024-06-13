import {Dialogs, Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {getUnitOfMeasureName} from "~/Model/UnitsOfMeasure/UnitsOfMeasureNames";
import {
    ElementIsNotInListPickerException,
    ListPickerGetAllElements, ListPickerNotInitiliasedException,
    ListPickerSetFirstSelectedElement, ListPickerSetSecondSelectedElement
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";

const viewModel = new Observable();

function gotoHomePage()
{
    Frame.topmost().navigate({
        moduleName: '/View/home',
        clearHistory: true
    });
}

function DisplayErrorMessage(message)
{
    Dialogs.alert({
        title: 'Ошибка',
        message: message,
        okButtonText: 'Ок',
        cancelable: true
    });
}

function chooseUnitOfMeasure(args)
{
    let selectedUnitOfMeasureId = args.object.items[args.index].unitOfMeasureIdentifier;
    try
    {
        if (viewModel.get('isChangingCurrentUnitOfMeasure'))
            ListPickerSetFirstSelectedElement(selectedUnitOfMeasureId);
        else
            ListPickerSetSecondSelectedElement(selectedUnitOfMeasureId);
    }
    catch (e)
    {
        if (e instanceof ListPickerNotInitiliasedException)
            gotoHomePage();
        if (e instanceof ElementIsNotInListPickerException)
            DisplayErrorMessage('Извините. Единицы измерения, которую вы выбрали, в приложении нет.');
    }
    Frame.goBack();
}

function getUnitsOfMeasure()
{
    let result = [];
    let unitOfMeasureIdentifiers = ListPickerGetAllElements();
    for (let id of unitOfMeasureIdentifiers)
    {
        let name = getUnitOfMeasureName(id);
        result.push({
            unitOfMeasureIdentifier: id,
            unitOfMeasureName: name
        });
    }
    return result;
}

export function createViewModel(context)
{
    viewModel.isChangingCurrentUnitOfMeasure = context.isChangingCurrentUnitOfMeasure;
    viewModel.goBack = Frame.goBack;
    viewModel.chooseUnitOfMeasure = chooseUnitOfMeasure;
    viewModel.unitsOfMeasure = getUnitsOfMeasure();
    return viewModel;
}
