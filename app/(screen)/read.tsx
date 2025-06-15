import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../components/common/backButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import commonStyles, { buttonStyles } from "../styles/common";

export default function Read() {
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
              <Text style={{fontSize:24, fontWeight:'bold'}}>바다와 나비</Text>
              <Image 
                source={require('@/app/assets/teraLogo.png')}
                alt="User 1"
                style={{ width: 120, height: 120, borderRadius: 8 }}
              />
            </View>
            <View style={styles.text}>
              <Text style={{paddingVertical: 16, paddingHorizontal:12, fontSize: 16, fontWeight:'bold',}}>
                아무도 그에게 수심을 일러준 일이 없기에 
                흰나비는 도무지 바다가 무섭지 않다.
                <br /><br />
                청무우밭인가 해서 내려갔다가는
                어린 날개가 물결에 절어서
                공주처럼 지쳐서 돌아온다
                <br /><br />
                삼월달 바다가 꽃이 피지 않아서 서글픈
                나비 허리에 새파란 초생달이 시리다
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.textInfo}>
                <Text style={styles.writerAndDate}>by</Text>
                <Text style={[styles.writerAndDate, {color:'#6C67FF'}]}>사용자1</Text>
              </View>
              <View style={styles.textInfo}>
                <Text style={styles.writerAndDate}>작성일</Text>
                <Text style={[styles.writerAndDate, {color:'#6C67FF'}]}>2025/04/07</Text>
              </View>
            </View>
            <View style={styles.commentFrom}>
              <TextInput style={styles.textHolder}placeholder="댓글을 작성해주세요"/>
              <TouchableOpacity style={buttonStyles.button}>
                <Text style={buttonStyles.buttonText}>작성</Text>
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
  