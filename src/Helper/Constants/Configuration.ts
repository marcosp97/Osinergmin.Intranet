export enum LIST {
	Banner = 'Banner',
    UsuarioRegistrado = 'Usuarios registrados',
    Feriados = 'Feriados',
    Aniversarios = 'Aniversarios',
    Cumpleanios = 'Cumpleaños',
    Aplicaciones = 'Aplicaciones',
}


export const enum Mensaje {
    errNotData = "Esta buscando un registro que no se encuentra disponible.",
    errGeneric = "Se ha producido un error, verifique sus datos y vuelva a intentar, si se mantiene el error ponte en contacto con nosotros.",
    success = "Exito",
    warning = "Aviso",
    error = "Error",
    userNoConfigurado = "Su cuenta no se encuentra configurado, por favor comuníquese con el administrador del sistema.",
    question = "¿Está seguro de eliminar el registro?",
    questionRenovar = "¿Está seguro de renovar el registro?",
    questionAprobar = "¿Está seguro de aprobar el registro?",
    questionDesaprobar = "¿Está seguro de desaprobar el registro?",
    questionDesestimar = "¿Está seguro de desestimar el registro?",
    questionActivar = "¿Está seguro de activar el registro?",
    questionDesactivar = "¿Está seguro de desactivar el registro?",
    questionFinalizar = "¿Está seguro de finalizar el registro?",
    questionSalir = "¿Está seguro de salir del formulario?",
    dataExiste = "No se registraron todo(s), ya que existe registro(s) igual(es)",
	noData = "No hay registros para mostrar",
	actualizarRegistro = 'El registro se ha actualizado correctamente',
	crearRegistro = 'El registro se ha creado correctamente',
	errorValidacion = 'Por favor completar todos los campos del formulario',
	eliminarRegistro = 'El registro se ha eliminado correctamente',
    noParam = 'No se ha encontrado el modulo correctamente',
}

export const enum MensajeCalendario {
    errNotPersonal = "No podemos encontrar la información solicitada porque el personal ingresado no existe, por favor ponte en contacto con nosotros.",
    validPersonal = "Por favor seleccione un personal",
}

export const enum MensajeBandeja {
    validArticulo = "Por favor seleccione al menos un artículo",
    validCurso = "Por favor seleccione al menos un curso",
    validAuditoria = "Por favor seleccione al menos una auditoría",
    crearPedido = 'El pedido de venta se ha creado correctamente',
    crearPedidoCompra = 'El pedido de compra se ha creado correctamente',
    validarCliente = 'Debe seleccionar un cliente',
    validarDivisa = 'Debe seleccionar una moneda',
    validarProveedor = 'Debe seleccionar un proveedor',
    validarTarifaProveedor = 'No se encontró la tarifa del proveedor seleccionado, por favor valide que exista la tarifa',
}


export const OptionSetUri = (metadata_id: string) => `GlobalOptionSetDefinitions(${metadata_id})`

export enum ESTADO_GENERAL {
	ACTIVO = 0,
	INACTIVO = 1
}

export enum ESTADO_CALENDARIO {
	PENDIENTE = 100000000,
	APROBADO = 100000001,
	REACHAZADO = 100000002,
}

export enum AREA_CALENDARIO {
	SIG = 100000000,
	COM = 100000001,
	OPE = 100000002,
    CAP = 100000003,
    ALL = 100000004,
}

export enum AREA {
	SIG = "SIG",
	COM = "COM",
	OPE = "OPE",
    CAP = "CAP",
}

export enum TIPO {
	BANNER = "Banner",
	CUMPLEANIOS = "Cumpleaños",
	ANIVERSARIO = "Aniversario",
    FERIADO = "Feriado",
}

export enum LibraryName {
	DocumentosOC = "Documentos OC",
}

export enum Sitios {
	Principal = "ebascdev",
}


export enum PARAMETRO {
	URL_CORREO = "006",
    PLANTILLA_CORREO = "007",
    URL_PEDIDOVENTA = "008",
    CODIGO_ARTICULO_CAP = "009",
    URL_PEDIDOCOMPRA = "011",
    BCCONECTION= "bc_connection"
}

export enum CODIGO_DIVISA {
	PEN = "PEN",
    USD = "USD",
}

export enum APLICACION {
	TODOS = "004",
    Afiliacion = "1",
}

export enum MODULO {
	Comunes = "COMUNES",
}

export enum METHOD {
	POST = "POST",
}


export enum ESTADO_EMPRESA_CERTIFICADA_BASC {
    EN_PROCESO = "002",
    CERTIFICADA_ACTIVA = "003",
    RETIRADA = "005",
    VENCIDA = "004",
    NA ="001"
}

export enum ESTADO_EMPRESA_CERTIFICADA_ISO {
    EN_PROCESO = "001",
    RETIRADA = "003",
    CANCELADO = "004",
    SUSPENDIDO = "005",
    VIGENTE = "002"
}

export const BASE_SELECT_QUERY = 'createdby,createdon,modifiedby,modifiedon,versionnumber,statecode'
