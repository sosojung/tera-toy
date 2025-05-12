import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Register() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>TERA</Text>
            <View>
              <Text style={styles.loginText}>회원가입</Text>
              <View>
                <TextInput style={styles.input} placeholder="이메일" />
                <TextInput style={styles.input} placeholder="아이디" />
                <TextInput style={styles.input} placeholder="비밀번호" />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <TextInput style={styles.confirmInput} placeholder="비밀번호 확인" />
                    <TouchableOpacity style={styles.confirmButton}>
                      <Text style={{fontSize: 15, color: '#fff', fontWeight: 400}}>확인</Text>
                    </TouchableOpacity>
                </View>
              </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/")}>
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: 600}}>회원가입</Text>
                </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    // Container
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    wrapper: {
      width: "100%",
      height: "100%",
      paddingTop: 24,
      paddingHorizontal: 20,
      paddingBottom: 41,
    },

    // Text
    text: {
      fontSize: 50,
      color: "#6C67FF",
      fontWeight: 900,
      textAlign: "center",
      marginTop: 158,
      marginBottom: 60,
    },
    loginText: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 40,
    },

    // Input
    input: {
      width: "100%",
      height: 46,
      padding: 10,
      marginBottom: 8,
      borderRadius: 8,
      fontSize: 15,
      backgroundColor: '#E0DFFF',
      color: "#4D49B5",
    },
    confirmInput: {
      flex: 1,
      width: "100%",
      height: 46,
      margin: 0,
      padding: 10,
      borderRadius: 8,
      fontSize: 15,
      backgroundColor: '#E0DFFF',
      color: "#4D49B5",
    },
    
    // Button
    button: {
      justifyContent: "center",
      width: "100%",
      height: 46,
      padding: 10,
      marginTop: 24,
      marginBottom: 24,
      borderRadius: 8,
      backgroundColor: "#6C67FF",
      alignItems: "center",
    },
    confirmButton: {
        width: 68,
        height: 46,
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: "#6C67FF",
        alignItems: "center",
        justifyContent: "center",
      },
  })
