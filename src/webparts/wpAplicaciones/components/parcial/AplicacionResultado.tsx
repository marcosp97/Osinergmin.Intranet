import { Image, ImageFit, IStackStyles, IStackTokens, mergeStyleSets, Separator, Stack } from '@fluentui/react'
import * as React from 'react'
import { AppContext } from '../../store/context'
import styles from '../../../../assets/scss/Estilo.module.scss'
import { ActionReducer } from '../../store/action';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { AplicacionesApiService } from '../../../../Providers/AplicacionesApiService';


export const AplicacionResultado: React.FC = ({

}) => {

  const { state, dispatch, ui, sp} = React.useContext(AppContext) 

  const onFilter = (_e: any) => {

    ui.showLoading()
    const oRequest: AplicacionesVM = {}
    AplicacionesApiService
        .getAllDinamico(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_APLICACIONES, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const onClick = (Url: string) => {
    if(Url)
    {
      var a = document.createElement('a');
      a.target="_blank";
      a.href= Url || "#";
      a.click();
    }
  }

  const classNames = mergeStyleSets({
    header: [styles.contenedorSectionAplicacion, styles.contenedorDiv],
  });



  React.useEffect(() => {
    onFilter(null)
  }, [])

    return (
        <>
          {state.aplicaciones?.map(x => {
            return (
              <>
                <Stack horizontalAlign='start' className={classNames.header}>
                    <Stack verticalAlign='center' horizontalAlign='start' className={styles.spanSection}>
                        <span>{x.Categoria}</span>
                    </Stack>
                    <Separator className={styles.separador} />
                </Stack>

                <Stack wrap horizontal className={styles.contenedorDiv}>
                  {x.SubCategorias?.map(y => {
                    return (
                        <Stack horizontalAlign='center' className={styles.contenedorAplicacion}>
                            <Stack verticalAlign='center' horizontalAlign='center' className={styles.spanHeader}>
                                <span>{y.SubCategoria}</span>
                            </Stack>
                            <Separator className={styles.separador} />

                            {y.Aplicaciones?.map(z => {
                              return (
                                <>
                                  <Stack verticalAlign='center' horizontalAlign='center' className={styles.sectionTilte} onClick={() => onClick(z.URL)}>
                                      <span>{z.Title}</span>
                                  </Stack>
                                  <Separator className={styles.separador} />
                                </>
                              )
                            })}
                        </Stack>
                      )
                    })}
                </Stack>
                <br/>
                <br/>
              </>
            )
          })}
        </>
    )
}
