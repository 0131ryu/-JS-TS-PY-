galho = input()
stack = []
answer = 0
for i in range(len(galho)):
    if galho[i] == "(":
        stack.append(galho[i])
        print("galho", galho)
        print("stack", stack)
    else:  # ")"
        if galho[i-1] == "(":
            stack.pop()
            print("stack2", stack)
            answer += len(stack)
            print("len(stack)", len(stack))
            print("answer", answer)
        else:
            stack.pop()
            answer += 1
            print("answer2", answer)
print(answer)

# ()(((()())(())()))(())
# galho ()(((()())(())()))(())
# stack ['(']
# stack2 []
# len(stack) 0
# answer 0
# galho ()(((()())(())()))(())
# stack ['(']
# galho ()(((()())(())()))(())
# stack ['(', '(']
# galho ()(((()())(())()))(())
# stack ['(', '(', '(']
# galho ()(((()())(())()))(())
# stack ['(', '(', '(', '(']
# stack2 ['(', '(', '(']
# len(stack) 3
# answer 3
# galho ()(((()())(())()))(())
# stack ['(', '(', '(', '(']
# stack2 ['(', '(', '(']
# len(stack) 3
# answer 6
# answer2 7
# galho ()(((()())(())()))(())
# stack ['(', '(', '(']
# galho ()(((()())(())()))(())
# stack ['(', '(', '(', '(']
# stack2 ['(', '(', '(']
# len(stack) 3
# answer 10
# answer2 11
# galho ()(((()())(())()))(())
# stack ['(', '(', '(']
# stack2 ['(', '(']
# len(stack) 2
# answer 13
# answer2 14
# answer2 15
# galho ()(((()())(())()))(())
# stack ['(']
# galho ()(((()())(())()))(())
# stack ['(', '(']
# stack2 ['(']
# len(stack) 1
# answer 16
# answer2 17
# 17
