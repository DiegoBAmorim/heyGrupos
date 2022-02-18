import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Search = () => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite o nome da sala"
          style={styles.textInput}
          onChangeText={text => setInput(text)}
          autoCapitalize={'none'}
        />
        <TouchableOpacity style={styles.buttonSearch}>
          <MaterialIcon name="search" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 14,
  },
  textInput: {
    backgroundColor: '#ebebeb',
    marginLeft: 10,
    height: 50,
    width: '80%',
    padding: 5,
    borderRadius: 5,
  },
  buttonSearch: {
    backgroundColor: '#2e54d4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    marginLeft: 5,
    marginRight: 10,
  },
});
