@echo off
title Raio-X do Computador - OAC II - 25-09-2026
echo ===============================================
echo RAIO-X DO COMPUTADOR - COLETA DE INFORMACOES
echo ===============================================
echo.
echo 1) Informacoes gerais do sistema
systeminfo
echo.
pause

echo 2) Processador
wmic cpu get name
echo.
pause

echo 3) Memoria RAM
wmic memorychip get capacity,speed
echo.
pause

echo 4) Disco
wmic diskdrive get model,size
echo.
pause

echo 5) Video
wmic path win32_videocontroller get name
echo.
pause

echo 6) Placa-mae
wmic baseboard get manufacturer,product
echo.
pause

echo 7) Drivers
driverquery
echo.
pause

echo Coleta concluida.
echo Se algum comando falhar, registre a limitacao e use msinfo32, dxdiag ou devmgmt.msc.
pause
