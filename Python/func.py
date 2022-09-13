def hello():
    print("hello Python!")


hello()
hello()
hello()


def hello2(name):
    print("Hello", name)


hello2("Justin")
hello2("John")
hello2("Mike")


def square(a):
    c = a * a
    return c


def triangle(a, h):
    c = a * h / 2
    return c


s1 = 4
s2 = square(s1)
print(s1, s2)  # 4 16

print(triangle(3, 4))  # 3*4/2 = 6
