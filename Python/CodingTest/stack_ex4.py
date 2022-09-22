n, k = map(int, input().split())
number = list(input())

answer = []
cnt = k
print("number", number)
for num in number:
    print("num", num)
    while answer and cnt > 0 and answer[-1] < num:
        print("answer[-1]", answer[-1])
        print("answer", answer)
        del answer[-1]
        cnt -= 1
        print("cnt", cnt)
    answer.append(num)
    print("answer2", answer)

print("answer[:n-k]", answer[:n-k])
print(''.join(answer[:n-k]))

# 입력
# 4 2
# 1924

# number ['1', '9', '2', '4']
# num 1
# answer2 ['1']
# num 9
# answer[-1] 1
# answer ['1']
# cnt 1
# answer2 ['9']
# num 2
# answer2 ['9', '2']
# num 4
# answer[-1] 2
# answer ['9', '2']
# cnt 0
# answer2 ['9', '4']
# answer[:n-k] ['9', '4']
# 94
