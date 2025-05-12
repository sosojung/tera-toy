import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import BackButton from "../components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Write() {
  const [inputHeight, setInputHeight] = useState(0);
  
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.writeWrap1}>
                  <BackButton />
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>완료</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.contents}>
                <View style={styles.writeWrap2}>
                    <TouchableOpacity style={styles.addImageButton}>
                        <Ionicons name="image-outline" size={25} color="#6C67FF" />
                        <Text style={styles.addImageText}>이미지 첨부</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                      style={styles.title}
                      value={'바다와 나비'}
                    />
                    <TextInput
                      style={[styles.content, { height: Math.max(40, inputHeight) }]}
                      value={'아무도 그에게 수심을 일러준 일이 없기에 흰나비는 도무지 바다가 무섭지 않다.\n\n청무우밭인가 해서 내려갔다가는 어린 날개가 물결에 절어서 공주처럼 지쳐서 돌아온다\n\n삼월달 바다가 꽃이 피지 않아서 서글픈 나비 허리에 새파란 초생달이 시리다'}
                      multiline
                      onContentSizeChange={(e) =>
                        setInputHeight(e.nativeEvent.contentSize.height)
                      }
                    />
                </View>
              </View>
          </View>
        </SafeAreaView>
    )
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
    paddingTop: 78,
    paddingHorizontal: 20,
    paddingBottom: 41,
  },
  writeWrap1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  writeWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },

  button: {
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#6C67FF',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#6C67FF',
    gap: 10,
  },
  addImageText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C67FF',
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 12,
    paddingLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#BFBFBF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contents: {
    paddingTop: 8,
  }
})
