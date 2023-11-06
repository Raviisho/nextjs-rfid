from time import sleep

#Rfid
from mfrc522 import SimpleMFRC522
reader = SimpleMFRC522()

try:
	print("Hold a tag near the reader")
	text = input("Ingresa el texto a escribir: ")
	reader.write(text)
	sleep(5)
except KeyboardInterrupt:
    GPIO.cleanup()
    raise
