import random

def gjette_spel():
    tal = random.randint(1, 100)
    forsok = 0

    forsok_max = int(input("Kor mange forsøk vil du ha? "))

    print("Tipp eit tal mellom 1 og 100!")

    while forsok < forsok_max:
        gjett = int(input("Skriv inn eit tal: "))
        forsok += 1

        if gjett < tal:
            print("For lavt!")
        elif gjett > tal:
            print("For høgt!")
        else:
            print(f"Gratulerer! Du gjetta riktig på {forsok} forsøk.")
            break
    else:
        print(f"Du brukte alle {forsok_max} forsøkene dine. Det rette talet var {tal}. Bedre lykke neste gang!")

gjette_spel()
