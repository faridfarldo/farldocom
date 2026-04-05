$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$patterns = @("*.html", "*.xml", "*.txt")
$issues = @()

foreach ($pattern in $patterns) {
  Get-ChildItem -Path $root -Recurse -File -Filter $pattern | ForEach-Object {
    $matches = Select-String -Path $_.FullName -Pattern "\?{3,}|�{2,}" -AllMatches
    foreach ($match in $matches) {
      $issues += [PSCustomObject]@{
        File = $_.FullName.Substring($root.Length + 1)
        Line = $match.LineNumber
        Text = $match.Line.Trim()
      }
    }
  }
}

if ($issues.Count -gt 0) {
  Write-Host "Detected suspicious corrupted text patterns:"
  $issues | ForEach-Object {
    Write-Host ("- {0}:{1} -> {2}" -f $_.File, $_.Line, $_.Text)
  }
  exit 1
}

Write-Host "No suspicious corrupted text patterns found."
