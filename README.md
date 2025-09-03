# data-structure

- 자료구조를 왜 공부하는가

  - 알고리즘과 연관되었고, 비전공자인 나에게는 기본 지식이 필요하기 때문에 공부하게 되었다.
  - 이로써 좀더 코딩테스트 또는 면접에도 대답을 보다 수월하게 할 수 있게 함에 있다.

- 링크
  - 제로초 강의 : [인프런](https://www.inflearn.com/course/%EB%B9%84%EC%A0%84%EA%B3%B5%EC%9E%90-%EC%A0%84%EA%B3%B5%EC%9E%90-%EB%94%B0%EB%9D%BC%EC%9E%A1%EA%B8%B0-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-javascript?inst=7e8cf207&utm_source=instructor&utm_medium=referral&utm_campaign=inflearn_%ED%8A%B8%EB%9E%98%ED%94%BD_promotion-link)
  - 관련 git : [깃 소스](https://github.com/zerocho/cs-datastructure)

## 시간복잡도

- 요약

## 시간복잡도란?

알고리즘이 문제를 해결하는데 걸리는 시간. 입력크기에 비례하여 연산 수가 얼마나 증가하는지를 나타냄.
( 공간복잡도 : 메로리를 얼마나 차지하는지. 대부분의 경우는 따지지 않는다. )

최선보다 최악을 더 많이 본다.작업할때 최악의 경우를 피하기 위해 주의깊게 봐야한다 (빅오 로테이션)

O(1) - 제일 최선
O(log n)
O(n)
O(n log n)
O(n2) - 까지만 허용
O(n3) - 마지노선

![시간복잡도](/images/Time_complexity.png)

## 연결리스트

### 배열

현대적인 javascript 배열이며, 자료구조를 배울 때 방해가 된다. 배열만 생각하면 자료구조를 못배우게 된다.
배열이 없었다면 어떻게 되었을까? 거기에서 시작이 된다. 이런 배열을 메모리(2차원 배열)라고 생각하면 현재 배열이 얼마나 훌륭한지 알 수 있다.

앞으로 배열을 찾을때, 메모리를 보고 데이터를 찾는다. 배열에 대해 값을 찾는데, 알수 없는 값을 있을때는 다음칸에 뭐가 있는지 힌트를 주고 있다.
서로서로 사슬처럼 걸려있는 것을 연결 리스트( LinkedList)라 한다.

어떤 특정값을 찾으려면 앞에서 순서대로 하나씩 보면서 나가야 한다.
찾고싶은게 마지막이면 -> 최악의 경우 O(n)
값을 넣고 싶다면, 처음부터 넘어가면서 마지막에 다음값이 없는 요소를 보고 넣는다. (수정과 삭제 할 때도 마찬가지로 끝까지 간다) -> 수정, 삭제, 삽입, 조회 O(n)
연결리스트 전체로 봤을때 시간복잡도는 O(n)으로 무난하다.

_단점:_ 다음것을 찾을 수 있지만, 이전 값을 찾을 수 없다.

![연결리스트](/images/linkedlist.png)

## 스택 큐

[강의 요약](https://www.notion.so/Study-c6b38ef02dcd4b279e7a605515344458?p=25a1ede3f1b580d39c67c7895430c29e&pm=s)

![스택](/images/stack_queue.png)

## 이진트리

[강의 요약](https://www.notion.so/4-2621ede3f1b580e7954ef962b35e81dc?source=copy_link)
![이진트리](/images/binarysearchtree.png)
