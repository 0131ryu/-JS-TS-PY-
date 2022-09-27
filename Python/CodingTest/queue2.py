import sys
from collections import deque

N = int(sys.stdin.readline())

queue = deque()
for i in range(N):
    queue.append(N-i)

while len(queue) > 1:
    queue.pop()
    queue.appendleft(queue.pop())

print(queue.popleft())
