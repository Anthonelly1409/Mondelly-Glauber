// app/fake4.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake4() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>MONDELLY</Text>

      {/* Perfil */}
      <View style={styles.profileSection}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileEmoji}>👤</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>NOME DO USUÁRIO</Text>
          <Text style={styles.bio}>BIOGRAFIA</Text>

          {/* Botão discreto para navegar */}
          <Pressable onPress={() => router.push('/fake5')}>
            <Text style={styles.linkText}>Ver looks publicados</Text>
          </Pressable>
        </View>
      </View>

      {/* Publicações vazias */}
      <View style={styles.emptySection}>
        <Text style={styles.emptyTitle}>
          VOCÊ AINDA NÃO FEZ{'\n'}NENHUMA PUBLICAÇÃO
        </Text>
        <Text style={styles.emptyDescription}>
          VIRE UM ESTILISTA PUBLICANDO SUAS IDEIAS QUE ESTÃO À VENDA OU APENAS COMPARTILHE SUAS PERSPECTIVAS
        </Text>
      </View>

      {/* Rodapé com botões */}
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>🤍</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonIcon}>＋</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.active]}>
          <Text style={[styles.buttonIcon, styles.activeIcon]}>👤</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b99e88',
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    color: '#8c3a1e',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEmoji: {
    fontSize: 24,
  },
  userInfo: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
  },
  bio: {
    fontSize: 12,
    color: '#555',
  },
  linkText: {
    fontSize: 12,
    color: '#8c3a1e',
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  emptySection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  emptyTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
  },
  emptyDescription: {
    fontSize: 11,
    textAlign: 'center',
    color: '#444',
  },
  footer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonIcon: {
    fontSize: 18,
  },
  active: {
    backgroundColor: '#000',
  },
  activeIcon: {
    color: '#fff',
  },
});
