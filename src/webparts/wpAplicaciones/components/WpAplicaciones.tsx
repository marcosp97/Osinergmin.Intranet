import * as React from 'react';
import { IWpAplicacionesProps } from './IWpAplicacionesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Layout } from '../../../Controls/Layout';
import { AppProvider } from '../store/context';
import { AplicacionContenedor } from './contenedor/AplicacionContenedor';

export default class WpAplicaciones extends React.Component<IWpAplicacionesProps, {}> {
  public render(): React.ReactElement<IWpAplicacionesProps> {
    const {
      description,
      Contexto
    } = this.props;

    return (
      <main>
        <Layout>
          <AppProvider {...{ sp: Contexto}}>
            <AplicacionContenedor></AplicacionContenedor>
          </AppProvider>
        </Layout>
      </main>
    );
  }
}
