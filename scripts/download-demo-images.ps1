$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$publicRoot = Join-Path $projectRoot 'public\images'
$countries = @(
  @{ Slug='kenya'; Query='kenya-travel' }, @{ Slug='uganda'; Query='uganda-travel' },
  @{ Slug='tanzania'; Query='tanzania-travel' }, @{ Slug='rwanda'; Query='rwanda-travel' },
  @{ Slug='south-africa'; Query='south-africa-travel' }, @{ Slug='namibia'; Query='namibia-travel' },
  @{ Slug='botswana'; Query='botswana-travel' }, @{ Slug='zambia'; Query='zambia-travel' },
  @{ Slug='ethiopia'; Query='ethiopia-travel' }, @{ Slug='morocco'; Query='morocco-travel' },
  @{ Slug='egypt'; Query='egypt-travel' }, @{ Slug='seychelles'; Query='seychelles-travel' }
)

foreach ($folder in @('destinations','activities','day-trips','packages')) {
  New-Item -ItemType Directory -Force -Path (Join-Path $publicRoot $folder) | Out-Null
}

$headers = @{ 'User-Agent' = 'Mozilla/5.0 (compatible; ZiarraDemoAssetBuilder/1.0)' }
foreach ($country in $countries) {
  $expectedFiles = @(
    (Join-Path $publicRoot "destinations\$($country.Slug)-hero.webp"),
    (Join-Path $publicRoot "destinations\$($country.Slug)-card.webp"),
    (Join-Path $publicRoot "activities\$($country.Slug)-1.webp"),
    (Join-Path $publicRoot "activities\$($country.Slug)-2.webp"),
    (Join-Path $publicRoot "activities\$($country.Slug)-3.webp")
  )
  if (($expectedFiles | Where-Object { -not (Test-Path -LiteralPath $_) }).Count -eq 0) {
    foreach ($folder in @('day-trips','packages')) { foreach ($index in 1..3) { Copy-Item -LiteralPath (Join-Path $publicRoot "activities\$($country.Slug)-$index.webp") -Destination (Join-Path $publicRoot "$folder\$($country.Slug)-$index.webp") -Force } }
    continue
  }
  $searchUrl = "https://unsplash.com/napi/search/photos?query=$($country.Query)&per_page=10&page=1"
  $json = & curl.exe -sS --fail --location $searchUrl
  if ($LASTEXITCODE -ne 0) { throw "Unable to read Unsplash search data for $($country.Slug)" }
  $result = $json | ConvertFrom-Json
  $urls = @($result.results | Where-Object { $_.premium -ne $true -and $_.plus -ne $true } | ForEach-Object { $_.urls.raw } | Select-Object -Unique | Select-Object -First 5)
  if ($urls.Count -lt 5) { throw "Unsplash returned fewer than five images for $($country.Slug)" }

  $targets = @(
    @{ Path="destinations\$($country.Slug)-hero.webp"; Url=$urls[0]; Width=1600; Height=900; Quality=48 },
    @{ Path="destinations\$($country.Slug)-card.webp"; Url=$urls[1]; Width=800; Height=600; Quality=70 },
    @{ Path="activities\$($country.Slug)-1.webp"; Url=$urls[2]; Width=800; Height=600; Quality=68 },
    @{ Path="activities\$($country.Slug)-2.webp"; Url=$urls[3]; Width=800; Height=600; Quality=68 },
    @{ Path="activities\$($country.Slug)-3.webp"; Url=$urls[4]; Width=800; Height=600; Quality=68 }
  )
  foreach ($target in $targets) {
    $outputPath = Join-Path $publicRoot $target.Path
    if ((Test-Path -LiteralPath $outputPath) -and ((Get-Item -LiteralPath $outputPath).Length -gt 1024)) { continue }
    $uri = "$($target.Url)?auto=format&fit=crop&fm=webp&w=$($target.Width)&h=$($target.Height)&q=$($target.Quality)"
    & curl.exe -sS --fail --location --retry 5 --retry-all-errors --connect-timeout 30 $uri --output $outputPath
    if ($LASTEXITCODE -ne 0) { throw "Unable to download $($target.Path)" }
  }
  foreach ($folder in @('day-trips','packages')) {
    foreach ($index in 1..3) {
      Copy-Item -LiteralPath (Join-Path $publicRoot "activities\$($country.Slug)-$index.webp") -Destination (Join-Path $publicRoot "$folder\$($country.Slug)-$index.webp") -Force
    }
  }
}

$files = Get-ChildItem -LiteralPath $publicRoot -Recurse -File -Filter '*.webp'
$totalBytes = ($files | Measure-Object -Property Length -Sum).Sum
Write-Output "Created $($files.Count) optimized local WebP files from 60 unique Unsplash downloads ($([math]::Round($totalBytes / 1MB, 2)) MB total)."
