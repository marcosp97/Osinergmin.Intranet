

// it only considers the falsy values as valid: false, 0
export const isValuesValid = (values: any[]) => {
    
    const newArr = values.filter(val => {

        if(val === null || val === undefined || isNaN(val))
            return false

        if(typeof val === 'number') 
            return true

        if(typeof val === 'boolean') 
            return true
        
        if(typeof val === 'object' && Object.keys(val).length > 0)
            return true
        
        if(Array.isArray(val) && val.length > 0)
            return true
        
        if(val)
            return true
        
        return false
    })
    return values.length === newArr.length
}