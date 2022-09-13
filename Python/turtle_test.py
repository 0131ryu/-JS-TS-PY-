import turtle as t

# n = 15
# t.color("purple")
# t.begin_fill()
# for x in range(n):
#     t.forward(50)
#     t.left(360/n)
# t.end_fill()

# m = 50
# t.bgcolor("black")
# t.color("yellow")
# t.speed(0)
# for x in range(m):
#     t.circle(x*2)
#     t.left(360/m)

angle = 100
t.bgcolor("black")
t.color("yellow")
t.speed(0)
for x in range(200):  # 0~199번(200번 실행)
    t.forward(x)
    t.left(angle)
