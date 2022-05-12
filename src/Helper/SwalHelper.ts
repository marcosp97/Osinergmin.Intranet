import Swal from "sweetalert2"

type SwalType = (setting: { icon?: 'success' | 'error', title?: string, message: string }) => void;

const defaultSweetAlertSetting = {
    heightAuto: false
}
const success: SwalType = ({ 
    title = '', 
    message = "Operación exitosa!"
}) => Swal.fire({
    ...defaultSweetAlertSetting,
    icon: 'success',
    title: title,
    text: message
})

const warning: SwalType = ({ 
    title = '', 
    message = "Alerta!"
}) => Swal.fire({
    ...defaultSweetAlertSetting,
    icon: 'warning',
    title: title,
    text: message,
})

const warningHtml: SwalType = ({ 
    title = '', 
    message = "Alerta!"
}) => Swal.fire({
    ...defaultSweetAlertSetting,
    icon: 'warning',
    title: title,
    html: message,
})

const error: SwalType = ({ 
    title = '', 
    message = "Ocurrió un error!" 
}) => Swal.fire({
    ...defaultSweetAlertSetting,
    icon: 'error',
    title: title,
    text: message,
});

const alert: SwalType = ({
    icon,
    title = '',
    message = ''
}) => Swal.fire({
    ...defaultSweetAlertSetting,
    icon: icon,
    title: title,
    text: message
});


export const SwalHelper = {
    success,
    warning,
    error,
    alert,
    warningHtml
}