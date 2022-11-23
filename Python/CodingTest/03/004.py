import sys
input = sys.stdin.readline

n, m = map(int, input().split())  # 4, 3
A = [[0] * (n+1)]  # 1차원 배열
D = [[0]*(n+1) for _ in range(n+1)]  # 2차원 배열

for i in range(n):
    A_row = [0] + [int(x) for x in input().split()]
    A.append(A_row)

for i in range(1, n+1):  # 이미 0행과 0열이 존재함
    for j in range(1, n+1):
        D[i][j] = D[i][j-1] + D[i-1][j] - D[i-1][j-1] + A[i][j]

for _ in range(n):
    x1, y1, x2, y2 = map(int, input().split())
    result = D[x2][y2] - D[x1-1][y2] - D[x2][y1-1] + D[x1-1][y1-1]
    print(result)
