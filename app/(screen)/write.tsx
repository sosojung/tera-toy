import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import BackButton from "../components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import {PostContext} from '@/app/context/PostContext'

export default function Write() {
  const [inputHeight, setInputHeight] = useState(0); // 기본값을 아래 Max와 맞추어 40정도로 주는 것도 괜찮습니다

  const router = useRouter(); // 페이지 이동에 사용
  const context = useContext(PostContext);
  if (!context) return null; // 이런식으로 처리하게 될 경우 추후에 힘들어질 가능성이 있습니다, Error를 던지는 것이 훨씬 좋은 선택일 것 같습니다

  const { posts, setPosts } = context;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("1");

  const handlePost = () => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(), // id는 중복될 가능성이 높기 때문에 uuid와 같은 독립적인 명칭을 사용하는 것이 좋을 것 같습니다
      title,
      content,
      userId,
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setContent("");

    router.push("/home");
  }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.writeWrap1}>
                  <BackButton />
                  <TouchableOpacity style={styles.button} onPress={handlePost}>
                      <Text style={styles.buttonText}>게시</Text>
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
                      placeholder="제목 입력"
                      value={title}
                      onChangeText={setTitle} {/* 바로 넘기는 것도 좋지만 지금처럼 단순한 컴포넌트가 아닐 경우에는 기능이 추가되거나 디버깅 용도로 별도 함수로 빼는 것도 좋습니다*/}
                    />
                    <TextInput
                      style={[styles.content, {height: Math.max(40, inputHeight)}]}
                      value={content}
                      placeholder="내용 입력"
                      multiline
                      onChangeText={setContent} {/* 바로 넘기는 것도 좋지만 지금처럼 단순한 컴포넌트가 아닐 경우에는 기능이 추가되거나 디버깅 용도로 별도 함수로 빼는 것도 좋습니다*/}
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
  }, // 자주 쓰는 스타일은 공통화 하는 것이 좋습니다
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
    color: '#808080',
  },
  content: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  contents: {
    paddingTop: 8,
  }
})
