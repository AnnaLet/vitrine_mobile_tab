
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ProdutoCard({ produto, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.categoria}>{produto.categoria}</Text>

      <Text style={styles.nome}>{produto.nome}</Text>

      <Text style={styles.descricao}>
        {produto.descricao}
      </Text>

      <Text style={styles.preco}>
        R$ {produto.preco.toFixed(2).replace('.', ',')}
      </Text>

      <View style={styles.botao}>
        <Text style={styles.botaoTexto}>
          Ver detalhes →
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
  },
  categoria: {
    color: '#2563EB',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 12,
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#2563EB',
    padding: 11,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
