n = int(input())
ans = [0] * n
A = list(map(int, input().split()))
myStack = []

for i in range(n):
    while myStack and A[myStack[-1]] < A[i]:  # top에 있는 것(확인만 함)과 이번에 들어온 것 비교
        ans[myStack.pop()] = A[i]  # 정답 리스트에 오큰수 저장
    myStack.append(i)  # 값이 아닌 index 저장함

while myStack:
    ans[myStack.pop()] = -1  # 현재 스택에서 오큰수가 없는 얘들

result = ""
for i in range(n):
    result += str(ans[i]) + " "

print(result)
