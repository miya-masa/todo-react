import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

export default class RefleshContainer extends React.Component {
  render() {
    const style = {
      loader: {
        display: 'inline-block',
        zIndex: '101'
      },
      container: {
        'backgroundColor': '#FFFFFF', // 好みで
        'opacity': '0.5',
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'height': '100%',
        'zIndex': '100',
        'display': this.props.status === 'loading' ? 'block' : 'none'
      }
    };

    return (
      <div>
      <RefreshIndicator status={this.props.status} left={window.innerWidth / 2} top={window.innerHeight / 3} size={100} style={style.loader}/>
      <div style={style.container}></div>
      </div>
      );
  }
}
