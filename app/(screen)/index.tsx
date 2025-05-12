import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>TERA</Text>
        <View>
          <Text style={styles.loginText}>로그인</Text>
          <View>
            <TextInput style={styles.input} placeholder="아이디" />
            <TextInput style={styles.input} placeholder="비밀번호" />
          </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/home")}>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 600}}>로그인</Text>
            </TouchableOpacity>
          <Text style={styles.registerText}>계정 정보가 없다면 <Link href="/register" style={styles.registerLink}>회원가입</Link>을 해주세요</Text>
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
  registerText: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
  },
  registerLink: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: "#6C67FF",
  },

  // Input
  input: {
    width: "100%",
    height: 46,
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#E0DFFF',
    color: "#4D49B5",
  },
  button: {
    width: "100%",
    height: 46,
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: "#6C67FF",
    alignItems: "center",
    justifyContent: "center",
  },
})
