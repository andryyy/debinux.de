Title: Windows DNS Cache deaktivieren/aktivieren
Category: Windows
Date: 2021-02-01 11:35
Tags: windows, dns
Authors: André Peters

Deaktivieren:
```
reg add "HKLM\System\CurrentControlSet\Services\Dnscache" /v "Start" /t REG_DWORD /d "4" /f
```

Aktivieren:
```
reg add "HKLM\System\CurrentControlSet\Services\Dnscache" /v "Start" /t REG_DWORD /d "2" /f
```
