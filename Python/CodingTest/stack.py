def first():
    print(1)
    second()
    print(-1)


def second():
    print(2)
    third()
    print(-2)


def third():
    print(3)


print("start")
first()
print("end")
