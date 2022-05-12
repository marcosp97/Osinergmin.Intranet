import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const LocalFormat_DDMMYYYY = (date: any) => {
	if (!date) return date
	const dateToFormat = new Date(date)
	const day = dateToFormat.getDate(),
		month = dateToFormat.getMonth() + 1,
		year = dateToFormat.getFullYear()
	return [(day < 10 ? '0' : '') + day, (month < 10 ? '0' : '') + month, year].join('/')
}

export const LocalFormat_dDelMMDelYYYY = (date: any) => {
	if (!date) return date
	const dateToFormat = new Date(date)
	const day = dateToFormat.getDate(),
		month = dateToFormat.getMonth(),
		year = dateToFormat.getFullYear()
	return (day < 10 ? '0' : '') + day + " de " + MONTHS[month].name + " del " + year
}

export const LocalFormat_HHMM = (date: any) => {
	if (!date) return date
	const dateToFormat = new Date(date)
	const hours = dateToFormat.getHours(),
		minutes = dateToFormat.getMinutes()
	return [(hours < 10 ? '0' : '') + hours, (minutes < 10 ? '0' : '') + minutes].join(':')
}

export const Format_YYYYMMDD = (date: any) => {
	if (!date) return date
	return new Date(date).toISOString()
}

export const DataverseToLocal_Date = (date: string, _considerTime: boolean = false): Date => {
	if (!date) return null
	return new Date(date)
}

export const rangeYears = (startYear: number) => {
	const currentYear = new Date().getFullYear()
	const years = []
	startYear = startYear || 1980
	while (startYear <= currentYear) {
		years.push(startYear++)
	}
	return years
}

export const MONTHS = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
].map((v, i) => ({ id: i + 1, name: v }))

export const YEARS = [
	'2022',
	'2023',
	'2024',
	'2025',
	'2026',
	'2027',
	'2028',
	'2029',
	'2030',
	'2031',
	'2032',
	'2033',
	'2034',
	'2035'
].map((v, i) => ({ id: i + 1, name: v }))

export const formatDate = (date: any, _formatDate: string) => (date && format(new Date(date), _formatDate, { locale: es })) || date

export const CURRENT_YEAR = new Date().getFullYear()

export const getLocalISOTime = (date: any) =>{
	if (!date) return date
	var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    return isoDateTime;
}
