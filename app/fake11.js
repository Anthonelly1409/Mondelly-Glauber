import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Clipboard, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake11() {
  const router = useRouter();
  const chavePix = 'pix@mondelly.com.br';
  const [tempoRestante, setTempoRestante] = useState(86400); // 24h em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const s = String(segundos % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const copiarChave = () => {
    Clipboard.setString(chavePix);
    Alert.alert('Chave Pix copiada', chavePix);
  };

  const confirmarPagamento = () => {
    if (tempoRestante <= 0) {
      Alert.alert('Tempo expirado', 'A janela de pagamento expirou.');
      return;
    }
    Alert.alert('Pagamento confirmado!', 'Seu Pix foi recebido com sucesso.');
    router.replace('/fake12'); // Substitui a tela por fake12
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Pagamento via Pix</Text>

      <Image
        source={require('../assets/images/qr-code.png')}
        style={styles.qrCode}
        resizeMode="contain"
      />

      <Text style={styles.pixText}>Chave Pix:</Text>
      <Text style={styles.pixKey}>{chavePix}</Text>

      <TouchableOpacity style={styles.copyButton} onPress={copiarChave}>
        <Text style={styles.copyButtonText}>Copiar chave Pix</Text>
      </TouchableOpacity>

      <Text style={styles.timerLabel}>Tempo restante para pagamento:</Text>
      <Text style={styles.timer}>{formatarTempo(tempoRestante)}</Text>

      <TouchableOpacity
        style={[styles.confirmButton, tempoRestante === 0 && { backgroundColor: '#ccc' }]}
        onPress={confirmarPagamento}
        disabled={tempoRestante === 0}
      >
        <Text style={styles.confirmText}>
          {tempoRestante === 0 ? 'Tempo expirado' : 'Confirmar pagamento'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    padding: 20,
    alignItems: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7a4e39',
    marginBottom: 20,
    textAlign: 'center',
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  pixText: {
    fontSize: 14,
    color: '#5a4234',
  },
  pixKey: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7a4e39',
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#be8e80',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 25,
  },
  copyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  timerLabel: {
    fontSize: 13,
    color: '#7a4e39',
  },
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a17d6f',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#a17d6f',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
