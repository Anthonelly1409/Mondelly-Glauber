import React from 'react';
import { View, Text, TextInput, Button } from 'react-native'; 
import { Link } from 'expo-router';

export default function Fake1() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>MONDELLY</Text>
      <Text style={{ marginBottom: 5 }}>Login:</Text>
      <TextInput placeholder="E-mail" style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Senha" secureTextEntry style={{ borderWidth: 1, marginBottom: 20, padding: 8 }} />
      <Button title="Entrar" onPress={() => {}} />

      {/* Link para Fake2 */}
      <Link href="/fake2" asChild>
        <Button title="Ir para Cadastro" />
      </Link>
    </View>
  );
}
