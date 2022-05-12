import "@pnp/sp/sputilities";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IEmailProperties } from "@pnp/sp/sputilities";

export const Metodo = {
    PadLeft,
    BooleanToString,
    StringToBoolean,
    TrimEndCadena,
    CreateISODatetimeDesde,
    CreateISODatetimeHasta,
    GetFileNameUrl,
    GetFileExtensionUrl,
    NameFileWithDateTime,
    DownloadFileBlob,
    DownloadFileUrl,
    ConvertStringToDate,
    DateSharePointInsert,
    FileIcons,
    Today,
    TodayAddDay,
    ExportarExcel,
    ConvertObjectToBoolean,
    parseBoolean,
    ConvertStringToNumber,
    GetYear,
    StringToday,
    addDays,
    isNull,
    replaceNullGuion,
    removeComas,
    numberWithCommas,
};

function removeComas(cadena) {
    if (cadena) {
        cadena = cadena.replace(/,/g, "");
    }
    return ConvertStringToNumber(cadena);
}

function isNull(obj) {
    if (obj) {
        return obj;
    }
    return "";
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function ConvertStringToNumber(object): number {
    let salida = 0;
    if (object != null) {
        salida = Number(object);
    }
    return salida;
}

function parseBoolean(val: string | boolean | number): boolean {
    const s = val && val.toString().toLowerCase().trim();
    if (s == 'true' || s == '1')
        return true;
    return false;
}

function ConvertObjectToBoolean(object): boolean {
    let salida = false;
    if (object) {
        salida = object;
    }
    return salida;
}

function PadLeft(num, size) {
    let salida = num + "";
    while (salida.length < size) salida = "0" + salida;
    return salida;
}

function BooleanToString(object): string {
    let salida = "No";
    if (object == true) {
        salida = "Si";
    }
    return salida;
}

function StringToBoolean(object): boolean {
    let salida = null;
    if (object == "No") {
        salida = false;
    } else {
        salida = true;
    }
    return salida;
}

function TrimEndCadena(cadena, removechar) {
    if (cadena) {
        cadena = cadena.replace(new RegExp("[" + removechar + "]+$"), "");
    }
    return cadena;
}

function CreateISODatetimeDesde(Fecha: Date) {
    let salida = "";
    if (Fecha) {
        salida = Fecha.getFullYear() +
            '-' + pad(Fecha.getMonth() + 1) +
            '-' + pad(Fecha.getDate()) +
            'T' + pad(Fecha.getHours()) +
            ':' + pad(Fecha.getMinutes()) +
            ':' + pad(Fecha.getSeconds()) +
            '.' + (Fecha.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    }
    return salida;
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function CreateISODatetimeHasta(Fecha: Date) {
    let salida = "";
    if (Fecha) {
        Fecha.setHours(23);
        Fecha.setMinutes(59);
        Fecha.setSeconds(59);
        salida = Fecha.getFullYear() +
            '-' + pad(Fecha.getMonth() + 1) +
            '-' + pad(Fecha.getDate()) +
            'T' + pad(Fecha.getHours()) +
            ':' + pad(Fecha.getMinutes()) +
            ':' + pad(Fecha.getSeconds()) +
            '.' + (Fecha.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    }
    return salida;
}

function NameFileWithDateTime() {
    let salida = new Date().getFullYear() +
        pad(new Date().getMonth() + 1) +
        pad(new Date().getDate()) +
        pad(new Date().getHours()) +
        pad(new Date().getMinutes()) +
        pad(new Date().getSeconds()) +
        (new Date().getMilliseconds() / 1000).toFixed(3).slice(2, 5);
    return salida;
}

function DownloadFileBlob(fileName: string, blob): void {
    const anchor = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
}

function DownloadFileUrl(fileName: string, url: string): void {
    const anchor = window.document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.dispatchEvent(new MouseEvent('click'));
}

function GetFileNameUrl(Url) {
    let salida = "";
    if (Url) {
        salida = Url.split('/').pop();
    }
    return salida;
}

function GetFileExtensionUrl(Url) {
    let salida = "";
    if (Url) {
        salida = Url.split('.').pop();
    }
    return salida;
}

function ConvertStringToDate(fecha: string): Date {
    let salida = null;
    if (fecha) {
        let arrayFecha = fecha.split('/');
        salida = new Date(Number(arrayFecha[2]), Number(arrayFecha[1]) - 1, Number(arrayFecha[0]));
    }
    return salida;
}

function DateSharePointInsert(fecha: Date, days: number): Date {
    let salida = null;
    if (fecha) {
        salida = new Date();
        salida.setTime(fecha.setDate(fecha.getDate() + days));
    }
    return salida;
}

function FileIcons(name: any): string {
    let urlIcons = "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/{0}.svg";
    let salida: string = "";
    switch (name) {
        case 'audio':
            salida = 'audio';
            break;
        case 'csv':
            salida = 'csv';
            break;
        case 'doc':
            salida = 'docx';
            break;
        case 'docx':
            salida = 'docx';
            break;
        case 'dotx':
            salida = 'dotx';
            break;
        case 'mpp':
            salida = 'mpp';
            break;
        case 'ppsx':
            salida = 'ppsx';
            break;
        case 'pdf':
            salida = 'pdf';
            break;
        case 'PDF':
            salida = 'pdf';
            break;
        case 'jpg':
            salida = 'photo';
            break;
        case 'jpeg':
            salida = 'photo';
            break;
        case 'png':
            salida = 'photo';
            break;
        case 'ppt':
            salida = 'pptx';
            break;
        case 'pptx':
            salida = 'pptx';
            break;
        case 'rtf':
            salida = 'rtf';
            break;
        case 'txt':
            salida = 'txt';
            break;
        case 'xls':
            salida = 'xlsx';
            break;
        case 'xlsx':
            salida = 'xlsx';
            break;
        case 'xltx':
            salida = 'xltx';
            break;
        case 'rar':
            salida = 'zip';
            break;
        case 'zip':
            salida = 'zip';
            break;
        case 'msg':
            salida = 'email';
            break;
        default:
            salida = 'null';
            break;
    }
    if (salida != "null") {
        salida = urlIcons.replace("{0}", salida);
    }
    return salida;
}

function GetYear(): string {
    let salida = new Date().getFullYear().toString().substr(2);
    return salida;
}

function StringToday(): string {
    let salida = pad(new Date().getDate()) + "/" + pad(new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    return salida;
}

function Today(): Date {
    let salida = new Date();
    return new Date(salida.getFullYear(), salida.getMonth(), salida.getDate());
}

function TodayAddDay(Dia: number): Date {
    let salida = new Date();
    return new Date(salida.getFullYear(), salida.getMonth(), salida.getDate() + Dia);
}

export class HelperSH {
    public async SendEmail(Sp, Correo) {
        let Resultado: boolean = false;
        const emailProps: IEmailProperties = {
            To: Correo.To,
            CC: Correo.CC != null ? Correo.CC : [],
            BCC: Correo.BCC != null ? Correo.BCC : [],
            Subject: Correo.Asunto,
            Body: Correo.Cuerpo,
            AdditionalHeaders: {
                "content-type": "text/html"
            }
        };
        await Sp.utility.sendEmail(emailProps);
        Resultado = true;
        return Resultado;
    }
}

function ExportarExcel(Datos, Sheet, NombreArchivo, ArregloEntero?) {
    const ws = XLSX.utils.json_to_sheet(Datos);
    if (ArregloEntero) {
        ArregloEntero.forEach(C => {
            var Rows = ws["!ref"].split(':')[1].substring(1);
            for (var R = 2; R <= Number(Rows); R++) {
                ws[C + R].t = 'n';
                ws[C + R].z = "#,##0.00";
                XLSX.utils.format_cell(ws[C + R]);
            }
        });
    }
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(data, NombreArchivo + '.xlsx');
}

function replaceNullGuion(valor) {
    if (!valor) {
        valor = "-";
    }
    return valor;
}

function numberWithCommas(valor) {
    if (!valor) {
        valor = "-";
    }
    return valor.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}