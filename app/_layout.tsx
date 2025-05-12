import { Stack } from "expo-router";
import { useState } from "react";
import {PostContext} from '@/app/context/PostContext'

export default function RootLayout() {
  const [posts, setPosts] = useState([
    { id: 1, title: "이것이 보인다면 성공", content: "축하합니다~", userId: "사용자1" },
    { id: 2, title: "와 이것도 보인다고?", content: "대박!", userId: "사용자2" },
    { id: 3, title: "유유유유유유유유", content: "마그네릭~~", userId: "사용자1" },
    { id: 4, title: "터치마이바디", content: "우리 기분은 파라다이스", userId: "사용자2" },
    { id: 5, title: "신사숙녀여러분", content: "아직 넌 왜 눈치를 못 채니", userId: "사용자1" },
    { id: 6, title: "블랙맘바", content: "맘맘맘맘바", userId: "사용자1" },
    { id: 7, title: "첫 만남은 어!려!워!", content: "박수 한번 쳐주세요", userId: "사용자3" },
    { id: 8, title: "이야이야이야이야이에오오", content: "두구두구두구두쿵짝짝", userId: "사용자3" },
  ]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <Stack>
        <Stack.Screen
          name="(screen)/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/register"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/write"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/read/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/user"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(screen)/update/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </PostContext.Provider>
  );
}
