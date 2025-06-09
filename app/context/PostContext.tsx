import { createContext } from 'react';

export const PostContext = createContext<{
  posts: {id: number; title: string; content: string; userId: string}[]; // 타입 재사용성이 떨어지는 것 같습니다. 중복되는 내용은 하나로 묶어봅시다
  setPosts: React.Dispatch<
    React.SetStateAction<{ id: number; title: string; content: string; userId: string}[]>
  >; // 완전한 수정 권한이 있는 set을 노출 시키는 것은 위험할 수 있습니다. 간접적으로 값을 수정할 수 있는 함수를 노출시키고, set은 내부에서만 사용하는 것이 안전합니다
} | null>(null);  // 초기값을 null로 주는 것보다 빈 값을 넣는 것이 편리할 것 같습니다