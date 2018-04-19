import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Favicon extends React.Component<FaviconProps, FaviconState> {
  render() {
    return ReactDOM.createPortal([
      <link key='apple-touch-icon' rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon.png'/>,
      <link key='icon-32x32' rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>,
      <link key='icon-16x16' rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>,
      <link key='manifest' rel='manifest' href='/site.webmanifest'/>,
      <link key='mask-icon' rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5'/>,
      <meta key='msapplication-TileColor' name='msapplication-TileColor' content='#b2fb16'/>,
      <meta key='theme-color' name='theme-color' content='#ffffff'/>
    ], document.querySelector('head'))
  } 
}
interface FaviconProps extends React.Props<{}> {}
interface FaviconState {}

export default Favicon