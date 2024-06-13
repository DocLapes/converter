import {Dialogs, Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {
    userInputStorageAddSymbol, userInputStorageClearInput, userInputStorageRemoveLastSymbol,
    userInputStorageGenerateNumberFromInput,
    userInputStorageGetRawInput, StringGivenButCharExpectedException, GivenSymbolCannotBeContainedInNumberException
} from "~/Model/UserInputStorage";
import {
    ElementIsNotInListPickerException,
    ListPickerGetFirstSelectedElement,
    ListPickerGetSecondSelectedElement,
    ListPickerNotInitiliasedException,
    ListPickerSetFirstSelectedElement,
    ListPickerSetSecondSelectedElement
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";
import {getUnitOfMeasureName} from "~/Model/UnitsOfMeasure/UnitsOfMeasureNames";
import {
    ConvertationNotImplementedException,
    ConvertValueToAnotherUnitOfMeasure
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/UnitOfMeasureConverter";

const viewModel = new Observable();
const CHOOSE_UNIT_OF_MEASURE_MODULE_PATH = '/View/UnitOfMeasureConvertation/ChooseUnitOfMeasure/ChooseUnitOfMeasure';

function DisplayErrorMessage(message)
{
    Dialogs.alert({
        title: 'Ошибка',
        message: message,
        okButtonText: 'Ок',
        cancelable: true
    });
}

function updateUnitsOfMeasureValues()
{
    let currentUnitOfMeasureId = ListPickerGetFirstSelectedElement();
    let targetUnitOfMeasureId = ListPickerGetSecondSelectedElement();
    let userRawInput = userInputStorageGetRawInput()
                            .replace('.', ',');
    let currentValue = userInputStorageGenerateNumberFromInput();
    let targetValue = 0;
    try
    {
        targetValue = ConvertValueToAnotherUnitOfMeasure(currentValue,
                                                                    currentUnitOfMeasureId,
                                                                    targetUnitOfMeasureId);
    }
    catch (e)
    {
        if (e instanceof ConvertationNotImplementedException)
            DisplayErrorMessage('Извините. Пока что данная конвертация не поддерживается приложением.');
        return;
    }
    viewModel.set('currentUnitOfMeasureValue', userRawInput);
    viewModel.set('targetUnitOfMeasureValue', targetValue);
}

function updateTypesOfUnitsOfMeasure()
{
    let id = ListPickerGetFirstSelectedElement();
    viewModel.set('currentUnitOfMeasureTypeName', getUnitOfMeasureName(id));
    id = ListPickerGetSecondSelectedElement();
    viewModel.set('targetUnitOfMeasureTypeName', getUnitOfMeasureName(id));
}

function addSymbolToUserInput(args)
{
    let number = args.object.text;
    try
    {
        userInputStorageAddSymbol(number);
    }
    catch (e)
    {
        if (e instanceof StringGivenButCharExpectedException)
            DisplayErrorMessage('Извините, программа принимает ввод только по одной цифре за раз.');
        if (e instanceof GivenSymbolCannotBeContainedInNumberException)
            DisplayErrorMessage('Извините, символ ' + e.givenSymbol + ' не может содержаться в числе.');
    }
    updateUnitsOfMeasureValues();
}

function clearUserInput()
{
    userInputStorageClearInput();
    updateUnitsOfMeasureValues();
}

function deleteLastInputOfUser()
{
    userInputStorageRemoveLastSymbol();
    updateUnitsOfMeasureValues();
}

function swapUnitsOfMeasureTypes()
{
    let currentUnitOfMeasureId = ListPickerGetFirstSelectedElement();
    let targetUnitOfMeasureId = ListPickerGetSecondSelectedElement();
    try
    {
        ListPickerSetFirstSelectedElement(targetUnitOfMeasureId);
        ListPickerSetSecondSelectedElement(currentUnitOfMeasureId);
    }
    catch (e)
    {
        if (e instanceof ListPickerNotInitiliasedException)
            gotoHomePage();
        if (e instanceof ElementIsNotInListPickerException)
            DisplayErrorMessage('Извините. Единицы измерения, которую вы хотите поменять местами, в приложении ещё нет.');
    }
    updateTypesOfUnitsOfMeasure();
    updateUnitsOfMeasureValues();
}

function chooseTargetUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: CHOOSE_UNIT_OF_MEASURE_MODULE_PATH,
        context: { isChangingCurrentUnitOfMeasure: false }
    });
}

function chooseCurrentUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: CHOOSE_UNIT_OF_MEASURE_MODULE_PATH,
        context: { isChangingCurrentUnitOfMeasure: true }
    });
}

function gotoHomePage()
{
   Frame.topmost().navigate({
       moduleName: '/View/home',
       clearHistory: true
   });
}

export function createViewModel(context)
{
    viewModel.title = context.convertationTitle;
    viewModel.gotoHomePage = gotoHomePage;
    viewModel.addSymbolToUserInput = addSymbolToUserInput;
    viewModel.clearUserInput = clearUserInput;
    viewModel.deleteLastInputOfUser = deleteLastInputOfUser;
    viewModel.swapUnitsOfMeasureTypes = swapUnitsOfMeasureTypes;
    viewModel.chooseCurrentUnitOfMeasure = chooseCurrentUnitOfMeasure;
    viewModel.chooseTargetUnitOfMeasure = chooseTargetUnitOfMeasure;
    updateUnitsOfMeasureValues();
    updateTypesOfUnitsOfMeasure();
    return viewModel;
}
