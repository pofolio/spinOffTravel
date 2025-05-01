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
    const CORRECT_PASSWORD = '6739';
    
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
            console.log('Clicked tab:', targetId); // 디버깅용

            // 일정 탭이 아닌 경우 인증 확인
            if (targetId !== 'schedule' && !isAuthenticated) {
                console.log('Authentication required'); // 디버깅용
                passwordModal.style.display = 'flex';
                return;
            }

            // 탭 전환
            switchTab(tab, targetId);
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
        console.log('Checking password:', passwordInput.value); // 디버깅용
        if (passwordInput.value === CORRECT_PASSWORD) {
            localStorage.setItem('isAuthenticated', 'true');
            passwordModal.style.display = 'none';
            
            // 마지막으로 클릭한 탭으로 이동
            const activeTab = document.querySelector('.tab-btn.active');
            const targetTab = activeTab || document.querySelector('.tab-btn[data-tab="shopping"]');
            const targetId = targetTab.getAttribute('data-tab');
            
            console.log('Switching to tab after authentication:', targetId); // 디버깅용
            switchTab(targetTab, targetId);
        } else {
            passwordInput.value = '';
            passwordInput.placeholder = '비밀번호가 틀렸습니다';
            passwordInput.classList.add('error');
            setTimeout(() => {
                passwordInput.placeholder = '비밀번호를 입력하세요';
                passwordInput.classList.remove('error');
            }, 1500);
        }
    }

    // 탭 전환 함수
    function switchTab(tab, targetId) {
        console.log('Switching to tab:', targetId); // 디버깅용

        // 활성 탭 변경
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // 컨텐츠 변경
        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === targetId) {
                content.classList.add('active');
                console.log('Activated content:', content.id); // 디버깅용
            }
        });
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
        switchTab(initialTab, initialTabId);
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
}); 