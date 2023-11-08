import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./Styles";
import { Participant } from "../../components/Participant/Index";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  // Função para adicionar participantes
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existe!", "Já existe um participante com esse nome!");
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  // Função para remover participantes
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "sim",
        onPress: () => setParticipants((prevState) => prevState.filter((participant) => participant !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 7 de novembro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.listTxt}>Ningém chegou no evento ainda? Adicione participantes na sua lista!</Text>}
        renderItem={({ item }) => <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />}
      />
    </View>
  );
}
