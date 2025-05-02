document.addEventListener('DOMContentLoaded', () => {
    // 탭 관련 변수
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs');
    let lastScrollTop = 0;
    
    // 이미지 모달 관련 변수
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.gallery-img');

    // 탭 전환 기능
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 활성화된 탭 버튼과 컨텐츠 제거
            document.querySelector('.tab-btn.active').classList.remove('active');
            document.querySelector('.tab-content.active').classList.remove('active');

            // 클릭한 탭 활성화
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 이미지 갤러리 기능
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            modalImage.src = img.src;
            imageModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex].src;
    });

    // 키보드 이벤트
    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display === 'block') {
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
        document.getElementById(initialTabId).classList.add('active');
    }

    // 주소 복사 기능
    const addressElements = document.querySelectorAll('.address');
    addressElements.forEach(element => {
        element.addEventListener('click', () => {
            const address = element.getAttribute('data-clipboard');
            navigator.clipboard.writeText(address).then(() => {
                const originalText = element.innerHTML;
                element.innerHTML = '<i class="fas fa-check"></i> 주소가 복사되었습니다';
                setTimeout(() => {
                    element.innerHTML = originalText;
                }, 2000);
            });
        });
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
}); 