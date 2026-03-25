import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tipsArray: string[] = [
  "Organize sua mesa de trabalho no final do dia. O seu 'eu' do amanhã vai agradecer.",
  "Beba um copo de água assim que acordar para reidratar o corpo e despertar o cérebro.",
  "Antes de comprar algo por impulso, espere 24 horas. Na maioria das vezes, a vontade passa.",
  "Faça pausas regulares durante o trabalho para evitar a fadiga mental e melhorar o foco.",
  "Anote suas três principais tarefas do dia logo pela manhã para manter a produtividade."
];

export default function HomeScreen() {
  const [currentTip, setCurrentTip] = useState<string>('');

  // Sorteia uma dica aleatória
  const handleUpdateTip = (): void => {
    const randomIndex = Math.floor(Math.random() * tipsArray.length);
    setCurrentTip(tipsArray[randomIndex]);
  };

  useEffect(() => {
    handleUpdateTip();
  }, []);

  return (
    <LinearGradient colors={['#e6f0fa', '#d0e3fc']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.headerTitle}>Gerador de Dicas</Text>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="lightbulb-outline" size={50} color="#eab308" />
          </View>
          
          <Text style={styles.tipText}>{currentTip}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleUpdateTip} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Nova Dica</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 70, 
  },
  headerTitle: {
    fontSize: 30, 
    fontWeight: '900', 
    color: '#1e293b',
  },
  card: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width * 0.90, 
    paddingHorizontal: 30,
    paddingTop: 60, 
    paddingBottom: 40,
    borderRadius: 20,
    alignItems: 'center',
    minHeight: 300, 
    justifyContent: 'center',
    shadowColor: '#4785fa', 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  iconCircle: {
    width: 90, 
    height: 90,
    borderRadius: 45, 
    backgroundColor: '#fefce8', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -45, 
    shadowColor: '#fde047', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 12, 
  },
  tipText: {
    fontSize: 20, 
    color: '#334155',
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '700', 
  },
  button: {
    backgroundColor: '#3b82f6',
    width: Dimensions.get('window').width * 0.90, 
    paddingVertical: 20, 
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});