import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  const [helados, setHelados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const adaptados = data.map(item => ({
          ...item,
          title: item.title.replace(/Product|Shirt|Bag/gi, "Helado")
        }));
        setHelados(adaptados);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  const filtrados = helados.filter(h => h.title.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Buscar sabor..."
        value={busqueda}
        onChangeText={setBusqueda}
        style={{ padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10 }}
      />

      <FlatList
        data={filtrados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detail", item)}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Image source={{ uri: item.image }} style={{ width: 70, height: 70, marginRight: 10 }} />
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text>🍦 ${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}