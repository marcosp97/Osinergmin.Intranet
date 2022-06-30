type FilterOperatorIO = (field: string, value: any, allow_empty?: boolean) => string;
type FilterAnyOperatorIO = (field: string, sub_field: string, value: any, allow_empty?: boolean) => string;
type FilterContainsChoiceOperatorIO = (field: string, value: any[], allow_empty?: boolean) => string;
type LogicalOperatorIO = (first: string, second: string) => string;
type NotLogicalOperatorIO = (logical: string) => string;
type QueryFunctionIO = (field: string, queryTo: string, allow_empty?: boolean) => string;

const Eq: FilterOperatorIO = (field: string, equalTo: any) => equalTo? `${field} eq ${Sanitaze(equalTo)}` : "";

const Ne: FilterOperatorIO = (field: string, NoEqualTo: any) => NoEqualTo? `${field} ne ${Sanitaze(NoEqualTo)}` : "";

const Gt: FilterOperatorIO = (field: string, greaterThan: any) => greaterThan? `${field} gt ${Sanitaze(greaterThan)}` : "";

const Ge: FilterOperatorIO = (field: string, greaterThanOrEqual: any) => greaterThanOrEqual? `${field} ge ${Sanitaze(greaterThanOrEqual)}` : "";

const Lt: FilterOperatorIO = (field: string, lessThan: any) => lessThan? `${field} lt ${Sanitaze(lessThan)}` : "";
    
const Le: FilterOperatorIO = (field: string, lessThanOrEqual: any) => lessThanOrEqual? `${field} le ${Sanitaze(lessThanOrEqual)}` : "";
    
    
const And: LogicalOperatorIO = (first, second) => LogicalOperator([(first || '').trim() , (second || '').trim()].filter(x => x.length > 0), "and");


const Or: LogicalOperatorIO = (first, second) => LogicalOperator([(first || '').trim() , (second || '').trim()].filter(x => x.length > 0), "or");

const Not: NotLogicalOperatorIO = (logical) => logical ? `not ${logical}` : "";

const Nullable: FilterOperatorIO = (field: string) => `${field} eq null`;

const En: FilterOperatorIO = (field: string) => `(${field} eq '' or ${field} eq null)`;
const Nen: FilterOperatorIO = (field: string) => `(${field} ne '' and ${field} ne null)`;
const NoNull: FilterOperatorIO = (field: string) => `${field} ne null`;
    
const Contains: FilterOperatorIO = (field: string, containsTo: string, allow_empty = false) => {
    if(containsTo) return `contains(${field},${Sanitaze(containsTo)})`;
    else if(allow_empty) return `(${field} eq '' or ${field} eq null)`;
    return "";
}

const StartsWith: QueryFunctionIO = (field, startsWith, allow_empty = false) => {
    if(startsWith) return `startswith(${field}, ${Sanitaze(startsWith)})`;
    else if(allow_empty) return `(${field} eq '' or ${field} eq null)`;
    return "";
} 

const EndsWith: QueryFunctionIO = (field, endsWith, allow_empty = false) => {
    if(endsWith) return `endswith(${field}, ${Sanitaze(endsWith)})`;
    else if(allow_empty) return `(${field} eq '' or ${field} eq null)`;
    return "";
} 

const ContainsChoices: FilterContainsChoiceOperatorIO = (field: string, containsTo: string[], allow_empty = false) => {
    if(containsTo) return `Microsoft.Dynamics.CRM.ContainValues(PropertyName='${field}',PropertyValues=[${containsTo.map(x => Sanitaze(x?.toString())).join(",")}])`;
    else if(allow_empty) return `(${field} eq '' or ${field} eq null)`;
    return "";
}

    
const any: FilterAnyOperatorIO = (field: string, sub_field: string, containsTo: string, allow_empty = false) => {
    if(containsTo) return `${field}/any(o:contains(o/${sub_field},${Sanitaze(containsTo)}))`;
    else if(allow_empty) return `(${field} eq '' or ${field} eq null)`;
    return "";
}

type BuildQueryType = ({}: {parameters: any[], operator: string}) => any;  
const BuildQuery: BuildQueryType = ({parameters, operator}) => {
    let value_type: string = Array.isArray(parameters) ? "array" : typeof parameters;
    const map: any = {
        "array": () => parameters.filter(x => x ? x.trim() : ""),
        "object": () => {
            let logicals = [];
            for(let key in parameters) {
                if(parameters[key]) logicals.push(parameters[key]);
            }
            return logicals;
        }
    };
    return map[value_type]().join(` ${operator} `);
}


const LogicalOperator = (logicals: any[], operator: string) => {
    let map: any = {
        0: "",
        1: logicals[0],
        2: `(${logicals.join(` ${operator} `)})`
    }; 
    return map[logicals.length];
}

const Sanitaze = (val: any) => {
    const map: any = {
        "string": () =>  `'${val}'`,
        "boolean": () => val ? `1` : `0`,
        "number": () => Number(val),
        "object": () => val
    };
    let type_value = typeof val;
    return map.hasOwnProperty(type_value)? map[type_value]() : val;
}

export {
    Eq,
    Ne,
    Gt,
    Ge,
    Lt,
    Le,
    And,
    Or,
    Not,
    Contains,
    StartsWith,
    EndsWith,
    BuildQuery,
    any,
    ContainsChoices,
    Nullable,
    En,
    Nen,
    NoNull
}