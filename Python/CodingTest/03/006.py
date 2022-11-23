n = int(input())
count = 1
start_I = 1
end_I = 1
sum = 1

while end_I != n:
    if sum == n:
        count += 1
        end_I += 1
        sum += end_I
    elif sum > n:
        sum -= start_I
        start_I += 1
    else:
        end_I += 1
        sum += end_I

print(count)
