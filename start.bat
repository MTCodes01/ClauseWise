@echo off
start /min cmd /c "cd Backend && python manage.py runserver"
start /min cmd /c "npm run dev"
start http://localhost:8000

