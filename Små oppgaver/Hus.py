import turtle

def draw_square(x, y, size, color):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.fillcolor(color)
    turtle.begin_fill()
    for _ in range(4):
        turtle.forward(size)
        turtle.right(90)
    turtle.end_fill()

def draw_house():
    draw_square(-100, 100, 200, "brown")  # Hus
    
    # Tak
    turtle.penup()
    turtle.goto(-100, 100)
    turtle.pendown()
    turtle.fillcolor("red")
    turtle.begin_fill()
    turtle.goto(0, 180)
    turtle.goto(100, 100)
    turtle.goto(-100, 100)
    turtle.end_fill()

def draw_windows():
    window_size = 20  # Størrelsen på vinduene
    start_x = -70  # Startposisjon for første vindu
    start_y = 50  # Høyde for øverste rad
    spacing = 30  # Mellomrom mellom vinduer
    
    for row in range(2):
        for col in range(5):
            x = start_x + col * spacing
            y = start_y - row * spacing
            draw_square(x, y, window_size, "green")

def draw_scene():
    turtle.speed(3)
    draw_house()
    draw_windows()
    turtle.done()

draw_scene()
