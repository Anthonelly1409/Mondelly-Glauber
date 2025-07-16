import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>MONDELLY</Text>
        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>login</Text>
            </Pressable>
          </Link>

          <Link href="/cadastro" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>cadastro</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b99b82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#f9f7f4',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7f3d1c',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'serif',
    letterSpacing: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#e5e2df',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonText: {
    color: '#333',
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  box: {
    width: 180,
    height: 100,
    backgroundColor: '#ece9e6',
    borderRadius: 6,
    marginTop: 20,
  },
});
