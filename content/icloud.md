Title: iCloud, OneDrive: Attribut "Always keep on device" per PS setzen
Category: Windows
Date: 2021-06-06 09:19
Tags: windows, icloud, apple
Authors: André Peters

Da es scheinbar vorkommt, dass Dateien trotz Wunsch zur lokalen Verfügbarkeit nicht heruntergeladen werden, habe ich mir kurzerhand die Attribute der Dateien angeschaut, verglichen und festgestellt, dass OneDrive als auch iCloud das Attribut "525344" bzw. "0x00080420" setzen, wenn "Always keep on this device" gesetzt ist.

Das Attribute für "Free up space" ist demnach wohl "5248544" bzw. "0x5248544", das habe ich jedoch nicht weiter getestet.

Um alle nicht sofort lokal verfügbaren Dateien anzupassen, habe ich mir folgendes Script erstellt:

```
get-childitem $env:userprofile'\Pictures\iCloud Photos\Photos' -Force -File -Recurse -Include *heic,*jpg,*jpeg,*png,*gif,*mp4,*mov | where Attributes -ne '525344' | foreach {
	$prop = Get-ItemProperty -Path $_.fullname
	$prop.Attributes = $prop.Attributes -bor 525344
}
```

Ein Aufgabenplaner-Job könnte so aussehen:

```
[...]
	<Exec>
	  <Command>powershell</Command>
	  <Arguments>-executionpolicy bypass -file c:\fix_sync_icloud.ps1</Arguments>
	</Exec>
[...]
```
