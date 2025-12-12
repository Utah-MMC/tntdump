$ErrorActionPreference = 'Stop'

try {
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor [Net.SecurityProtocolType]::Tls11 -bor [Net.SecurityProtocolType]::Tls
} catch {}

$root = $PSScriptRoot
$xmlPath = Join-Path (Join-Path $root '..') 'public/sitemap.xml'
$xmlPath = [System.IO.Path]::GetFullPath($xmlPath)
if (-not (Test-Path $xmlPath)) { Write-Error "sitemap.xml not found at $xmlPath"; exit 1 }

function Get-LocsFromXmlString([string]$xml) {
  $matches = [System.Text.RegularExpressions.Regex]::Matches($xml, '<loc>\s*([^<]+?)\s*</loc>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  $urls = @()
  foreach ($m in $matches) { $urls += $m.Groups[1].Value.Trim() }
  return ($urls | Sort-Object -Unique)
}

function Get-UrlsFromSitemapLocal([string]$path) {
  if (-not (Test-Path $path)) { return @() }
  $xml = Get-Content -Raw $path

  # If sitemap index, load referenced files from /public by filename and recurse
  if ($xml -match '<sitemapindex\b') {
    $locs = Get-LocsFromXmlString $xml
    $all = @()
    foreach ($loc in $locs) {
      $fileName = [System.IO.Path]::GetFileName(([Uri]$loc).AbsolutePath)
      if (-not $fileName) { continue }
      $childPath = Join-Path (Split-Path -Parent $path) $fileName
      $all += Get-UrlsFromSitemapLocal $childPath
    }
    return ($all | Sort-Object -Unique)
  }

  # urlset: return <loc> urls
  return (Get-LocsFromXmlString $xml)
}

$urls = Get-UrlsFromSitemapLocal $xmlPath

Write-Output ("Found {0} URLs in sitemap." -f $urls.Count)

$results = New-Object System.Collections.Generic.List[object]
foreach ($u in $urls) {
  $code = $null
  try {
    $resp = Invoke-WebRequest -Uri $u -Method Head -TimeoutSec 20 -MaximumRedirection 5 -ErrorAction Stop
    $code = [int]$resp.StatusCode
  } catch {
    if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode } else { $code = $null }
  }

  if ($code -eq 405 -or $code -eq 400 -or $code -eq 501 -or $code -eq 403 -or $null -eq $code) {
    try {
      $resp2 = Invoke-WebRequest -Uri $u -Method Get -TimeoutSec 20 -MaximumRedirection 5 -ErrorAction Stop
      $code = [int]$resp2.StatusCode
    } catch {
      if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode } else { $code = $null }
    }
  }

  $results.Add([pscustomobject]@{ Url = $u; Status = $code }) | Out-Null
}

$missing = $results | Where-Object { $_.Status -eq 404 -or $_.Status -eq 410 }
if (-not $missing -or $missing.Count -eq 0) {
  Write-Output 'No 404/410 URLs found.'
} else {
  Write-Output ("Found {0} missing URLs (404/410):" -f $missing.Count)
  $missing | Sort-Object Url | ForEach-Object { $_.Url }
}


