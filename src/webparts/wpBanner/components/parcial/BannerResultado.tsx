import { Image, ImageFit, IStackTokens, mergeStyleSets, Stack } from '@fluentui/react'
import * as React from 'react'
import { AppContext } from '../../store/context'
import styles from '../../../../assets/scss/Estilo.module.scss'
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBCarouselItem, MDBCarouselCaption, MDBCarouselElement,  } from 'mdb-react-ui-kit';
import { BannerApiService } from '../../../../Providers/BannerApiService';
import { ActionReducer } from '../../store/action';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';


export const BannerResultado: React.FC = ({

}) => {

  const { state, dispatch, ui, sp} = React.useContext(AppContext) 

  const onFilter = (_e: any) => {

    ui.showLoading()
    const oRequest: BannerVM = {}
    BannerApiService
        .getFileAll(sp, oRequest)
        .then(values => {
            dispatch({ type: ActionReducer.SET_BANNERS, payload: values })
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
    cumpleanios: ['image-gallery-image', styles.imgCumpleanios, styles.imgAllCumpleanios],
    image: ['image-gallery-image', styles.imgAllCumpleanios],
  });

  const  _myImageGalleryRenderer = (item: BannerVM) => {
    if(item.EsPlantillaCumpleanios)
      return (
      <div className={styles.contenedorCumpleanios}>
        <img 
          className={classNames.cumpleanios}
          src={item.ServerRelativeUrl}
          alt={item.ServerRelativeUrl || ""}
          loading="eager"
          onClick={() => onClick(item)}
          />
        <Stack horizontal wrap className={styles.sectionCumpleanios} tokens={wrapStackTokens}>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
          <span className={styles.textCumpleanios}>15 de Mayo - Marcos Peña</span>
        </Stack>
      </div>
      )
    else
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

  React.useEffect(() => {
    onFilter(null)
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
