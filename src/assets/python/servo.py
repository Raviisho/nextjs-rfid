import RPi.GPIO as GPIO
import time
import sys

def AngleToDuty(pos):
	return float(pos)/10+5.

#Servo
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(12, GPIO.OUT)
pwm=GPIO.PWM(12, 100)

pwm.start(AngleToDuty(0))

while True: 
	pwm.ChangeDutyCycle(AngleToDuty(0))
	time.sleep(1)
	pwm.ChangeDutyCycle(AngleToDuty(90))
	time.sleep(1)
