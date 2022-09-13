import random

# 덧셈, 뺄셈, 곱셈, 나눗셈 임의로 만듦
# 계산해서 값 넣으면 오답인지 정답인지 알려줌
# 다섯 번 반복해서 전체 정답 수 알려줌

# 1. 사용자에게 제시할 계산 문제를 만드는 경우
# 필요한 숫자 2개 생성, 덧셈(1), 뺄셈(2), 곱셈(3), 나눗셈(4)

# 2. 메인 프로그램 : 정답인지 오답인지


def make_question():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    op = random.randint(1, 4)

    # 첫 번째 숫자를 q에 저장
    q = str(a)  # a값을 문자열로 저장

    if op == 1:
        q = q + "+"
    if op == 2:
        q = q + "-"
    if op == 3:
        q = q + "*"
    if op == 4:
        q = q + "/"

    # 두 번째 숫자 q에 저장
    q = q + str(b)  # b값을 문자열로 저장

    return q


sc1 = 0  # 정답 횟수
sc2 = 0  # 오답 횟수

for x in range(5):
    q = make_question()
    print(q)
    ans = input("정답을 입력하세요 : ")  # 사용자에게 정답을 입력받음
    r = float(ans)  # 아무리 소수점 자리 많이 입력해도 소수 둘째자리만 넘어가게 함
    print("입력한 값", round(r, 2))

    if round(eval(q), 2) == round(r, 2):
        print("답은 ", round(eval(q), 2))
        print("정답!")
        sc1 = sc1 + 1
    else:
        print("답은 ", round(eval(q), 2))
        print("오답!")
        sc2 = sc2 + 1

print("정답 : ", sc1, "오답 :", sc2)

if sc2 == 0:
    print("당신은 천재입니다!")
