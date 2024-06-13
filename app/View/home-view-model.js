import { Observable } from '@nativescript/core'
import {Frame} from "@nativescript/core";
import {
    getIdentifiersOfAngleUnitsOfMeasure,
    getIdentifiersOfAreaUnitsOfMeasure,
    getIdentifiersOfLengthUnitsOfMeasure,
    getIdentifiersOfPressureUnitsOfMeasure,
    getIdentifiersOfStorageUnitsOfMeasure, getIdentifiersOfTimeUnitsOfMeasure,
    getIdentifiersOfVolumeUnitsOfMeasure, getIdentifiersOfWeightUnitsOfMeasure
} from "~/Model/UnitsOfMeasure/UnitsOfMeasureGroups";
import {ListPickerSetElements} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";

const CONVERTATION_PAGE_PATH = '/View/UnitOfMeasureConvertation/convertation';

function navigateToConvertationPage(convertationTitle)
{
    Frame.topmost().navigate({
        moduleName: CONVERTATION_PAGE_PATH,
        context: {
            convertationTitle: convertationTitle
        }
    })
}

function openConvertationForLengthUnitsOfMeasure()
{
    let ids = getIdentifiersOfLengthUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Длина');
}

function openConvertationForAreaUnitsOfMeasure()
{
    let ids = getIdentifiersOfAreaUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Площадь');
}

function openConvertationForVolumeUnitsOfMeasure()
{
    let ids = getIdentifiersOfVolumeUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Объём');
}

function openConvertationForAngleUnitsOfMeasure()
{
    let ids = getIdentifiersOfAngleUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Углы');
}

function openConvertationForStorageUnitsOfMeasure()
{
    let ids = getIdentifiersOfStorageUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Информация');
}

function openConvertationForPressureUnitsOfMeasure()
{
    let ids = getIdentifiersOfPressureUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Давление');
}

function openConvertationForTimeUnitsOfMeasure()
{
    let ids = getIdentifiersOfTimeUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Время');
}

function openConvertationForWeightUnitsOfMeasure()
{
    let ids = getIdentifiersOfWeightUnitsOfMeasure();
    ListPickerSetElements(ids);
    navigateToConvertationPage('Вес');
}

export function createViewModel()
{
    let viewModel = new Observable();
    viewModel.openConvertationForLengthUnitsOfMeasure = openConvertationForLengthUnitsOfMeasure;
    viewModel.openConvertationForAreaUnitsOfMeasure = openConvertationForAreaUnitsOfMeasure;
    viewModel.openConvertationForVolumeUnitsOfMeasure = openConvertationForVolumeUnitsOfMeasure;
    viewModel.openConvertationForAngleUnitsOfMeasure = openConvertationForAngleUnitsOfMeasure;
    viewModel.openConvertationForStorageUnitsOfMeasure = openConvertationForStorageUnitsOfMeasure;
    viewModel.openConvertationForPressureUnitsOfMeasure = openConvertationForPressureUnitsOfMeasure;
    viewModel.openConvertationForTimeUnitsOfMeasure = openConvertationForTimeUnitsOfMeasure;
    viewModel.openConvertationForWeightUnitsOfMeasure = openConvertationForWeightUnitsOfMeasure;
    return viewModel;
}
