import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/Router'
import './sass/index.sass'

// third-party
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faHandPointDown, faCircle, faDotCircle, faSquare } from '@fortawesome/free-regular-svg-icons'
library.add( faHandPointDown, faCircle, faDotCircle, faSquare, faCheckSquare )

ReactDOM.render(<Router />, document.getElementById('root'));
