# Script tạo các trang tự động
 = @{
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

foreach ( in .GetEnumerator()) {
     = .Key
     = .Value
    
    # Copy template từ liet-duong.html
     = Get-Content "html\liet-duong.html" -Raw
    
    # Thay thế title và các thông tin cụ thể
     =  -replace 'Liệt dương', 
     =  -replace 'liet-duong', 
    
    # Tạo file mới
     | Out-File -FilePath "html\.html" -Encoding UTF8
    Write-Host "Created: html\.html"
}
