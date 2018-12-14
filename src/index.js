import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './sass/index.sass'

// third-party
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faHandPointDown, faDotCircle } from '@fortawesome/free-regular-svg-icons'

library.add( faCircle, faHandPointDown, faDotCircle )

ReactDOM.render(<App />, document.getElementById('root'));
