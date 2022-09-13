import turtle as t
import random

t.shape("turtle")
t.speed(0)

for x in range(100):
    a = random.randint(1, 360)  # 1~360 안에서 아무 수나 고름
    t.setheading(a)
    t.forward(10)

for x in range(100):
    a = random.randint(1, 360)
    t.setheading(a)
    b = random.randint(10, 40)
    t.forward(b)
