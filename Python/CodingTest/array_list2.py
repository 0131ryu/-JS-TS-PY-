n, k = map(int, input().split())
number = list(input())

for i in range(0, len(number)):
    while number[i] > number[i-1] and k:
        k -= 1
        del number[i-1]
        number.insert(0, 'a')

answer = ""
for i in range(0, len(number)-k):
    if number[i] != 'a':
        answer += number[i]

print(answer)
