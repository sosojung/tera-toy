import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import { useState } from "react"; // Import를 두번합니다 하나로 합치는 것이 깔끔할 것 같습니다
import BackButton from "@/app/components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Write() { // 컴포넌트 이름이 직관적이지 않고, 헷갈릴 수 있을 것 같습니다 수정하는 것이 좋아보입니다
    const [inputHeight, setInputHeight] = useState(0);
    const { id } = useLocalSearchParams();
    const context = useContext(PostContext);

    if (!context) {
        return <Text>게시물을 불러올 수 없습니다. 다시 시도해 주세요.</Text>; // context가 null일 때 처리
    }

    const { posts } = context;
    const post = posts.find((post) => post.id === Number(id));

    if (!post) {
        return <Text>게시물을 찾을 수 없습니다.</Text>; // post가 없으면 예외 처리
    }
  
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
                      value={post.title}
                    />
                    <TextInput
                      style={[styles.content, { height: Math.max(40, inputHeight) }]}
                      value={post.content}
                      multiline
                      onContentSizeChange={(e) =>
                        setInputHeight(e.nativeEvent.contentSize.height)
                      }
                    /> {/* 이렇게 되어 있으면 읽기만 가능할 것 같습니다 onChangeText를 활용해봅시다*/}
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
