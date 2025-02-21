import React from 'react';
import {SafeAreaView} from 'react-native';
import Registration from './screens/Registration/Registration';
import './ReactotronConfig.js';
const App = () => {
  return (
    <SafeAreaView style={{padding: 16}}>
      <Registration />
    </SafeAreaView>
  );
};

export default App;
