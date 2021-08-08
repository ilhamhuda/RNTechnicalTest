import React from 'react';

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import Route from './routes'
import {store} from './redux'

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const App = () => {
  return (
   <Provider store={store}>
     <NavigationContainer>
        <Route />
     </NavigationContainer>
   </Provider>
  );
};


export default App;
