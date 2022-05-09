import * as React from 'react';
import styles from './WpPaginasFavoritas.module.scss';
import { IWpPaginasFavoritasProps } from './IWpPaginasFavoritasProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CompoundButton, FontIcon, IIconProps, IStackTokens, mergeStyles, mergeStyleSets, PrimaryButton, Stack } from '@fluentui/react';

export default class WpPaginasFavoritas extends React.Component<IWpPaginasFavoritasProps, {}> {
  public render(): React.ReactElement<IWpPaginasFavoritasProps> {
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

    const itemStyle: React.CSSProperties = {
      display: 'flex',
      fontSize: 16,
      margin: 5
    };
    
    const NewsIcon: IIconProps = { iconName: 'News' };
    const MegaphoneIcon: IIconProps = { iconName: 'Megaphone' };
    const ReadingModeSolid: IIconProps = { iconName: 'ReadingModeSolid' };

    return (
      <Stack tokens={verticalGapStackTokens}>
        <Stack wrap horizontal>
          <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Bandeja de Tareas" iconProps={NewsIcon} className={styles.btnFavoritos}/>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Text" iconProps={MegaphoneIcon} className={styles.btnFavoritos}/>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Bandeja de Tareas" iconProps={ReadingModeSolid} className={styles.btnFavoritos}/>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Bandeja de Tareas" iconProps={NewsIcon} className={styles.btnFavoritos}/>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Bandeja de Tareas" iconProps={ReadingModeSolid} className={styles.btnFavoritos}/>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
              <PrimaryButton text="Bandeja de Tareas" iconProps={NewsIcon} className={styles.btnFavoritos}/>
            </Stack>
        </Stack>
      </Stack>
    );
  }
}
