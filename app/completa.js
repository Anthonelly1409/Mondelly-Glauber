import { SafeAreaView, View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'; // IMPORTANTE para navegação

export default function Completa() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerLink}>procurar</Text>
        <Text style={styles.headerLink}>carrinho</Text>
        <Text style={styles.logo}>MONDELLY</Text>
        <Text style={styles.headerLink}>eventos</Text>
        <Text style={styles.headerLink}>favoritos</Text>
      </View>

      {/* Campo de busca */}
      <View style={styles.searchWrapper}>
        <FontAwesome name="search" size={14} color="#5C5044" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="O que você está procurando?"
          placeholderTextColor="#5C5044"
          style={styles.searchInput}
        />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Ionicons name="heart" size={20} color="#fff" />
        </Pressable>

        <Pressable style={styles.footerButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </Pressable>

        <Link href="/fake4" asChild>
          <Pressable style={styles.footerButton}>
            <Ionicons name="person" size={20} color="#fff" />
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2EF',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  headerLink: {
    fontSize: 12,
    color: '#5C5044',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#AC6C47',
  },
  searchWrapper: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFD3C4',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#5C5044',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    paddingBottom: 20,
  },
  footerButton: {
    backgroundColor: '#8C6245',
    padding: 12,
    borderRadius: 10,
  },
});
