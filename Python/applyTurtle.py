import turtle as t

# t.bgcolor("black")
# t.speed(0)

# for x in range(200):
#     if x % 3 == 0:
#         t.color("red")
#     if x % 3 == 1:
#         t.color("yellow")
#     if x % 3 == 2:
#         t.color("blue")
#     t.forward(x * 2)
#     t.left(119)


# def turn_right():
#     t.setheading(0)
#     t.forward(10)


# def turn_up():
#     t.setheading(90)
#     t.forward(10)


# def turn_left():
#     t.setheading(180)
#     t.forward(10)


# def turn_down():
#     t.setheading(270)
#     t.forward(10)


# def blank():
#     t.clear()


# t.shape("turtle")                 # 거북이 모양을 사용합니다.
# t.speed(0)                        # 거북이 속도를 가장 빠르게 지정합니다.
# t.onkeypress(turn_right, "Right")  # →를 누르면 turn_right 함수를 실행합니다.
# t.onkeypress(turn_up, "Up")
# t.onkeypress(turn_left, "Left")
# t.onkeypress(turn_down, "Down")
# t.onkeypress(blank, "Escape")     # ESC를 누르면 blank 함수를 실행합니다.
# t.listen()                        # 거북이 그래픽 창이 키보드 입력을 받습니다.
# t.mainloop()

t.speed(0)
t.pensize(2)
t.hideturtle()
t.onscreenclick(t.goto)
t.mainloop()
