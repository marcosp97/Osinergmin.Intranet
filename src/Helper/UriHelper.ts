import { UrlQueryParameterCollection } from "@microsoft/sp-core-library"

export const queryParams = (key: string): string => {
	const parameters = new URLSearchParams(window.location.search)
	return parameters.has(key)? parameters.get(key) : null
}

/**
 * 
 * @param values { uriKey: uriValue, uriKey2: uriValue2, ...  }
 */
export const setQueryParams = (uri: string, values: any): string => {
	let newUri = uri
	Object.keys(values).forEach(key => {
		newUri = newUri.replace(`[%${key}%]`, values[key])
	})
	return newUri
}

export const getQueryParams = (values: string[]): any => {
	var queryParameters = new UrlQueryParameterCollection(window.location.href)
	let oParamTemp: any= {}
	let oParam: any= {}

    if (queryParameters.getValue("Param")) {
      let Param: string = queryParameters.getValue("Param")
      Param = Param.replace(/\%3d/g, "")
      const ArrayParamters: string[] = atob(Param).split('&')
	  for (let i = 0; i < ArrayParamters.length; i++) {
		if (ArrayParamters[i].indexOf("=") != -1) {
			const ArrayParam: string[] = ArrayParamters[i].split('=')
			oParamTemp[ArrayParam[0]] = ArrayParam[1]
		  }
		  
	  }
    }

	values.forEach(element => {
		if(oParamTemp[element])
			oParam[element] = oParamTemp[element]
	});
	return oParam
}

export const buildPath = (...paths: string[]) => paths.filter(x => !!x).join('/')