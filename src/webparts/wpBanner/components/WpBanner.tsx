import * as React from 'react';
import { Layout } from '../../../Controls/Layout';
import { AppProvider } from '../store/context';
import { BannerContenedor } from './contenedor/BannerContenedor';
import { IWpBannerProps } from './IWpBannerProps';


export default class WpBanner extends React.Component<IWpBannerProps, {}> {
  constructor(props: IWpBannerProps) {  
    super(props);
  }  
  public render(): React.ReactElement<IWpBannerProps> {
    const {
      description,
      Contexto
    } = this.props;
    return (
      <main>
        <Layout>
          <AppProvider {...{ sp: Contexto}}>
            <BannerContenedor></BannerContenedor>
          </AppProvider>
        </Layout>
      </main>
    );
  }
}
