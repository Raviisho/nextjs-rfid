import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import time

def AngleToDuty(pos):
	return float(pos)/10+5.

SERVO = 4

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(SERVO, GPIO.OUT)
RFID = SimpleMFRC522()

pwm=GPIO.PWM(SERVO, 100)

pwm.start(AngleToDuty(45))

print("Hold a tag near the reader")
id, text = RFID.read()

if id==925672711827:
	pwm.ChangeDutyCycle(AngleToDuty(0))
	time.sleep(1)
	pwm.ChangeDutyCycle(AngleToDuty(45))
	time.sleep(1)
	
else:
	print("ERROR")
