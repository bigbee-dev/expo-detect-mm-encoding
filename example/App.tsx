import { StyleSheet, Text, View } from 'react-native';

import * as DetectMMEncoding from '@bigbee.dev/expo-detect-mm-encoding';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{DetectMMEncoding.hello()}</Text>
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
