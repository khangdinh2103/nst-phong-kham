// JavaScript cho trang danh sách tin tức
// Sử dụng dữ liệu từ article-data.js

// Hàm render danh sách bài viết
function renderNewsList() {
    const articles = Object.values(ArticleData.articles);
    const newsContainer = document.querySelector('.list-blogs.blog-main');
    
    if (!newsContainer) return;

    // Render tất cả bài viết
    newsContainer.innerHTML = articles.map(article => `
        <div class="myblog col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="itemblg large">
                <a class="image-blog-left" href="article.html?id=${article.id}" title="${article.title}">
                    <img src="//bizweb.dktcdn.net/100/358/839/themes/725246/assets/800x500.png?1705906417109" 
                         data-lazyload="${article.featuredImage}" 
                         title="${article.title}" 
                         alt="${article.title}">
                </a>
                <div class="content_blog">
                    <h3>
                        <a href="article.html?id=${article.id}" title="${article.title}">
                            ${article.title}
                        </a>
                    </h3>
                    <div class="article-meta-info">
                        <span class="author"><i class="fa fa-user"></i> ${article.author}</span>
                        <span class="date"><i class="fa fa-calendar"></i> ${formatDate(article.publishDate)}</span>
                        <span class="read-time"><i class="fa fa-clock-o"></i> ${article.readTime}</span>
                        <span class="category"><i class="fa fa-folder"></i> ${article.category}</span>
                    </div>
                    <p>${article.description}</p>
                    <a class="more" href="article.html?id=${article.id}" title="Xem chi tiết">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `).join('');

    // Render sidebar
    renderSidebarContent();
}

// Hàm render nội dung sidebar
function renderSidebarContent() {
    // Render danh mục tin tức
    renderCategories();
    
    // Render bài viết nổi bật
    renderFeaturedArticles();
    
    // Render câu hỏi thường gặp
    renderFAQArticles();
}

// Hàm render danh mục
function renderCategories() {
    const categories = ArticleData.getCategories();
    const categoryContainer = document.querySelector('.nav-category .nav.navbar-pills');
    
    if (categoryContainer) {
        categoryContainer.innerHTML = categories.map(category => {
            const articlesInCategory = ArticleData.getArticlesByCategory(category);
            return `
                <li class="nav-item lv1">
                    <a href="#" onclick="filterByCategory('${category}')" title="${category}">
                        <span>${category}</span>
                        <span class="count">(${articlesInCategory.length})</span>
                    </a>
                </li>
            `;
        }).join('');
    }
}

// Hàm render bài viết nổi bật
function renderFeaturedArticles() {
    const featuredArticles = Object.values(ArticleData.articles).slice(0, 5);
    const featuredContainer = document.querySelector('.section_blogloop_related .col-lg-12');
    
    if (featuredContainer) {
        featuredContainer.innerHTML = featuredArticles.map(article => `
            <div class="itemblg medium">
                <a class="image-blog-left" href="article.html?id=${article.id}" title="${article.title}">
                    <img src="//bizweb.dktcdn.net/100/358/839/themes/725246/assets/800x500.png?1705906417109" 
                         data-lazyload="${article.featuredImage}" 
                         title="${article.title}" 
                         alt="${article.title}">
                </a>
                <div class="content_blog">
                    <h3>
                        <a href="article.html?id=${article.id}" title="${article.title}">
                            ${article.title}
                        </a>
                    </h3>
                </div>
            </div>
        `).join('');
    }
}

// Hàm render câu hỏi thường gặp
function renderFAQArticles() {
    const faqArticles = Object.values(ArticleData.articles).slice(0, 5);
    const faqContainer = document.querySelector('.section_question_blog ul');
    
    if (faqContainer) {
        faqContainer.innerHTML = faqArticles.map(article => `
            <li class="itemblg medium">
                <a href="article.html?id=${article.id}" title="${article.title}">
                    ${article.title}
                </a>
            </li>
        `).join('');
    }
}

// Hàm lọc theo danh mục
function filterByCategory(category) {
    const articles = ArticleData.getArticlesByCategory(category);
    const newsContainer = document.querySelector('.list-blogs.blog-main');
    
    if (!newsContainer) return;

    newsContainer.innerHTML = articles.map(article => `
        <div class="myblog col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="itemblg large">
                <a class="image-blog-left" href="article.html?id=${article.id}" title="${article.title}">
                    <img src="//bizweb.dktcdn.net/100/358/839/themes/725246/assets/800x500.png?1705906417109" 
                         data-lazyload="${article.featuredImage}" 
                         title="${article.title}" 
                         alt="${article.title}">
                </a>
                <div class="content_blog">
                    <h3>
                        <a href="article.html?id=${article.id}" title="${article.title}">
                            ${article.title}
                        </a>
                    </h3>
                    <div class="article-meta-info">
                        <span class="author"><i class="fa fa-user"></i> ${article.author}</span>
                        <span class="date"><i class="fa fa-calendar"></i> ${formatDate(article.publishDate)}</span>
                        <span class="read-time"><i class="fa fa-clock-o"></i> ${article.readTime}</span>
                        <span class="category"><i class="fa fa-folder"></i> ${article.category}</span>
                    </div>
                    <p>${article.description}</p>
                    <a class="more" href="article.html?id=${article.id}" title="Xem chi tiết">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `).join('');

    // Cập nhật tiêu đề trang
    const pageTitle = document.querySelector('.title_page');
    if (pageTitle) {
        pageTitle.textContent = `Tin tức - ${category}`;
    }
}

// Hàm tìm kiếm
function searchArticles() {
    const searchForm = document.querySelector('.search-bar');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = document.querySelector('.search-text').value.trim();
            
            if (query) {
                const results = ArticleData.searchArticles(query, 10);
                displaySearchResults(results, query);
            }
        });
    }
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results, query) {
    const newsContainer = document.querySelector('.list-blogs.blog-main');
    
    if (!newsContainer) return;

    if (results.length === 0) {
        newsContainer.innerHTML = `
            <div class="col-xs-12 text-center">
                <div style="padding: 50px;">
                    <h3>Không tìm thấy kết quả cho "${query}"</h3>
                    <p>Vui lòng thử lại với từ khóa khác.</p>
                    <button onclick="renderNewsList()" class="btn btn-primary">Xem tất cả bài viết</button>
                </div>
            </div>
        `;
        return;
    }

    newsContainer.innerHTML = results.map(article => `
        <div class="myblog col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="itemblg large">
                <a class="image-blog-left" href="article.html?id=${article.id}" title="${article.title}">
                    <img src="//bizweb.dktcdn.net/100/358/839/themes/725246/assets/800x500.png?1705906417109" 
                         data-lazyload="${article.featuredImage}" 
                         title="${article.title}" 
                         alt="${article.title}">
                </a>
                <div class="content_blog">
                    <h3>
                        <a href="article.html?id=${article.id}" title="${article.title}">
                            ${article.title}
                        </a>
                    </h3>
                    <div class="article-meta-info">
                        <span class="author"><i class="fa fa-user"></i> ${article.author}</span>
                        <span class="date"><i class="fa fa-calendar"></i> ${formatDate(article.publishDate)}</span>
                        <span class="read-time"><i class="fa fa-clock-o"></i> ${article.readTime}</span>
                        <span class="category"><i class="fa fa-folder"></i> ${article.category}</span>
                    </div>
                    <p>${article.description}</p>
                    <a class="more" href="article.html?id=${article.id}" title="Xem chi tiết">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `).join('');

    // Cập nhật tiêu đề trang
    const pageTitle = document.querySelector('.title_page');
    if (pageTitle) {
        pageTitle.textContent = `Kết quả tìm kiếm: "${query}" (${results.length} bài viết)`;
    }
}

// Hàm format ngày tháng
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
    // Render danh sách tin tức
    renderNewsList();
    
    // Khởi tạo tìm kiếm
    searchArticles();
    
    // Lazy load images
    if (typeof lazyLoadImages === 'function') {
        lazyLoadImages();
    }
});

// Hàm reset về danh sách đầy đủ
function showAllArticles() {
    renderNewsList();
    
    // Reset tiêu đề trang
    const pageTitle = document.querySelector('.title_page');
    if (pageTitle) {
        pageTitle.textContent = 'Tin tức';
    }
}
