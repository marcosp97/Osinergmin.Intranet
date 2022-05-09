import * as React from 'react';
import styles from './WpAplicacionesOffice.module.scss';
import { IWpAplicacionesOfficeProps } from './IWpAplicacionesOfficeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultPalette, FontIcon, IImageProps, Image, ImageIcon, IStackItemStyles, IStackStyles, IStackTokens, mergeStyles, mergeStyleSets, Stack } from '@fluentui/react';
import { TestImages } from '@fluentui/example-data';

export default class WpAplicacionesOffice extends React.Component<IWpAplicacionesOfficeProps, {}> {
  public render(): React.ReactElement<IWpAplicacionesOfficeProps> {
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
      fontSize: 30,
      height: 30,
      width: 30,
      margin: '0 25px'
    });

    const classNames = mergeStyleSets({
      IconSharepoint: [{ color: '#0078d4' }, iconClass],
      IconDelve: [{ color: '#a4373a' }, iconClass],
      IconExcel: [{ color: '#217346' }, iconClass],
      IconForms: [{ color: '#008272' }, iconClass],
      IconCalendar: [{ color: '#0078d4' }, iconClass],
      IconOutlook: [{ color: '#0078d4' }, iconClass],
      IconPeople: [{ color: '#0078d4' }, iconClass],
      IconPlanner: [{ color: '#31752f' }, iconClass],
      IconOneNote: [{ color: '#7719aa' }, iconClass],
      IconWord: [{ color: '#2b579a' }, iconClass],
    });

    const itemStyle: React.CSSProperties = {
      display: 'flex',
      fontSize: 16,
      margin: 5
    };

    const sectionStyle: React.CSSProperties = {
      cursor: 'pointer'
    };

    const itemBodyStyles: React.CSSProperties = {
      display: 'flex',
      fontSize: 15,
    };

    const aStyles: React.CSSProperties = {
      textDecoration: 'none',
      fontFamily: '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
      color: '#323031'
    };

    const Onclick = () => {
      var a = document.createElement('a');
      a.target="_blank";
      a.href="https://www.google.com";
      a.click();
    }


    return (
      <Stack tokens={verticalGapStackTokens}>
        <Stack wrap horizontal>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                  <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/sharepoint_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Sharepoint Icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Sharepoint</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                  <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/delve_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Delve Icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Delve</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/excel_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Excel Icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Excel</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/forms_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Forms Icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Forms</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <FontIcon aria-label="Calendar" iconName="Calendar" className={classNames.IconCalendar}/>
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Calendar</span>
              </Stack>
            </Stack>
        </Stack>
        <Stack wrap horizontal>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/outlook_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Outlook Icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Outlook</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <FontIcon aria-label="People" iconName="People" className={classNames.IconPeople}/>
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>People</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <FontIcon aria-label="PlannerLogo" iconName="PlannerLogo" className={classNames.IconPlanner}/>
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Planner</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <Image
                    src="https://static2.sharepointonline.com/files/fabric-cdn-prod_20200430.002/assets/brand-icons/product/svg/onenote_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Word product icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>One Note</span>
              </Stack>
            </Stack>
            <Stack verticalAlign='center' horizontalAlign='center' style={sectionStyle} onClick={Onclick}>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <Image
                    src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/word_48x1.svg"
                    styles={props => ({root: iconClass})}
                    alt="Word icon"
                  />
              </Stack>
              <Stack verticalAlign='center' horizontalAlign='center' style={itemStyle}>
                <span style={itemBodyStyles}>Word</span>
              </Stack>
            </Stack>
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
