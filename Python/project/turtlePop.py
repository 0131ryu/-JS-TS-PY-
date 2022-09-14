import turtle as t
import random


def turn_up():
    t.left(2)  # ↑ 누르면 거북이 왼쪽으로 2도


def turn_down():
    t.right(2)  # ↓ 누르면 거북이 오른쪽으로 2도


def fire():
    ang = t.heading()  # 스페이스바 누르면 발사하도록 각도 기억
    # 거북이가 땅 위에 존재(대포가 날아가는 동안 거북이 대포이 위치와 각도가 계속 변함)
    while t.ycor() > 0:  # "현재" 위치의 y좌표가 0보다 크면
        t.forward(15)  # 15만큼 앞으로 이동
        t.right(5)  # 오른쪽으로 5도
    global sc
    global scGood
    global scBad
    print("inner sc", sc)
    print("inner scBad", scBad)
    print("inner scGood", scGood)
    # 거북이가 땅에 닿았을 때
    d = t.distance(target, 0)  # 현재 위치와 점(target, 0)의 거리 구함
    # 거북이를 x혹은 y좌표를 지정한 위치로 이동(여기서는 y좌표, x는 setx())
    t.sety(random.randint(10, 100))

    if(sc < 5):
        if d < 25:  # 거리차이가 25미만이면 명중 성공
            t.color("blue")
            t.write("Good!", False, "center", ("", 15))
            sc += 1
            scGood += 1
        else:
            t.color("red")
            t.write("Bad!", False, "center", ("", 15))
            sc += 1
            scBad += 1
        t.color("black")  # 검은색으로 되돌림
        t.goto(-200, 10)  # 처음 발사한 곳으로 되돌림
        t.setheading(ang)

    if (sc == 5):
        t.goto(0, -120)
        t.color("black")
        t.write("Done!!", False, "center", ("", 12))
        t.goto(0, -135)
        t.write("총 시도 횟수 : ", False, "center", ("", 12))
        t.goto(50, -135)
        t.write(sc, False, "center", ("", 12))
        t.goto(0, -160)
        t.color("blue")
        t.write("성공한 횟수 : ", False, "center", ("", 12))
        t.goto(50, -160)
        t.write(scGood, False, "center", ("", 12))
        t.goto(0, -180)
        t.color("red")
        t.write("실패한 횟수 : ", False, "center", ("", 12))
        t.goto(50, -180)
        t.write(scBad, False, "center", ("", 12))


sc = 0  # 시도횟수
scGood = 0  # 성공횟수
scBad = 0  # 실패횟수
print("sc", sc)

# 땅을 그림
t.goto(-300, 0)  # 좌표 (-300, 0)으로 이동
t.down()
t.goto(300, 0)  # 좌표 (300, 0)으로 이동

# 목표지점
target = random.randint(50, 150)  # 50 ~150 사이의 임의의 수 지정
t.pensize(3)
t.color("green")
t.up()
t.goto(target - 25, 2)
t.down()
t.goto(target+25, 2)

# 거북이 처음 발사한 곳으로 되돌림
t.color("black")
t.up()
t.goto(-200, 10)
t.setheading(20)

# 거북이 동작 설정
t.onkeypress(turn_up, "Up")  # ↑ 누르면 turn_up 실행
t.onkeypress(turn_down, "Down")  # ↓ 누르면 turn_down 실행
t.onkeypress(fire, "space")  # space 누르면 fire 함수 실행
t.listen()  # 거북이 그래픽 창이 키보드 입력을 받도록 함
t.mainloop()
