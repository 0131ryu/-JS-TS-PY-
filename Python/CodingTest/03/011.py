N = int(input())
A = [0]*N

for i in range(N):
    A[i] = int(input())

stack = []
num = 1
result = True
answer = ""

for i in range(N):
    su = A[i]
    if su >= num:  # 현재 수열값 >= 오름차순 자연수: 값이 같아질 때까지 append
        while su >= num:
            stack.append(num)
            num += 1
            answer += "+\n"
        stack.pop()
        answer += "-\n"
    else:  # 현재 수열값 < 오름차순 자연수
        n = stack.pop()
        if n > su:
            print("NO")
            result = False  # 더이상 작업 불가
            break
        else:
            answer += "-\n"

if result:
    print(answer)
