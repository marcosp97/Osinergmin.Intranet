import * as React from 'react';
import styles from './WpAplicacionesUsuario.module.scss';
import { IWpAplicacionesUsuarioProps } from './IWpAplicacionesUsuarioProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultPalette, FontIcon, ImageIcon, IStackItemStyles, IStackStyles, IStackTokens, mergeStyles, Stack } from '@fluentui/react';
import { TestImages } from '@fluentui/example-data';

export default class WpAplicacionesUsuario extends React.Component<IWpAplicacionesUsuarioProps, {}> {
  public render(): React.ReactElement<IWpAplicacionesUsuarioProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;



    const verticalGapStackTokens: IStackTokens = {
      childrenGap: 20,
    };

    const iconClass = mergeStyles({
      fontSize: 20,
      height: 20,
      width: 20,
      margin: '0 25px'
    });

    const itemHeaderStyles: React.CSSProperties = {
      display: 'flex',
      fontSize: 16,
    };

    const itemBodyStyles: React.CSSProperties = {
      display: 'flex',
      fontSize: 13,
      color: '#969696'
    };

    const aStyles: React.CSSProperties = {
      textDecoration: 'none',
      fontFamily: '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
      color: '#323031'
    };

    return (
      <Stack tokens={verticalGapStackTokens}>
        <Stack wrap horizontal>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="Group" iconName="Group" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="Feedback" iconName="Feedback" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack wrap horizontal>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="ReportHacked" iconName="ReportHacked" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="NewsSearch" iconName="NewsSearch" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack wrap horizontal>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="Link" iconName="Link" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={3}>
            <Stack horizontal>
              <Stack>
                <div>
                  <FontIcon aria-label="Link" iconName="Link" className={iconClass}/>
                </div>
              </Stack>
              <Stack>
                <Stack>
                  <Stack horizontalAlign="start">
                    <span style={itemHeaderStyles}>Tramite Documentario</span>
                    <span style={itemBodyStyles}>texto corto</span>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack>
          <Stack.Item align='end'>
            <a href='#' target='_blank' style={aStyles}>Ver todo</a>
          </Stack.Item>
        </Stack>
      </Stack>
      
    );
  }
}
