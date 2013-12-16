import os
import time
a = input("minutes: ")
time.sleep(a*60)
os.system("open -a /System/Library/Frameworks/ScreenSaver.framework//Versions/A/Resources/ScreenSaverEngine.app")
os.system("afplay ~/Super\ Mario\ -\ Death.mp3")
