human = [list(map(int, input().split())) for _ in range(5)]
# print(human) #[[5, 4, 4, 5], [5, 4, 4, 4], [5, 5, 4, 4], [5, 5, 5, 4], [4, 4, 4, 5]]
humanScore = [0]*5  # 참가자들의 총합 점수를 구하기 위함
# print(humanScore) #[0, 0, 0, 0, 0]
score = 0  # 최대 점수 저장
for i in range(5):
    sum = 0
    for j in range(4):
        sum += human[i][j]
        # print("sum", sum) # 5 9 13 18 | 5 10 14 18 | 5 10 15 19 | 4 8 12 17
    humanScore[i] = sum  # 각 참가자가 받은 점수 합들
    #print("ResultSum", humanScore[i])
    score = max(score, sum)  # 18 17 18 19 17 => 19
    # print("score", score)  # 점수 합들 중 최댓값 표시

for i in range(5):
    # print("humanScore[i]", humanScore[i]) #18 17 18 19
    if humanScore[i] == score:
        print(i+1, score) #자릿수 = i + 1
        break
