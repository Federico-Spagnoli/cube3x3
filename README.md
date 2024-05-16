# Cube 3x3 🧩

This project is an interactive website where you can learn to solve the Rubik's cube and then practice with a timer.

## Table of Contents

- Introduction
- Getting Started

## Introduction

'Solve the Cube' is a website designed to help both beginners and experts improve their Rubik's cube solving skills. It offers detailed guides and a timer to track your progress.

## Getting Started

1. Go to the website: https://cube3x3.w3spaces.com/index.html
2. Follow the step-by-step instructions to learn how to solve the cube.
3. Use the timer to track your times and see your progress.

## I started with a Python program, then experimented with Pyscript for an HTML integration. Ultimately, JavaScript provided the best solution for a web-based tool.

this is the Python code where I started

    import time
    import random
    
    def main():
        times = []
        for _ in range(5):
            input("Premi 'a + invio' per avviare il cronometro\n")
            start_time = time.time()
            input("Premi 'a + invio' per fermare il cronometro")
            end_time = time.time()
            elapsed_time = end_time - start_time
            print("Il tuo tempo è", elapsed_time, "secondi.\n")
            times.append(elapsed_time)

        average_time = sum(times) / len(times)
        print("La media di 5 misurazioni è", average_time, "secondi.")

    def main_menu():
        cube_type = input("Quale tipo di cubo vuoi usare? ")

        moves = []
        scramble_len = 0

        if cube_type == '3x3':
            moves = "FRULBD"
            scramble_len = 20
        elif cube_type == '2x2':
            moves = "FRU"
            scramble_len = 9
        elif cube_type == '1x1':
            moves = "XYZ"
            scramble_len = 9
        elif cube_type == '4x4':
            moves = ["F", "R", "U", "D", "B", "L", "Rw", "Uw", "Fw"]
            scramble_len = 40
        elif cube_type == '5x5':
            moves = ["F", "R", "U", "D", "B", "L", "Rw", "Uw", "Fw", "Bw", "Dw", "Lw"]
            scramble_len = 60
        elif cube_type.lower() == 'square 1':
            moves = ["0", "1", "2", "3", "4", "5", "6"]
            scrambles = int(input("Quanti scramble desideri? "))
            prime = ["", "-"]
            for i in range(scrambles):
                scramble = []
                last_move = ''
                for _ in range(19):
                    scramble.append("(")
                    move = random.choice(moves)
                    move1 = random.choice(prime) + move
                    last_move = move
                    scramble.append(move1 + ",")
                    move = random.choice(moves)
                    while move == last_move:
                        move = random.choice(moves)
                    move1 = random.choice(prime) + move
                    scramble.append(move1 + ")/")
                print(str(i + 1) + '. ' + ' '.join(scramble))
        else:
            cube_type = 'square 1'

        if cube_type != 'square 1':
            scrambles = int(input("Quanti scramble desideri? "))
            prime = ["", "'", "2"]
            for _ in range(scrambles):
                scramble = []
                last_move = ''
                for _ in range(scramble_len):
                    move = random.choice(moves)
                    while move == last_move:
                        move = random.choice(moves)
                    move1 = move + random.choice(prime)
                    scramble.append(move1)
                    last_move = move
                print(' '.join(scramble) + "\n")

    if __name__ == "__main__":
        main_menu()

## Create

This project was created by Federico-Spagnoli
