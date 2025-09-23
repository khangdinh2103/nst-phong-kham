# Script tạo các trang tự động
$pages = @{
    'vo-sinh-nam' = 'Vô sinh nam'
    'xuat-tinh-som' = 'Xuất tinh sớm'
    'viem-bang-quang' = 'Viêm bàng quang'
    'benh-tuyen-tien-liet' = 'Bệnh tuyến tiền liệt'
    'tieu-nhieu' = 'Tiểu nhiều'
    'viem-co-tu-cung' = 'Viêm cổ tử cung'
    'viem-buong-trung' = 'Viêm buồng trứng'
    'u-nang-buong-trung' = 'U nang buồng trứng'
    'dau-bung-kinh' = 'Đau bụng kinh'
    'benh-lau' = 'Bệnh lậu'
    'benh-giang-mai' = 'Bệnh giang mai'
}

foreach ($page in $pages.GetEnumerator()) {
    $filename = $page.Key
    $title = $page.Value
    
    # Copy template từ liet-duong.html
    $templateContent = Get-Content "html\liet-duong.html" -Raw
    
    # Thay thế title và các thông tin cụ thể
    $newContent = $templateContent -replace 'Liệt dương', $title
    $newContent = $newContent -replace 'liet-duong', $filename
    
    # Tạo file mới
    $newContent | Out-File -FilePath "html\$filename.html" -Encoding UTF8
    Write-Host "Created: html\$filename.html"
}
