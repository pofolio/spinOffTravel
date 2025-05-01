document.addEventListener('DOMContentLoaded', () => {
    // 탭 관련 변수
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs');
    let lastScrollTop = 0;

    // 비밀번호 모달 관련 변수
    const passwordModal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const errorMessage = document.querySelector('.error-message');
    const CORRECT_PASSWORD = '6739';
    let targetTab = null;
    
    // 이미지 모달 관련 변수
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.gallery-img');

    // 로컬 스토리지에서 인증 상태 확인
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // 탭 전환 기능
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            const requirePassword = tab.getAttribute('data-require-password') === 'true';
            
            if (requirePassword) {
                targetTab = targetId;
                passwordModal.style.display = 'flex';
                passwordInput.value = '';
                errorMessage.style.display = 'none';
                // 입력란에 자동 포커스
                setTimeout(() => {
                    passwordInput.focus();
                }, 100);
            } else {
                switchTab(targetId);
            }
        });
    });

    // 비밀번호 확인
    submitPassword.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordModal.style.display = 'none';
            errorMessage.style.display = 'none';
            if (targetTab) {
                switchTab(targetTab);
            }
        } else {
            errorMessage.style.display = 'block';
        }
    }

    // 탭 전환 함수
    function switchTab(tabId) {
        // 활성 탭 변경
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // 선택된 탭과 콘텐츠 활성화
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    // 이미지 갤러리 기능
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(index);
            imageModal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    function showImage(index) {
        const imgSrc = images[index].src;
        modalImage.src = imgSrc;
    }

    // 키보드 이벤트
    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                imageModal.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });

    // 스크롤 시 탭 메뉴 처리
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            tabsContainer.style.transform = 'translateY(-100%)';
        } else {
            tabsContainer.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 초기 상태 설정
    const initialTab = document.querySelector('.tab-btn.active');
    if (initialTab) {
        const initialTabId = initialTab.getAttribute('data-tab');
        switchTab(initialTabId);
    }

    // 주소 복사 기능
    const addressElements = document.querySelectorAll('.address');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    addressElements.forEach(element => {
        element.addEventListener('click', async () => {
            const address = element.getAttribute('data-clipboard');
            
            try {
                await navigator.clipboard.writeText(address);
                element.classList.add('copy-success');
                
                // 복사 성공 표시 애니메이션
                setTimeout(() => {
                    element.classList.remove('copy-success');
                }, 1000);
                
                // 툴팁 표시
                showTooltip('주소가 복사되었습니다!', element);
            } catch (err) {
                console.error('주소 복사 실패:', err);
                showTooltip('주소 복사에 실패했습니다.', element);
            }
        });

        // 호버 효과
        element.addEventListener('mouseenter', () => {
            showTooltip('클릭하여 주소 복사', element);
        });

        element.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    });

    // 외부 링크 처리
    const mapLinks = document.querySelectorAll('.map-link, .link-btn');
    
    mapLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });

        // 호버 효과
        link.addEventListener('mouseenter', () => {
            showTooltip('새 탭에서 열기', link);
        });

        link.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    });

    // 툴팁 표시 함수
    function showTooltip(message, element) {
        const tooltip = document.querySelector('.tooltip');
        tooltip.textContent = message;
        
        // 요소 위치 기준으로 툴팁 위치 조정
        const rect = element.getBoundingClientRect();
        const tooltipHeight = 30; // 예상 툴팁 높이
        
        tooltip.style.left = rect.left + (rect.width / 2) + 'px';
        tooltip.style.top = (rect.top - tooltipHeight - 5) + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.opacity = '1';
    }

    // 툴팁 숨기기 함수
    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        tooltip.style.opacity = '0';
    }

    // 스크롤 애니메이션
    const timeBlocks = document.querySelectorAll('.time-block, .category, .detail-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    timeBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'all 0.5s ease';
        observer.observe(block);
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === passwordModal) {
            passwordModal.style.display = 'none';
            errorMessage.style.display = 'none';
        }
    });

    // 이미지 갤러리 슬라이드 기능
    const galleryGrid = document.querySelector('.gallery-grid');
    const currentSlideSpan = document.querySelector('.current-slide');
    const totalSlidesSpan = document.querySelector('.total-slides');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.gallery-slide').length;

    // 총 슬라이드 수 표시
    totalSlidesSpan.textContent = totalSlides;

    // 슬라이드 이동 함수
    function moveSlide(direction) {
        if (direction === 'next' && currentSlide < totalSlides - 1) {
            currentSlide++;
        } else if (direction === 'prev' && currentSlide > 0) {
            currentSlide--;
        }
        
        galleryGrid.style.transform = `translateX(-${currentSlide * 100}%)`;
        currentSlideSpan.textContent = currentSlide + 1;
        
        // 버튼 활성화/비활성화
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    }

    // 버튼 이벤트 리스너
    prevBtn.addEventListener('click', () => moveSlide('prev'));
    nextBtn.addEventListener('click', () => moveSlide('next'));

    // 초기 버튼 상태 설정
    prevBtn.style.opacity = '0.5';

    // 구매 항목 관련 기능
    const addItemBtn = document.getElementById('addItemBtn');
    const addItemModal = document.getElementById('addItemModal');
    const addItemForm = document.getElementById('addItemForm');
    const shoppingTableBody = document.getElementById('shoppingTableBody');
    const totalAmountElement = document.getElementById('totalAmount');
    const cancelBtn = document.querySelector('.cancel-btn');

    // 모달 열기
    addItemBtn.addEventListener('click', function() {
        addItemModal.style.display = 'block';
    });

    // 모달 닫기
    cancelBtn.addEventListener('click', function() {
        addItemModal.style.display = 'none';
        addItemForm.reset();
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(event) {
        if (event.target === addItemModal) {
            addItemModal.style.display = 'none';
            addItemForm.reset();
        }
    });

    // 새 항목 추가
    addItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const itemName = document.getElementById('itemName').value;
        const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
        const itemPrice = parseInt(document.getElementById('itemPrice').value);
        const totalPrice = itemQuantity * itemPrice;

        // 테이블에 새 행 추가
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td>${itemPrice.toLocaleString()}원</td>
            <td>${totalPrice.toLocaleString()}원</td>
            <td>
                <button class="delete-btn" onclick="deleteItem(this)">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        shoppingTableBody.appendChild(newRow);
        
        // 총액 업데이트
        updateTotalAmount();
        
        // 모달 닫기 및 폼 초기화
        addItemModal.style.display = 'none';
        addItemForm.reset();
    });

    // 항목 삭제
    window.deleteItem = function(button) {
        const row = button.parentNode.parentNode;
        row.remove();
        updateTotalAmount();
    };

    // 총액 계산
    function updateTotalAmount() {
        let total = 0;
        const rows = shoppingTableBody.getElementsByTagName('tr');
        
        for (let row of rows) {
            const cells = row.getElementsByTagName('td');
            if (cells.length >= 4) {
                const totalCell = cells[3].textContent;
                total += parseInt(totalCell.replace(/[^0-9]/g, ''));
            }
        }
        
        totalAmountElement.textContent = total.toLocaleString() + '원';
    }
}); 