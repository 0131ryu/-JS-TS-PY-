# def sum_func(n):
#     s = 0
#     for x in range(1, n+1):
#         s = s+x
#     return s


# print(sum_func(10))  # 55
# print(sum_func(100))  # 5050


# def factorial(n):
#     fact = 1
#     for x in range(1, n+1):
#         fact = fact * x
#     return fact


# print(factorial(5))  # 120(1*2*3*4*5)
# print(factorial(10))  # 3628800(1*2*3*4*5*6*7*8*9*10)

import turtle as t


def polygon(n):
    for x in range(n):
        t.forward(50)
        t.left(360/n)


def polygon2(n, a):
    for x in range(n):
        t.forward(a)
        t.left(360/n)


polygon(3)
polygon(5)

t.up()  # 펜을 종이에서 들고
t.forward(100)  # 100만큼 이동한 후
t.down()  # 펜을 종이에 내린다

polygon2(3, 75)
polygon2(5, 100)
