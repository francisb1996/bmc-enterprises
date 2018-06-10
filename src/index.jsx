import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './routes'
import Navigation from './components/Navigation';
import 'ant.less';

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <div>
        <Navigation/>
        <div style={{
          padding: '1rem'
        }}>
          <Component/>
        </div>
      </div>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(require('./routes').default);
  })
}
