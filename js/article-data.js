// Article Data Management System
const ArticleData = {
    // Database của các bài báo
    articles: {
        'mang-thai-3-thang-dau': {
            id: 'mang-thai-3-thang-dau',
            title: 'Mang thai 3 tháng đầu cần chú ý gì?',
            description: 'Hướng dẫn chi tiết những điều cần lưu ý trong 3 tháng đầu thai kỳ để đảm bảo sức khỏe mẹ và bé',
            author: 'BS. Nguyễn Thị Hoa',
            publishDate: '2025-01-15',
            readTime: '5 phút đọc',
            category: 'Sản phụ khoa',
            tags: ['mang thai', 'thai kỳ', 'sức khỏe mẹ và bé', 'dinh dưỡng'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Mang+thai+3+tháng+đầu',
            content: `
                <h2>1. Dinh dưỡng trong thai kỳ</h2>
                <p>Trong 3 tháng đầu thai kỳ, việc bổ sung dinh dưỡng đầy đủ là vô cùng quan trọng cho sự phát triển của thai nhi. Mẹ bầu cần:</p>
                <ul>
                    <li>Bổ sung acid folic 400-800mcg mỗi ngày</li>
                    <li>Tăng cường canxi và vitamin D</li>
                    <li>Ăn nhiều rau xanh, trái cây tươi</li>
                    <li>Uống đủ nước, tránh caffeine</li>
                </ul>
                
                <h2>2. Những triệu chứng thường gặp</h2>
                <p>Nghén ói là triệu chứng phổ biến nhất trong 3 tháng đầu thai kỳ, ảnh hưởng đến 70-80% phụ nữ mang thai:</p>
                <ul>
                    <li>Buồn nôn, ói mửa đặc biệt vào buổi sáng</li>
                    <li>Mệt mỏi, buồn ngủ nhiều</li>
                    <li>Thay đổi khẩu vị, nhạy cảm với mùi</li>
                    <li>Đau và căng ngực</li>
                </ul>
                
                <h2>3. Khám thai định kỳ</h2>
                <p>Việc khám thai định kỳ giúp theo dõi sự phát triển của thai nhi và phát hiện sớm các bất thường:</p>
                <ul>
                    <li>Lần khám đầu tiên: 6-8 tuần</li>
                    <li>Siêu âm xác định tuổi thai</li>
                    <li>Xét nghiệm máu cơ bản</li>
                    <li>Tư vấn chế độ dinh dưỡng</li>
                </ul>
                
                <h2>4. Lưu ý về sinh hoạt</h2>
                <p>Mẹ bầu cần điều chỉnh lối sống để phù hợp với tình trạng mang thai:</p>
                <ul>
                    <li>Tránh vận động mạnh, nâng vật nặng</li>
                    <li>Nghỉ ngơi đầy đủ, ngủ 8-9 tiếng/ngày</li>
                    <li>Tránh stress, căng thẳng</li>
                    <li>Không hút thuốc, uống rượu bia</li>
                </ul>
            `,
            relatedArticles: ['cham-soc-sau-sinh', 'dinh-duong-cho-me-bau', 'sieu-am-thai-nhi']
        },
        
        'cham-soc-sau-sinh': {
            id: 'cham-soc-sau-sinh',
            title: 'Chăm sóc sức khỏe sau sinh như thế nào?',
            description: 'Hướng dẫn chăm sóc toàn diện cho mẹ sau sinh, từ dinh dưỡng đến phục hồi sức khỏe',
            author: 'BS. Trần Văn Nam',
            publishDate: '2025-01-10',
            readTime: '7 phút đọc',
            category: 'Sản phụ khoa',
            tags: ['sau sinh', 'chăm sóc mẹ', 'hồi phục', 'cho con bú'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Chăm+sóc+sau+sinh',
            content: `
                <h2>1. Chăm sóc vết mổ (nếu có)</h2>
                <p>Đối với các mẹ sinh mổ, việc chăm sóc vết mổ đúng cách là rất quan trọng:</p>
                <ul>
                    <li>Giữ vết mổ khô ráo, sạch sẽ</li>
                    <li>Thay băng theo hướng dẫn của bác sĩ</li>
                    <li>Tránh gắng sức trong 6-8 tuần đầu</li>
                    <li>Theo dõi dấu hiệu nhiễm trùng</li>
                </ul>
                
                <h2>2. Dinh dưỡng cho mẹ cho con bú</h2>
                <p>Mẹ cho con bú cần bổ sung thêm 500 calories mỗi ngày so với bình thường:</p>
                <ul>
                    <li>Tăng cường protein từ thịt, cá, trứng</li>
                    <li>Uống nhiều nước, sữa tươi</li>
                    <li>Ăn nhiều rau xanh, trái cây</li>
                    <li>Tránh thực phẩm cay nóng, kích thích</li>
                </ul>
                
                <h2>3. Tập luyện phục hồi</h2>
                <p>Các bài tập nhẹ nhàng giúp mẹ phục hồi sức khỏe nhanh chóng:</p>
                <ul>
                    <li>Bài tập thở sâu</li>
                    <li>Tập co cơ sàn chậu</li>
                    <li>Đi bộ nhẹ nhàng</li>
                    <li>Yoga cho mẹ sau sinh</li>
                </ul>
                
                <h2>4. Sức khỏe tinh thần</h2>
                <p>Trầm cảm sau sinh là vấn đề phổ biến cần được quan tâm:</p>
                <ul>
                    <li>Chia sẻ cảm xúc với người thân</li>
                    <li>Tham gia các hoạt động xã hội</li>
                    <li>Tìm kiếm sự hỗ trợ khi cần thiết</li>
                    <li>Duy trì thói quen tích cực</li>
                </ul>
            `,
            relatedArticles: ['mang-thai-3-thang-dau', 'dinh-duong-cho-me-bau', 'kiem-tra-suc-khoe-dinh-ky']
        },
        
        'dinh-duong-cho-me-bau': {
            id: 'dinh-duong-cho-me-bau',
            title: 'Chế độ dinh dưỡng cho mẹ bầu theo từng tháng',
            description: 'Hướng dẫn chi tiết chế độ ăn uống khoa học cho mẹ bầu từng giai đoạn thai kỳ',
            author: 'BS. Lê Thị Lan',
            publishDate: '2025-01-05',
            readTime: '6 phút đọc',
            category: 'Dinh dưỡng',
            tags: ['dinh dưỡng', 'mẹ bầu', 'thai kỳ', 'vitamin'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Dinh+dưỡng+mẹ+bầu',
            content: `
                <h2>1. Tháng 1-3: Bổ sung acid folic</h2>
                <p>Acid folic giúp phòng ngừa dị tật ống thần kinh cho thai nhi. Mẹ bầu cần:</p>
                <ul>
                    <li>Uống viên acid folic 400-800mcg/ngày</li>
                    <li>Ăn nhiều rau xanh đậm</li>
                    <li>Bổ sung ngũ cốc tăng cường</li>
                    <li>Tránh rượu bia hoàn toàn</li>
                </ul>
                
                <h2>2. Tháng 4-6: Tăng protein và canxi</h2>
                <p>Giai đoạn này thai nhi phát triển mạnh về xương và cơ bắp:</p>
                <ul>
                    <li>Tăng protein lên 75-100g/ngày</li>
                    <li>Uống sữa bầu hoặc sữa tươi</li>
                    <li>Ăn cá, thịt nạc, trứng</li>
                    <li>Bổ sung canxi 1000mg/ngày</li>
                </ul>
                
                <h2>3. Tháng 7-9: Bổ sung sắt và omega-3</h2>
                <p>Sắt giúp phòng ngừa thiếu máu, omega-3 tốt cho não bộ thai nhi:</p>
                <ul>
                    <li>Uống viên sắt theo đơn bác sĩ</li>
                    <li>Ăn thịt đỏ, gan, rau bina</li>
                    <li>Bổ sung cá hồi, cá thu</li>
                    <li>Hạn chế caffeine và đường</li>
                </ul>
                
                <h2>4. Thực phẩm nên tránh</h2>
                <p>Một số thực phẩm có thể gây hại cho thai nhi:</p>
                <ul>
                    <li>Cá có hàm lượng thủy ngân cao</li>
                    <li>Thịt, trứng sống hoặc tái</li>
                    <li>Phô mai mềm chưa tiệt trùng</li>
                    <li>Rượu bia, caffeine cao</li>
                </ul>
            `,
            relatedArticles: ['mang-thai-3-thang-dau', 'cham-soc-sau-sinh', 'sieu-am-thai-nhi']
        },
        
        'sieu-am-thai-nhi': {
            id: 'sieu-am-thai-nhi',
            title: 'Siêu âm thai nhi - Khi nào cần thực hiện?',
            description: 'Thông tin về các loại siêu âm thai nhi và thời điểm thực hiện phù hợp',
            author: 'BS. Phạm Văn Đức',
            publishDate: '2025-01-20',
            readTime: '4 phút đọc',
            category: 'Chẩn đoán hình ảnh',
            tags: ['siêu âm', 'thai nhi', 'chẩn đoán', 'theo dõi thai'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Siêu+âm+thai+nhi',
            content: `
                <h2>1. Siêu âm lần đầu (6-8 tuần)</h2>
                <p>Siêu âm đầu tiên giúp xác định:</p>
                <ul>
                    <li>Tuổi thai chính xác</li>
                    <li>Vị trí túi thai trong tử cung</li>
                    <li>Nhịp tim thai nhi</li>
                    <li>Số lượng thai (đơn thai hay đa thai)</li>
                </ul>
                
                <h2>2. Siêu âm tầm soát (11-13 tuần)</h2>
                <p>Đánh giá nguy cơ dị tật và hội chứng Down:</p>
                <ul>
                    <li>Đo độ trong suốt da gáy</li>
                    <li>Kiểm tra xương mũi thai nhi</li>
                    <li>Đánh giá dòng máu qua van tim</li>
                    <li>Kết hợp xét nghiệm máu mẹ</li>
                </ul>
                
                <h2>3. Siêu âm hình thái (18-22 tuần)</h2>
                <p>Kiểm tra chi tiết cấu trúc cơ thể thai nhi:</p>
                <ul>
                    <li>Não bộ và cột sống</li>
                    <li>Tim và mạch máu</li>
                    <li>Phổi, gan, thận</li>
                    <li>Tứ chi và cơ quan sinh dục</li>
                </ul>
                
                <h2>4. Siêu âm theo dõi (28-32 tuần)</h2>
                <p>Đánh giá sự phát triển và vị trí thai nhi:</p>
                <ul>
                    <li>Cân nặng và chiều dài thai nhi</li>
                    <li>Lượng nước ối</li>
                    <li>Vị trí bánh nhau</li>
                    <li>Dòng chảy máu rau thai</li>
                </ul>
            `,
            relatedArticles: ['mang-thai-3-thang-dau', 'dinh-duong-cho-me-bau', 'kiem-tra-suc-khoe-dinh-ky']
        },
        
        'kiem-tra-suc-khoe-dinh-ky': {
            id: 'kiem-tra-suc-khoe-dinh-ky',
            title: 'Tầm quan trọng của việc kiểm tra sức khỏe định kỳ',
            description: 'Tại sao nên khám sức khỏe định kỳ và những xét nghiệm cần thiết theo từng độ tuổi',
            author: 'BS. Hoàng Thị Mai',
            publishDate: '2025-01-25',
            readTime: '5 phút đọc',
            category: 'Sức khỏe tổng quát',
            tags: ['khám định kỳ', 'sức khỏe', 'phòng bệnh', 'xét nghiệm'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Khám+định+kỳ',
            content: `
                <h2>1. Tầm quan trọng của khám định kỳ</h2>
                <p>Phát hiện sớm các bệnh lý, giúp điều trị hiệu quả hơn và tiết kiệm chi phí:</p>
                <ul>
                    <li>Phát hiện bệnh ở giai đoạn sớm</li>
                    <li>Đánh giá nguy cơ mắc bệnh</li>
                    <li>Theo dõi hiệu quả điều trị</li>
                    <li>Tư vấn lối sống lành mạnh</li>
                </ul>
                
                <h2>2. Các xét nghiệm cơ bản</h2>
                <p>Gói khám sức khỏe cơ bản nên bao gồm:</p>
                <ul>
                    <li>Xét nghiệm máu: công thức máu, sinh hóa</li>
                    <li>Xét nghiệm nước tiểu</li>
                    <li>Chức năng gan thận</li>
                    <li>Lipid máu, đường huyết</li>
                </ul>
                
                <h2>3. Tần suất khám phù hợp</h2>
                <p>Tùy thuộc vào độ tuổi và tình trạng sức khỏe:</p>
                <ul>
                    <li>20-30 tuổi: 2-3 năm/lần</li>
                    <li>30-40 tuổi: 1-2 năm/lần</li>
                    <li>40-50 tuổi: 1 năm/lần</li>
                    <li>Trên 50 tuổi: 6 tháng/lần</li>
                </ul>
                
                <h2>4. Chuẩn bị trước khi khám</h2>
                <p>Những lưu ý cần thiết để có kết quả chính xác nhất:</p>
                <ul>
                    <li>Nhịn ăn 8-12 tiếng với xét nghiệm đường máu</li>
                    <li>Tránh rượu bia 48 tiếng trước</li>
                    <li>Ngừng thuốc theo hướng dẫn bác sĩ</li>
                    <li>Mang theo kết quả khám cũ</li>
                </ul>
            `,
            relatedArticles: ['sieu-am-thai-nhi', 'cham-soc-sau-sinh', 'benh-tieu-duong-type-2']
        },
        
        'benh-tieu-duong-type-2': {
            id: 'benh-tieu-duong-type-2',
            title: 'Bệnh tiểu đường type 2 - Nguyên nhân và cách phòng ngừa',
            description: 'Thông tin chi tiết về bệnh tiểu đường type 2, nguyên nhân, triệu chứng và cách quản lý',
            author: 'BS. Nguyễn Văn Tuấn',
            publishDate: '2025-01-30',
            readTime: '8 phút đọc',
            category: 'Nội tiết',
            tags: ['tiểu đường', 'type 2', 'nội tiết', 'đường huyết'],
            featuredImage: 'https://via.placeholder.com/800x400/0fa04a/white?text=Tiểu+đường+Type+2',
            content: `
                <h2>1. Nguyên nhân gây bệnh</h2>
                <p>Kháng insulin và giảm tiết insulin là hai nguyên nhân chính:</p>
                <ul>
                    <li>Thừa cân, béo phì</li>
                    <li>Lối sống ít vận động</li>
                    <li>Chế độ ăn nhiều đường, tinh bột</li>
                    <li>Yếu tố di truyền</li>
                </ul>
                
                <h2>2. Triệu chứng thường gặp</h2>
                <p>Các dấu hiệu cảnh báo bệnh tiểu đường:</p>
                <ul>
                    <li>Khát nước nhiều, tiểu nhiều</li>
                    <li>Mệt mỏi, suy nhược</li>
                    <li>Giảm cân không rõ nguyên nhân</li>
                    <li>Chậm lành vết thương</li>
                </ul>
                
                <h2>3. Chế độ ăn uống</h2>
                <p>Điều chỉnh chế độ ăn là nền tảng điều trị:</p>
                <ul>
                    <li>Hạn chế đường, kẹo, bánh ngọt</li>
                    <li>Tăng chất xơ từ rau, củ, quả</li>
                    <li>Ăn nhiều bữa nhỏ trong ngày</li>
                    <li>Kiểm soát tổng calories hằng ngày</li>
                </ul>
                
                <h2>4. Tập luyện thể dục</h2>
                <p>Tập thể dục đều đặn giúp kiểm soát đường huyết hiệu quả:</p>
                <ul>
                    <li>Đi bộ nhanh 30 phút/ngày</li>
                    <li>Bơi lội, đạp xe</li>
                    <li>Tập tạ nhẹ</li>
                    <li>Yoga, thiền định</li>
                </ul>
            `,
            relatedArticles: ['kiem-tra-suc-khoe-dinh-ky', 'cao-huyet-ap', 'benh-tim-mach']
        }
    },

    // Lấy bài viết theo ID
    getArticle: function(articleId) {
        return this.articles[articleId] || null;
    },

    // Lấy bài viết liên quan
    getRelatedArticles: function(articleId, limit = 3) {
        const article = this.getArticle(articleId);
        if (!article) return [];
        
        return article.relatedArticles.slice(0, limit).map(id => this.getArticle(id)).filter(a => a);
    },

    // Lấy bài viết theo chuyên mục
    getArticlesByCategory: function(category, limit = 5) {
        return Object.values(this.articles)
            .filter(article => article.category === category)
            .slice(0, limit);
    },

    // Lấy tất cả chuyên mục
    getCategories: function() {
        const categories = [...new Set(Object.values(this.articles).map(a => a.category))];
        return categories;
    },

    // Tìm kiếm bài viết
    searchArticles: function(query, limit = 5) {
        const searchQuery = query.toLowerCase();
        return Object.values(this.articles)
            .filter(article => 
                article.title.toLowerCase().includes(searchQuery) ||
                article.description.toLowerCase().includes(searchQuery) ||
                article.tags.some(tag => tag.toLowerCase().includes(searchQuery))
            )
            .slice(0, limit);
    }
};

// Hàm render template với data động (tương thích với giao diện Bizweb)
function renderArticleTemplate(articleId) {
    const article = ArticleData.getArticle(articleId);
    if (!article) {
        const contentContainer = document.querySelector('.article-content .rte') || document.querySelector('.article-content');
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2>Không tìm thấy bài viết</h2>
                    <p>Bài viết với ID "${articleId}" không tồn tại.</p>
                    <a href="../tin-tuc.html" class="btn btn-primary">Quay lại danh sách tin tức</a>
                </div>
            `;
        }
        return;
    }

    // Cập nhật title và meta tags
    document.title = article.title;
    
    // Cập nhật dynamic meta tags
    updateMetaTag('description', article.description);
    updateMetaTag('keywords', article.tags.join(', ') + ', NST Phòng Khám');
    
    // Open Graph tags
    updateMetaProperty('og:title', article.title);
    updateMetaProperty('og:description', article.description);
    updateMetaProperty('og:image', article.featuredImage);
    
    // Schema.org structured data
    updateStructuredData(article);

    // Render nội dung bài viết theo giao diện Bizweb
    const elements = {
        title: document.querySelector('.article-title'),
        titleBreadcrumb: document.querySelector('.article-title-breadcrumb'),
        author: document.querySelector('.article-author'),
        publishDate: document.querySelector('.article-date'),
        readTime: document.querySelector('.article-read-time'),
        category: document.querySelector('.article-category'),
        content: document.querySelector('.article-content .rte') || document.querySelector('.article-content'),
        relatedArticles: document.querySelector('.related-articles-list'),
        tags: document.querySelector('.article-tags'),
        featuredArticles: document.querySelector('#featured-articles'),
        faqArticles: document.querySelector('#faq-articles')
    };

    // Cập nhật các element chính
    if (elements.title) elements.title.textContent = article.title;
    if (elements.titleBreadcrumb) elements.titleBreadcrumb.textContent = article.title;
    if (elements.author) elements.author.textContent = article.author;
    if (elements.publishDate) {
        const date = new Date(article.publishDate);
        elements.publishDate.textContent = date.toLocaleDateString('vi-VN', {
            weekday: 'short',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }
    if (elements.readTime) elements.readTime.innerHTML = `<i class="fa fa-clock-o"></i> ${article.readTime}`;
    if (elements.category) elements.category.textContent = article.category;
    
    if (elements.content) elements.content.innerHTML = article.content;

    // Render bài viết liên quan theo style Bizweb
    if (elements.relatedArticles) {
        const relatedArticles = ArticleData.getRelatedArticles(articleId);
        elements.relatedArticles.innerHTML = relatedArticles.map(related => `
            <li>
                <a href="article.html?id=${related.id}" title="${related.title}">
                    ${related.title}
                </a>
            </li>
        `).join('');
    }

    // Render tags theo style Bizweb
    if (elements.tags) {
        elements.tags.innerHTML = article.tags.map(tag => 
            `<a href="#" onclick="searchByTag('${tag}')">${tag}</a>`
        ).join(', ');
    }

    // Render bài viết nổi bật
    if (elements.featuredArticles) {
        const allArticles = Object.values(ArticleData.articles).slice(0, 5);
        elements.featuredArticles.innerHTML = allArticles.map(featuredArticle => `
            <div class="itemblg medium">
                <a class="image-blog-left" href="article.html?id=${featuredArticle.id}" title="${featuredArticle.title}">
                    <img src="//bizweb.dktcdn.net/100/358/839/themes/725246/assets/800x500.png?1705906417109" 
                         data-lazyload="${featuredArticle.featuredImage}" 
                         title="${featuredArticle.title}" 
                         alt="${featuredArticle.title}">
                </a>
                <div class="content_blog">
                    <h3>
                        <a href="article.html?id=${featuredArticle.id}" title="${featuredArticle.title}">
                            ${featuredArticle.title}
                        </a>
                    </h3>
                </div>
            </div>
        `).join('');
    }

    // Render câu hỏi thường gặp
    if (elements.faqArticles) {
        const faqArticles = Object.values(ArticleData.articles).slice(0, 5);
        elements.faqArticles.innerHTML = faqArticles.map(faqArticle => `
            <li class="itemblg medium">
                <a href="article.html?id=${faqArticle.id}" title="${faqArticle.title}">
                    ${faqArticle.title}
                </a>
            </li>
        `).join('');
    }

    // Cập nhật schema.org metadata
    updateSchemaMetadata(article);
}

// Helper functions
function updateMetaTag(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

function updateMetaProperty(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

function updateSchemaMetadata(article) {
    // Cập nhật các meta tag cho schema.org
    const schemaElements = {
        mainEntityOfPage: document.querySelector('.dynamic-main-entity'),
        description: document.querySelector('.dynamic-itemprop-description'),
        author: document.querySelector('.dynamic-itemprop-author'),
        headline: document.querySelector('.dynamic-itemprop-headline'),
        image: document.querySelector('.dynamic-itemprop-image'),
        datePublished: document.querySelector('.dynamic-date-published'),
        dateModified: document.querySelector('.dynamic-date-modified')
    };

    if (schemaElements.mainEntityOfPage) {
        schemaElements.mainEntityOfPage.setAttribute('content', `article.html?id=${article.id}`);
    }
    if (schemaElements.description) {
        schemaElements.description.setAttribute('content', article.description);
    }
    if (schemaElements.author) {
        schemaElements.author.setAttribute('content', article.author);
    }
    if (schemaElements.headline) {
        schemaElements.headline.setAttribute('content', article.title);
    }
    if (schemaElements.image) {
        schemaElements.image.setAttribute('content', article.featuredImage);
    }
    if (schemaElements.datePublished) {
        schemaElements.datePublished.setAttribute('content', article.publishDate);
    }
    if (schemaElements.dateModified) {
        schemaElements.dateModified.setAttribute('content', article.publishDate);
    }
}

function updateStructuredData(article) {
    const structuredDataScript = document.querySelector('.dynamic-structured-data');
    if (structuredDataScript) {
        const structuredData = {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://nts-phong-kham.mysapo.net",
                        "name": "Trang chủ"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://nts-phong-kham.mysapo.net/tin-tuc",
                        "name": "Tin tức"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@id": `https://nts-phong-kham.mysapo.net/article.html?id=${article.id}`,
                        "name": article.title
                    }
                }
            ]
        };
        
        structuredDataScript.textContent = JSON.stringify(structuredData, null, 2);
    }
}

function searchByTag(tag) {
    // Tìm kiếm bài viết theo tag
    const results = ArticleData.searchArticles(tag);
    console.log('Search results for tag:', tag, results);
    // Có thể redirect hoặc hiển thị kết quả
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
    // Lấy article ID từ URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        // Render bài viết với ID từ URL
        renderArticleTemplate(articleId);
    } else {
        // Nếu không có ID, hiển thị bài viết mặc định hoặc lỗi
        renderArticleTemplate('mang-thai-3-thang-dau');
    }
});
