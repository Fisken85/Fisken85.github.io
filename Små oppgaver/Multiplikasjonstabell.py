while True:
    tall = input("Skriv inn eit tal eller trykk 'q' for å avslutte.: ")
    
    if tall.lower() == 'q':
        break
    
    if tall.isdigit():
        tall = int(tall)
        for i in range(1, 11):
            print(tall, 'x', i, '=', tall * i)
    else:
        print("Skriv inn eit tal eller trykk 'q' for å avslutte.")
