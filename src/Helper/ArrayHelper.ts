export const Chunk = (arr: any[], size: number) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

export const RemoveDuplicate = (arr: any[]) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

export const ArrayToObject = (arr: any[], key: string) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

export const MergeArrayOfArray = (arr: any[]) => arr.reduce((prev, curr) => [...prev, ...curr], []);

export const CleanEmptyItems = (arr: any[]) => {
    if(Array.isArray(arr)) return arr.filter(_ => !!_)
    return arr
}

export const TrimArrayOfStrings = (arr: any[]) => {
    if(Array.isArray(arr)) return arr.map(_ => _? _.trim(): _)
    return arr
}

export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

type ArrayToDropDownIO = (
    param: { 
        data: any[], 
        key?: string |  ((item: any) => string), 
        value?: string | ((item: any) => string), 
        ignoreSelectLabel?: boolean 
    }
) => any[];
export const ArrayToDropDown: ArrayToDropDownIO = ({ data = [], key, value }) => {
    const newArray = (data || []).reduce(
        (prev, curr) => [
            ...prev, 
            { 
                key: typeof key === 'string' ? curr[key] : key(curr), 
                text: typeof value === "string" ? curr[value] : value(curr), 
                data: curr 
            }
        ],
        []
    );
    return newArray
}

export const ArrayTagPicker: ArrayToDropDownIO = ({ data = [], key, value }) => {
    const newArray = (data || []).reduce(
        (prev, curr) => [
            ...prev, 
            { 
                key: typeof key === 'string' ? curr[key] : key(curr), 
                name: typeof value === "string" ? curr[value] : value(curr)
            }
        ],
        []
    );
    return newArray
}

export const ArrayHelper = (lst: string[]): string[] => {
    if(!lst)
        return []
        
    return lst
        .filter(x => !!x)
        .map(x => `${x}`)
}