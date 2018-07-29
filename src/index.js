import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from './component/Router/index.jsx';

renderWithHotReload(getRouter());

if (module.hot) {
        module.hot.accept('./component/Router/index.jsx', () => {
          const getRouter = require('./component/Router/index.jsx').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
//((str) => document.getElementById('app').innerHTML= str)("I using the babel now")
