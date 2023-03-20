import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as DetectMMEncoding from '@bigbee.dev/expo-detect-mm-encoding';

export default function App() {
  useEffect(() => {
    const start = performance.now();
    DetectMMEncoding.isUnicode();
    const end = performance.now();
    console.log(`DetectMMEncoding.isUnicode() took ${end - start} ms`);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`Unicode is: ${DetectMMEncoding.isUnicode()}`}</Text>
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
