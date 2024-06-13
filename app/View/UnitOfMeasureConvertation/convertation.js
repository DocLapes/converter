import { createViewModel } from "~/View/UnitOfMeasureConvertation/convertation-view-model";

export function onNavigatingTo(args)
{
    const page = args.object;
    page.bindingContext = createViewModel(page.navigationContext);
}
