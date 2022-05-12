const optionSetToLookupEntity = (globalDefinition: any): any[] => globalDefinition.Options.map(
    (option: any) => ({
            key: option.Value,
            value: option.Label.UserLocalizedLabel.Label
        })
    );

const displayFormattedValue = (obj: any, key: string) => {
    let _key = key + "@OData.Community.Display.V1.FormattedValue";
    return obj && obj.hasOwnProperty(_key) && obj[_key] || "";
}

export {
    optionSetToLookupEntity,
    displayFormattedValue
};