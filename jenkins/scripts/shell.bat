@echo off
echo Stopping web server...

REM Example: kill a process by name
taskkill /F /IM node.exe > nul 2>&1

echo Web server stopped.