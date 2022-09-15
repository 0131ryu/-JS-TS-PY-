# 거북이(t), 악당거북이(te, red), 먹이(ts, green) 3개가 등장
# 일정한 시간마다 거북이와 악당 거북이를 움직이고
# 거북이가 먹이를 먹었는지, 악당 거북이에게 붙잡히지 않았는지 확인

# 타이머 기능 = 0.1초 마다 play함수를 실행하도록 함
import turtle as t
import random

# 악당 거북이 1
te1 = t.Turtle()  # 거북이 추가 시 Turtle은 대문자
te1.shape("turtle")
te1.color("red")
te1.speed(0)
te1.up()
te1.goto(-50, 200)

# 악당 거북이 2
te2 = t.Turtle()  # 거북이 추가 시 Turtle은 대문자
te2.shape("turtle")
te2.color("red")
te2.speed(0)
te2.up()
te2.goto(50, 200)

# 먹이
ts = t.Turtle()
ts.shape("circle")
ts.color("green")
ts.speed(0)
ts.up()
ts.goto(0, -200)

# ←, →, ↑, ↓


def turn_right():  # 오른쪽으로 방향 바꿈
    t.setheading(0)


def turn_left():  # 왼쪽으로 방향 바꿈
    t.setheading(180)


def turn_up():  # 위로 방향 바꿈
    t.setheading(90)


def turn_down():  # 아래로 방향 바꿈
    t.setheading(270)

# 악당 거북이가 하는 행동들


def villain(te):
    ang = te.towards(t.pos())
    te.setheading(ang)  # 악당 거북이가 거북이를 바라보게 함
    te.forward(9)


# 실제 거북이 움직이기
def play():
    t.forward(10)
    # 악당 거북이 1
    villain(te1)
    # 악당 거북이 2
    villain(te2)
    if t.distance(ts) < 12:  # 거북이와 먹이 거리가 12미만이면
        star_x = random.randint(-230, 230)
        star_y = random.randint(-230, 230)
        ts.goto(star_x, star_y)  # 먹이가 랜덤하게 옮김
    if t.distance(te1) >= 12 or t.distance(te2) >= 12:  # 거북이와 악당 거리가 12 이상이면
        t.ontimer(play, 100)  # 0.1초 후 play 함수 실행(계속 진행)
        # 거리가 12 미만이면 게임 실행되지 않음


t.setup(500, 500)
t.bgcolor("orange")
t.shape("turtle")
t.speed(0)
t.up()
t.color("white")
t.onkeypress(turn_right, "Right")
t.onkeypress(turn_left, "Left")
t.onkeypress(turn_up, "Up")
t.onkeypress(turn_down, "Down")
t.listen()
play()
t.mainloop()
