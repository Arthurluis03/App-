import { StyleSheet, View } from 'react-native';
import Title from './src/Components/Title/Title.js';
import Modal from './src/Components/Modal/Modal.js';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Title />
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },

});