import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import BackButton from "@/app/components/common/backButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import commonStyles, { buttonStyles } from "@/app/styles/common";

export default function Read() {
    const { id } = useLocalSearchParams();
    const context = useContext(PostContext);

    if (!context) {
        return <Text>게시물을 불러올 수 없습니다. 다시 시도해 주세요.</Text>; // context가 null일 때 처리
    }

    const { posts } = context;
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <Text>게시물을 찾을 수 없습니다.</Text>; // post가 없으면 예외 처리
      }

    return (
        <SafeAreaView style={commonStyles.container}>
          <View style={commonStyles.wrapper}>
            <View style={commonStyles.writeWrap1}>
              <BackButton />
              <View style={{flexDirection:'row', alignItems:'center', gap:4,}}>
                <AntDesign name="heart" size={16} color="#6C67FF" />
                <Text>3</Text>
              </View>
            </View>
            <View style={styles.titleAndImage}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>{post.title}</Text>
              <Image 
                source={require('@/app/assets/teraLogo.png')}
                alt="User 1"
                style={{ width: 120, height: 120, borderRadius: 8 }}
              />
            </View>
            <View style={styles.text}>
              <Text style={{paddingVertical: 16, paddingHorizontal:12, fontSize: 16, fontWeight:'bold',}}>
                {post.content}
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.textInfo}>
                <Text style={styles.writerAndDate}>by</Text>
                <Text style={[styles.writerAndDate, {color:'#6C67FF'}]}>{post.userId}</Text>
              </View>
              <View style={styles.textInfo}>
                <Text style={styles.writerAndDate}>작성일</Text>
                <Text style={[styles.writerAndDate, {color:'#6C67FF'}]}>{id}</Text>
              </View>
            </View>
            <View style={styles.commentFrom}>
              <TextInput style={styles.textHolder}placeholder="댓글을 작성해주세요"/>
              <TouchableOpacity style={buttonStyles.button}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'white'}}>작성</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.comment}>
              <View style={styles.profile}>
                <Image 
                  source={require('@/app/assets/teraLogo.png')}
                  alt="User 1"
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
                <Text style={{fontSize:18, fontWeight:'bold'}}>사용자2</Text>
              </View>
              <View style={styles.commentText}>
                <Text style={{fontSize:14, fontWeight:'bold'}}>좋은 글이네요</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleAndImage: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    text: {
      marginTop: 12,
    },
    info: {
      flexDirection: 'row',
      marginTop: 60,
      padding: 12,
      gap: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#BFBFBF',
    },
    textInfo: {
      flexDirection:'row',
      gap: 3,
    },
    writerAndDate: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    commentFrom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      gap: 12,
    },
    textHolder: {
      width: '100%',
      height: '100%',
      padding: 8,
      borderRadius: 8,
      backgroundColor: '#E6E6E6',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#808080',
    },
    comment: {
      paddingTop: 8,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#BFBFBF',
    },
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    commentText: {
      paddingVertical: 12,
    }
  })
  