import { CRM_URI, CRM_API_VERSION } from '../Utils/AppSettings';

export const DEFAULT_HEADER = [
  { key: "Prefer", value: "odata.maxpagesize=500,odata.include-annotations=*" },
]

export const BASE_PARAMETERS = { headers: DEFAULT_HEADER };

export const BASE_WITHOUT_MAXPAGESIZE_PARAMETERS =  {
  headers: [
    { key: "Prefer", value: "odata.include-annotations=*" },
  ]
}

export const BASE_UPDATE_PARAMETERS = {
  headers: [
    { key: "Prefer", value: "return=representation,odata.include-annotations=*" }
  ]
}

export const BASE_CREATE_PARAMETERS = {
  headers: [
    { key: "Prefer", value: "return=representation,odata.include-annotations=*" }
  ]
}

export const BASE_DELETE_PARAMETERS = {
}

export const BASC_API_URI = `${CRM_URI}/api/${CRM_API_VERSION}`