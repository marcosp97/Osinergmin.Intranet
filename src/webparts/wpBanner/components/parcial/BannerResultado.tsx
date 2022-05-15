import { Image, ImageFit, IStackTokens, mergeStyleSets, Stack } from '@fluentui/react'
import * as React from 'react'
import { AppContext } from '../../store/context'
import styles from '../../../../assets/scss/Estilo.module.scss'
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBCarouselItem, MDBCarouselCaption, MDBCarouselElement,  } from 'mdb-react-ui-kit';
import { BannerApiService } from '../../../../Providers/BannerApiService';
import { ActionReducer } from '../../store/action';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { UsuarioRegistradoApiService } from '../../../../Providers/UsuarioRegistradoApiService';
import { formatDate, MONTHS } from '../../../../Helper/DateHelper';
import { TIPO } from '../../../../Helper/Constants/Configuration';
import { CumpleaniosApiService } from '../../../../Providers/CumpleaniosApiService';
import { FeriadoApiService } from '../../../../Providers/FeriadoApiService';
import { AniversarioApiService } from '../../../../Providers/AniversarioApiService';


export const BannerResultado: React.FC = ({

}) => {

  const { state, dispatch, ui, sp} = React.useContext(AppContext) 

  const onFilter = (_e: any) => {

    ui.showLoading()
    const oRequest: BannerVM = {
      Activo: true
    }
    BannerApiService
        .getFileAllWithNext(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_BANNERS, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const mesActual = MONTHS[new Date().getMonth()].name
  const mesSiguiente = MONTHS[new Date().getMonth() + 1].name

  const ListarCumpleanieros = () => {
    ui.showLoading()
    const oRequest: FestividadVM = {
      MesCumpleanios: mesActual,
      top: 12
    }
    console.log(oRequest)
    CumpleaniosApiService
        .getAll(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_CUMPLEANIOS, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const ListarCumpleanierosMesSiguiente = () => {
    ui.showLoading()
    const oRequest: FestividadVM = {
      MesCumpleanios: mesSiguiente,
      top: 12
    }
    console.log(oRequest)
    CumpleaniosApiService
        .getAll(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_CUMPLEANIOSNEXT, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const ListarFeriados = () => {
    ui.showLoading()
    const oRequest: FestividadVM = {
      MesCumpleanios: mesActual,
      top: 12
    }
    console.log(oRequest)
    FeriadoApiService
        .getAll(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_FERIADOS, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const ListarAniversarios = () => {
    ui.showLoading()
    const oRequest: FestividadVM = {
      MesCumpleanios: mesActual,
      top: 12
    }
    console.log(oRequest)
    AniversarioApiService
        .getAll(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_ANIVERSARIOS, payload: values })
            return
        })
        .catch(err => {
            console.error(err)
        })
        .then(ui.hideLoading)
  }

  const onClick = (obj: BannerVM) => {
    if(obj.URL)
    {
      var a = document.createElement('a');
      a.target="_blank";
      a.href= obj.URL || "#";
      a.click();
    }
  }

  const wrapStackTokens: IStackTokens = { childrenGap: 30 };

  const classNames = mergeStyleSets({
    cumpleanios: ['image-gallery-image', styles.imgCumpleanios, styles.imgAll],
    feriado: ['image-gallery-image', styles.imgFeriado, styles.imgAll],
    aniversario: ['image-gallery-image', styles.imgAniversario, styles.imgAll],
    image: ['image-gallery-image', styles.imgAll],
  });

  const GenerarCumpleanios = (item: BannerVM) => {
    return (
      <div className={styles.contenedorCumpleanios}>
        <Stack horizontal wrap className={styles.sectionHeaderCumpleanios} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          <span className={styles.textHeaderCumpleanios}>Cumpleaños de {mesActual}</span>
        </Stack>
        <img 
          className={classNames.cumpleanios}
          src={item.ServerRelativeUrl}
          alt={item.ServerRelativeUrl || ""}
          loading="eager"
          onClick={() => onClick(item)}
          />
        <Stack horizontal wrap className={styles.sectionCumpleanios} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          {state.cumpleanios.map(x => {
            return (<span className={styles.textCumpleanios}>{x.DiaCumpleanios + " - " + x.Title}</span>)
          })}
        </Stack>
      </div>
    )
  }

  const GenerarCumpleaniosNext = (item: BannerVM) => {
    return (
      <div className={styles.contenedorCumpleanios}>
        <Stack horizontal wrap className={styles.sectionHeaderCumpleanios} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          <span className={styles.textHeaderCumpleanios}>Cumpleaños de {mesSiguiente}</span>
        </Stack>
        <img 
          className={classNames.cumpleanios}
          src={item.ServerRelativeUrl}
          alt={item.ServerRelativeUrl || ""}
          loading="eager"
          onClick={() => onClick(item)}
          />
        <Stack horizontal wrap className={styles.sectionCumpleanios} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          {state.cumpleaniosnext.map(x => {
            return (<span className={styles.textCumpleanios}>{x.DiaCumpleanios + " - " + x.Title}</span>)
          })}
        </Stack>
      </div>
    )
  }

  const GenerarFeriado = (item: BannerVM) => {
    return (
      <div className={styles.contenedorFeriado}>
        <Stack horizontal wrap className={styles.sectionHeaderFeriado} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          <span className={styles.textHeaderFeriado}>Feriados de {mesActual}</span>
        </Stack>
        <img 
          className={classNames.feriado}
          src={item.ServerRelativeUrl}
          alt={item.ServerRelativeUrl || ""}
          loading="eager"
          onClick={() => onClick(item)}
          />
        <Stack horizontal wrap className={styles.sectionFeriado} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          {state.feriados.map(x => {
            return (<span className={styles.textFeriado}>{x.DiaCumpleanios + " - " + x.Title}</span>)
          })}
        </Stack>
      </div>
    )
  }

  const GenerarAniversario = (item: BannerVM) => {
    return (
      <div className={styles.contenedorAniversario}>
        <Stack horizontal wrap className={styles.sectionHeaderAniversario} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          <span className={styles.textHeaderAniversario}>Aniversarios de {mesActual}</span>
        </Stack>
        <img 
          className={classNames.aniversario}
          src={item.ServerRelativeUrl}
          alt={item.ServerRelativeUrl || ""}
          loading="eager"
          onClick={() => onClick(item)}
          />
        <Stack horizontal wrap className={styles.sectionAniversario} tokens={wrapStackTokens} onClick={() => onClick(item)}>
          {state.aniversarios.map(x => {
            return (<span className={styles.textAniversario}>{x.DiaCumpleanios + " - " + x.Title}</span>)
          })}
        </Stack>
      </div>
    )
  }

  const GenerarBanner = (item: BannerVM) => {
    return (
      <img 
        className={classNames.image}
        src={item.ServerRelativeUrl}
        alt={item.ServerRelativeUrl || ""}
        loading="eager"
        onClick={() => onClick(item)}
        />
    )
  }

  const  _myImageGalleryRenderer = (item: BannerVM) => {
    switch (item.TipoPlantilla) {
      case TIPO.BANNER:
        return GenerarBanner(item)
      case TIPO.ANIVERSARIO:
        return GenerarAniversario(item)
      case TIPO.CUMPLEANIOS:
        if(item.EsSiguiente)
          return GenerarCumpleaniosNext(item)
        else
          return GenerarCumpleanios(item)
      case TIPO.FERIADO:
        return GenerarFeriado(item)
      default:
        return GenerarBanner(item)
    }
  }

  React.useEffect(() => {
    onFilter(null)
    ListarCumpleanieros()
    ListarAniversarios()
    ListarFeriados()
    ListarCumpleanierosMesSiguiente()
  }, [])

    return (
        <>
          <ImageGallery 
            autoPlay={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            items={state.banners} 
            renderItem={_myImageGalleryRenderer.bind(this)}
            />
          
        </>
    )
}
