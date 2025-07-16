import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake10() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const handleConfirmar = () => {
    if (!nome || !numero || !validade || !cvv) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // ✅ Redireciona corretamente para a fake12
    router.push('fake12'); // use apenas 'fake12' sem barra
  };

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Pagamento com Cartão</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome no cartão"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Número do cartão"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        maxLength={19}
        value={numero}
        onChangeText={setNumero}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          placeholder="Validade (MM/AA)"
          placeholderTextColor="#aaa"
          value={validade}
          onChangeText={setValidade}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="CVV"
          placeholderTextColor="#aaa"
          secureTextEntry
          maxLength={4}
          keyboardType="number-pad"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#a17d6f',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    zIndex: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7a4e39',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 60,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#d8c1ad',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#a17d6f',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
