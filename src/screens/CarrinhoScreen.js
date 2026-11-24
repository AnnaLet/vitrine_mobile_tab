
import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function CarrinhoScreen({
  carrinho,
  onRemover,
  onFinalizar,
}) {
  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  function finalizarPedido() {
    if (carrinho.length === 0) {
      Alert.alert(
        'Carrinho vazio',
        'Adicione produtos antes de finalizar.'
      );
      return;
    }

    Alert.alert(
      'Pedido realizado!',
      `Compra finalizada com sucesso!\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`,
      [
        {
          text: 'OK',
          onPress: onFinalizar,
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meu Carrinho
      </Text>

      <View style={styles.resumo}>
        <Text style={styles.totalLabel}>
          Valor Total:
        </Text>

        <Text style={styles.total}>
          R$ {total.toFixed(2).replace('.', ',')}
        </Text>
      </View>

      <FlatList
        data={carrinho}
        keyExtractor={(item, index) =>
          `${item.id}-${index}`
        }
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Seu carrinho está vazio.
          </Text>
        }
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.informacoes}>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.preco}>
                R$ {item.preco.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => onRemover(index)}
            >
              <Text style={styles.textoRemover}>
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={finalizarPedido}
      >
        <Text style={styles.textoFinalizar}>
          Finalizar Pedido
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  resumo: {
    backgroundColor: '#1E293B',
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
  },
  totalLabel: {
    color: '#CBD5E1',
    fontSize: 14,
  },
  total: {
    color: '#38BDF8',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  lista: {
    paddingBottom: 15,
    flexGrow: 1,
  },
  vazio: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 16,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  informacoes: {
    flex: 1,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  preco: {
    color: '#059669',
    fontWeight: 'bold',
    marginTop: 5,
  },
  botaoRemover: {
    backgroundColor: '#FEE2E2',
    padding: 9,
    borderRadius: 7,
  },
  textoRemover: {
    color: '#DC2626',
    fontWeight: 'bold',
  },
  botaoFinalizar: {
    backgroundColor: '#059669',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  textoFinalizar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
