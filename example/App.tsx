import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { isUnicode } from '@bigbee.dev/expo-detect-mm-encoding';

export default function App() {
  useEffect(() => {
    const start = performance.now();
    isUnicode();
    const end = performance.now();
    console.log(`DetectMMEncoding.isUnicode() took ${end - start} ms`);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`Unicode is: ${isUnicode()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
