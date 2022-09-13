print(1+1 == 2)  # true
print(3-1 == 1)  # false
print(3 == 3)  # true
print(3 != 3)  # false
print(7 >= 3)  # true
print("abc" == "abc")  # true
print("abc" == "ABC")  # false

a = 3
if a == 2:
    print("A")

if a == 3:
    print("B")

if a == 4:
    print("C")
else:
    print("D")

x = input("12+23 = ")
a = int(x)

if a == 12+23:
    print("천재!")
else:
    print("다시 시도해주세요")
