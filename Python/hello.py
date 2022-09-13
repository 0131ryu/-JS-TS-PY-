import turtle as t
for x in range(10):
    print("hello")

for x in range(3):
    print(100)  # 들여쓰기(빈칸 네 개 뒤에 입력)
    print(200)  # 들여쓰기(빈칸 네 개 뒤의 입력)
print(300)  # 내어쓰기(빈칸 없이 바로 입력)


# 삼각형
for x in range(3):  # 3번 반복
    t.forward(100)
    t.left(120)

# 사각형
for x in range(4):
    t.forward(100)
    t.left(90)

# 원 그리기
t.circle(50)


print(list(range(5)))  # [0, 1, 2, 3, 4]
print(list(range(0, 5)))  # [0, 1, 2, 3, 4]
print(list(range(1, 11)))  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(range(1, 4)))  # [1, 2, 3]

print("[0-4]")
for x in range(5):
    print(x)  # 0 1 2 3 4

print("[1-10]")
for x in range(1, 11):
    print(x)  # 0 1 2 3 4 5 6 7 8 9 10

# 1~10까지 합계 구하기
s = 0  # 합계를 구하는 변수 s
for x in range(1, 10+1):
    s = s+x
    print("x: ", x, "sum: ", s)
