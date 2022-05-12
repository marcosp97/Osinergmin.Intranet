
// this functionality is inm progress, for now it only supports objects, not arrays
export const mutateObject = (obj: any): any => {
    let newObj: any = {}
    Object
    .keys(obj)
    .forEach(key => {
        const value = obj[key];
        if(typeof value === 'object') {
            newObj = {...newObj, [key]: mutateObject(value)  }
        } else if(Array.isArray(value)) {
            value.map(item_value => {
                if(typeof item_value === 'object') {
                    return mutateObject(item_value)
                } else {

                }
            })
            newObj = { ...newObj, [key]: value }
        } else  {
            newObj = { ...newObj, [key]: value }
        }
    })
    return newObj
}