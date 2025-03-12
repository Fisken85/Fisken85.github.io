import random

riktig_tal = random.randint(1, 10)

while True:
    tip = int(input("Gjett eit tal mellom 1 og 10: "))

    if tip == riktig_tal:
        print("Gratulerer!")
    else:
        print("Feil.")
