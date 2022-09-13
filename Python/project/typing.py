import random
import time

w = ["cat", "dog", "fox", "monkey", "mouse", "panda", "frog", "snake", "wolf"]
n = 1  # 문제 번호
print("[타자 게임 : 나오는 단어를 빠르게 치기] 준비되면 엔터!")
input()
start = time.time()

# q = random.choice(w)
q = (''.join(random.sample(w, 1)))
print(q)

while n <= 5:
    print("*문제", n)
    print(q)
    x = input()
    if q == x:
        print("통과")
        n = n + 1
        w.remove(q)
        print(w)
        q = (''.join(random.sample(w, 1)))  # 새 문제를 다시 뽑는다
    else:
        print("오타! 다시 도전!")

end = time.time()
et = end - start
et = format(et, ".2f")  # 소수점 둘째 자리까지만 표시
print("타자 시간 : ", et, "초")
