import { Metodo } from "../Helper/Metodo";

export class QueryCamlGenerador {

    public QueryObtenerFormatoCorreo(FormatoCorreo: {}) {
        let QueryCaml: string = "<View><Query><Where>{0}</Where></Query></View>";
        let QueryGenerador: string[] = [];
        if (FormatoCorreo) {
            if (FormatoCorreo["codigo"]) {
                QueryGenerador.push("<Eq><FieldRef Name='Codigo' /><Value Type='Text'>" + FormatoCorreo["codigo"] + "</Value></Eq>");
            }
        }
        return this.GetConstructorQuery(QueryCaml, QueryGenerador, []);
    }

    private ConstructorQuery(QueryGenerador: string[], QueryGeneradorOr: string[]) {
        let QueryGeneradorFinal: string[] = [];
        if (QueryGenerador.length == 1) {
            QueryGeneradorFinal.push(QueryGenerador[0]);
        } else if (QueryGenerador.length == 2) {
            QueryGeneradorFinal.push("<And>");
            QueryGenerador.forEach(element => {
                QueryGeneradorFinal.push(element);
            });
            QueryGeneradorFinal.push("</And>");
        } else if (QueryGenerador.length > 2) {
            let lastItem: number = QueryGenerador.length - 1;
            let preLastItem = QueryGenerador.length - 2;
            let Contador: number = 0;
            let strCloseCamlQuery: string[] = [];
            QueryGenerador.forEach(element => {
                if (Contador < lastItem) {
                    QueryGeneradorFinal.push("<And>");
                }
                QueryGeneradorFinal.push(element);
                if (Contador != preLastItem) {
                    strCloseCamlQuery.push("</And>");
                }
                if (Contador == lastItem) {
                    strCloseCamlQuery.forEach(item => {
                        QueryGeneradorFinal.push(item);
                    });
                }
                Contador++;
            });
        }
        if (QueryGeneradorFinal.length >= 1 && QueryGeneradorOr.length > 0) {
            let QueryGeneradorFinal2: string[] = [];
            QueryGeneradorFinal2.push("<And>");
            QueryGeneradorFinal.forEach(element => {
                QueryGeneradorFinal2.push(element);
            });
            if (QueryGeneradorOr.length == 1) {
                QueryGeneradorFinal2.push(QueryGeneradorOr[0]);
            } else if (QueryGeneradorOr.length == 2) {
                QueryGeneradorFinal2.push("<Or>");
                QueryGeneradorOr.forEach(element => {
                    QueryGeneradorFinal2.push(element);
                });
                QueryGeneradorFinal2.push("</Or>");
            } else if (QueryGeneradorOr.length > 2) {
                let lastItem: number = QueryGeneradorOr.length - 1;
                let preLastItem = QueryGeneradorOr.length - 2;
                let Contador: number = 0;
                let strCloseCamlQuery: string[] = [];
                QueryGeneradorOr.forEach(element => {
                    if (Contador < lastItem) {
                        QueryGeneradorFinal2.push("<Or>");
                    }
                    QueryGeneradorFinal2.push(element);
                    if (Contador != preLastItem) {
                        strCloseCamlQuery.push("</Or>");
                    }
                    if (Contador == lastItem) {
                        strCloseCamlQuery.forEach(item => {
                            QueryGeneradorFinal2.push(item);
                        });
                    }
                    Contador++;
                });
            }
            QueryGeneradorFinal2.push("</And>");
            QueryGeneradorFinal = QueryGeneradorFinal2;
        }
        return QueryGeneradorFinal;
    }

    private GetConstructorQuery(QueryCaml: string, QueryGenerador: string[], QueryGeneradorOr: string[]) {
        let QueryGenerado: string = "";
        let QueryGeneradorFinal: string[] = this.ConstructorQuery(QueryGenerador, QueryGeneradorOr);
        QueryGeneradorFinal.forEach(element => {
            QueryGenerado += element.toString();
        });
        QueryCaml = QueryCaml.replace("{0}", QueryGenerado);
        return QueryCaml;
    }

}