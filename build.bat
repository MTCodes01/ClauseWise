@echo off
start /wait cmd /k "pip install -r requirements.txt && exit"
start /wait cmd /k "npm install && exit"
start /wait cmd /k "cd ClauseWise && pyinstaller --onefile --windowed main.py && exit"
