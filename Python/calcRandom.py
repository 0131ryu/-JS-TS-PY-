import random

a = random.randint(1, 30)
b = random.randint(1, 30)

print(a, "+", b, "=")
x = input()
c = int(x)

if a + b == c:
    print("천재!")
else:
    print("다시 시도해주세요!")

# print("[1-10]")
# x = 1
# while x <= 10:
#     print(x)
#     x = x + 1

# s1 = 0
# s2 = 0
# x = 1
# y = 1
# while x <= 10:
#     s1 = s1 + x
#     print("[while] x:", x, "sum:", s1)
#     x = x + 1

# for x in range(10):
#     s2 = s2 + y
#     print("[for] y:", y, "sum:", s2)
#     y = y + 1

# n = random.randint(1, 30)

# while True:
#     x = input("맞혀 보세요? ")
#     g = int(x)
#     if g == n:
#         print("정답")
#         break
#     if g < n:
#         print("너무 작아요")
#     if g > n:
#         print('너무 커요')
