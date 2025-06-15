import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import commonStyles, { inputStyles } from "../styles/common";

export default function Register() {
    const router = useRouter();

    return (
        <SafeAreaView style={commonStyles.container}>
          <View style={[commonStyles.wrapper, {paddingTop: 24}]}>
            <Text style={styles.text}>TERA</Text>
            <View>
              <Text style={styles.loginText}>회원가입</Text>
              <View style={{gap: 8,}}>
                <TextInput style={inputStyles.input} placeholder="이메일" />
                <TextInput style={inputStyles.input} placeholder="아이디" />
                <TextInput style={inputStyles.input} secureTextEntry={true} placeholder="비밀번호" />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <TextInput style={styles.confirmInput} secureTextEntry={true} placeholder="비밀번호 확인" />
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
