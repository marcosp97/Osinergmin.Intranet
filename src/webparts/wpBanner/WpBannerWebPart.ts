import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { spfi, SPFx } from "@pnp/sp";
import WpBanner from './components/WpBanner';
import { IWpBannerProps } from './components/IWpBannerProps';
import * as strings from 'WpBannerWebPartStrings';
import { IPropertyPaneConfiguration, PropertyPaneSlider, PropertyPaneTextField } from '@microsoft/sp-property-pane';

export interface IWpBannerWebPartProps {
  description: string;
  duracion: string;
}

export default class WpBannerWebPart extends BaseClientSideWebPart<IWpBannerWebPartProps> {

  protected async onInit(): Promise<void> {
    await super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IWpBannerProps> = React.createElement(
      WpBanner,
      {
        description: this.properties.description,
        Contexto: spfi().using(SPFx(this.context)),
        duracion: this.properties.duracion
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
                PropertyPaneTextField('duracion', {
                  label: "Duracion (ms  )",
                })
              ]
            }
          ],
        }
      ]
    };
  }
}
