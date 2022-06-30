import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'WpAplicacionesWebPartStrings';
import WpAplicaciones from './components/WpAplicaciones';
import { IWpAplicacionesProps } from './components/IWpAplicacionesProps';
import { spfi, SPFx } from "@pnp/sp";

export interface IWpAplicacionesWebPartProps {
  description: string;
  lista: string;
}

export default class WpAplicacionesWebPart extends BaseClientSideWebPart<IWpAplicacionesWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IWpAplicacionesProps> = React.createElement(
      WpAplicaciones,
      {
        description: this.properties.description,
        Contexto: spfi().using(SPFx(this.context)),
        lista: this.properties.lista
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('lista', {
                  label: 'Nombre Lista'
                })
              ]
            }
          ],
        }
      ]
    };
  }

}
