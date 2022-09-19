# 하나 입력
num = int(input())
print(num)

# 한 줄 입력
a, b = map(int, input().split())
print(a, b)

# 리스트 통한 한 줄 입력
num2 = list(map(int, input().split()))
print(num2)  # 여러 개의 수를 배열로 만듦

# 한 줄로 문자열 변수 여러 개 입력
a2, b2 = input().split()
print(a2, b2)

# 문자열 여러 줄 입력받기
str = [input() for _ in range(3)]
print(str)

# 문자열 여러 줄 입력받기 - 2차원 배열
arr = [list(map(int, input())) for _ in range(4)]
print("arr", arr)
# [입력] 0101, 1010, 0101, 1010
# [출력] [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]

# 2차원 배열 입력 받기
arr2 = [list(map(int, input().split())) for _ in range(3)]
print("arr2", arr2)
# [입력] 1 2 3 4 5 | 6 7 8 9 10 | 5 4 3 2 1
# [출력] [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [5, 4, 3, 2, 1]]
