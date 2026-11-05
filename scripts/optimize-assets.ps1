# Create display-sized derivatives while preserving the original images.
Add-Type -AssemblyName System.Drawing
$assetRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../assets'))
$outputRoot = Join-Path $assetRoot 'optimized'
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$settings = @(
    @{Name='foto2.png'; Widths=@(520,1040); Alpha=$false},
    @{Name='curiosidade.png'; Widths=@(480,960); Alpha=$false},
    @{Name='foto1.png'; Widths=@(320); Alpha=$true},
    @{Name='foto3.png'; Widths=@(320,560); Alpha=$true},
    @{Name='foto7.png'; Widths=@(640,1280); Alpha=$false},
    @{Name='foto8.png'; Widths=@(640,1280); Alpha=$false},
    @{Name='foto9.png'; Widths=@(640,1280); Alpha=$false},
    @{Name='foto10.png'; Widths=@(640,1280); Alpha=$false},
    @{Name='download (1).png'; Widths=@(640,1280); Alpha=$false},
    @{Name='nexora.png'; Widths=@(640,1280); Alpha=$false},
    @{Name='twiter.png'; Widths=@(640,1280); Alpha=$false}
)
foreach ($setting in $settings) {
    $source = [System.Drawing.Image]::FromFile((Join-Path $assetRoot $setting.Name))
    try {
        foreach ($targetWidth in $setting.Widths) {
            $targetHeight = [int][Math]::Round($source.Height * $targetWidth / $source.Width)
            $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                if (-not $setting.Alpha) { $graphics.Clear([System.Drawing.Color]::White) }
                $graphics.DrawImage($source, 0, 0, $targetWidth, $targetHeight)
                $extension = if ($setting.Alpha) { 'png' } else { 'jpg' }
                $stem = [System.IO.Path]::GetFileNameWithoutExtension($setting.Name) -replace '[^a-zA-Z0-9-]', '-'
                $destination = Join-Path $outputRoot "$stem-$targetWidth.$extension"
                if ($setting.Alpha) {
                    $bitmap.Save($destination, [System.Drawing.Imaging.ImageFormat]::Png)
                } else {
                    $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
                    try {
                        $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)
                        $bitmap.Save($destination, $jpegCodec, $parameters)
                    } finally { $parameters.Dispose() }
                }
            } finally {
                $graphics.Dispose()
                $bitmap.Dispose()
            }
        }
    } finally { $source.Dispose() }
}
Get-ChildItem -LiteralPath $outputRoot | Select-Object Name, Length
