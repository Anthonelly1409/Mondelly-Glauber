import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function fake2() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>MONDELLY</Text>
      <Text style={styles.sectionTitle}>Cadastro:</Text>

      {/* Campos de cadastro */}
      {[
        "E-mail", "Nome", "Data de nascimento", "CPF", "RG", "CEP", "UF",
        "DDD", "Telefone", "Endereço", "Bairro", "Cidade", "Sexo"
      ].map((placeholder) => (
        <TextInput
          key={placeholder}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#7f3d1c"
        />
      ))}

      <Text style={styles.sectionTitle}>Informações da conta:</Text>

      {["Número da conta", "Agência", "Banco", "CVV"].map((placeholder) => (
        <TextInput
          key={placeholder}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#7f3d1c"
        />
      ))}

      {/* Botão para ir para a tela de boas-vindas */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Entrar"
          color="#7f3d1c"
          onPress={() => router.push('/fake3')}
        />
      </View>

      {/* Links adicionais */}
      <View style={styles.buttonWrapper}>
        <Link href="/fake3" asChild>
          <Button title="Ir para Bem-vindo" color="#a65c33" />
        </Link>
      </View>

      <View style={styles.buttonWrapper}>
        <Link href="/fake1" asChild>
          <Button title="Voltar ao Login" color="#c48f63" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5ede3',
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    color: '#7f3d1c',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#7f3d1c',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c9b8a2',
    borderRadius: 8,
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#fffdfb',
    color: '#7f3d1c',
  },
  buttonWrapper: {
    marginTop: 12,
  },
});
