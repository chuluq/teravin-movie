import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import store from './redux/store';
import Home from './screens/home';
import Error from './components/Error';
import Loading from './components/Loading';

export default function App() {
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setConnected(state.isConnected);
    });
  });

  return (
    <Provider store={store}>
      {connected === null ? (
        <Loading />
      ) : connected === true ? (
        <Home />
      ) : (
        <Error errorMessage='Not connected to Internet' />
      )}
    </Provider>
  );
}
