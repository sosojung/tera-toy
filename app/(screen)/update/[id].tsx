import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import BackButton from "@/app/components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import commonStyles, { buttonStyles } from "@/app/styles/common";

export default function UpdataPost() {
    const [inputHeight, setInputHeight] = useState(0);
    const { id } = useLocalSearchParams();
    const context = useContext(PostContext);

    const { posts } = context;
    const post = posts.find((post) => post.id.toString() === id);

    if (!post) {
        return <Text>게시물을 찾을 수 없습니다.</Text>; // post가 없으면 예외 처리
    }

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
  
    return (
        <SafeAreaView style={commonStyles.container}>
          <View style={commonStyles.wrapper}>
            <View style={commonStyles.writeWrap1}>
                  <BackButton />
                  <TouchableOpacity style={buttonStyles.button}>
                      <Text style={buttonStyles.buttonText}>완료</Text>
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
                      value={title}
                      onChangeText={setTitle}
                    />
                    <TextInput
                      style={[styles.content, { height: Math.max(40, inputHeight) }]}
                      value={content}
                      multiline
                      onContentSizeChange={(e) =>
                        setInputHeight(e.nativeEvent.contentSize.height)
                      }
                      onChangeText={setContent}
                    />
                </View>
              </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  writeWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
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
