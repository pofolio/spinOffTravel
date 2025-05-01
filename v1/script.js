// 여행 데이터 객체
const tripData = {
    tripInfo: {
        title: "친구들과 함께하는 제주도 바다 여행",
        startDate: "2025-04-25",
        endDate: "2025-04-28",
        destination: "제주도 서귀포시"
    },
    participants: [
        { id: 1, name: "김철수", role: "총무", contact: "010-1234-5678", vehicle: 1 },
        { id: 2, name: "이영희", role: "운전자 1", contact: "010-2345-6789", vehicle: 1 },
        { id: 3, name: "박지성", role: "운전자 2", contact: "010-3456-7890", vehicle: 2 },
        { id: 4, name: "최민지", role: "일정 담당", contact: "010-4567-8901", vehicle: 1 },
        { id: 5, name: "정수민", role: "숙소 예약", contact: "010-5678-9012", vehicle: 2 },
        { id: 6, name: "강동원", role: "요리 담당", contact: "010-6789-0123", vehicle: 2 },
        { id: 7, name: "한소희", role: "사진 담당", contact: "010-7890-1234", vehicle: 1 },
        { id: 8, name: "윤재석", role: "음악 담당", contact: "010-8901-2345", vehicle: 2 }
    ],
    vehicles: [
        { id: 1, name: "쏘나타", driver: "이영희", passengers: ["김철수", "최민지", "한소희"], fuelPlan: "출발 전 주유" },
        { id: 2, name: "투싼", driver: "박지성", passengers: ["정수민", "강동원", "윤재석"], fuelPlan: "도착 후 주유" }
    ],
    schedule: [
        {
            date: "2025-04-25",
            items: [
                { time: "08:00", activity: "서울 출발", location: "잠실역 롯데월드몰 앞" },
                { time: "14:00", activity: "제주도 도착", location: "제주공항" },
                { time: "15:30", activity: "렌터카 픽업", location: "제주공항 렌터카 센터" },
                { time: "17:00", activity: "숙소 체크인", location: "서귀포시 해변 펜션" },
                { time: "19:00", activity: "저녁 식사", location: "숙소 근처 해산물 식당" }
            ]
        },
        {
            date: "2025-04-26",
            items: [
                { time: "09:00", activity: "아침 식사", location: "숙소" },
                { time: "10:30", activity: "월정리 해변 방문", location: "월정리" },
                { time: "13:00", activity: "점심 식사", location: "월정리 근처 카페" },
                { time: "15:00", activity: "우도 여행", location: "우도" },
                { time: "19:30", activity: "저녁 식사 및 휴식", location: "숙소" }
            ]
        },
        {
            date: "2025-04-27",
            items: [
                { time: "08:30", activity: "아침 식사", location: "숙소" },
                { time: "10:00", activity: "성산일출봉 등반", location: "성산일출봉" },
                { time: "13:00", activity: "점심 식사", location: "성산 근처 식당" },
                { time: "15:00", activity: "쇠소깍 카약", location: "쇠소깍" },
                { time: "19:00", activity: "바베큐 파티", location: "숙소" }
            ]
        },
        {
            date: "2025-04-28",
            items: [
                { time: "09:00", activity: "아침 식사 및 짐 정리", location: "숙소" },
                { time: "11:00", activity: "숙소 체크아웃", location: "숙소" },
                { time: "12:00", activity: "올레시장 방문", location: "서귀포 올레시장" },
                { time: "14:00", activity: "렌터카 반납", location: "제주공항 렌터카 센터" },
                { time: "16:00", activity: "제주공항 출발", location: "제주공항" },
                { time: "17:30", activity: "서울 도착", location: "김포공항" }
            ]
        }
    ],
    rainPlans: [
        { day: "첫째 날", activity: "제주 박물관 관람", location: "제주시립박물관" },
        { day: "둘째 날", activity: "실내 수영장", location: "서귀포 리조트" },
        { day: "셋째 날", activity: "쇼핑몰 방문", location: "제주시 신화월드" }
    ],
    accommodation: {
        name: "서귀포 바다뷰 펜션",
        address: "제주특별자치도 서귀포시 해변로 123",
        checkIn: "15:00",
        checkOut: "11:00",
        booker: "정수민",
        contact: "064-123-4567",
        roomCount: 3,
        note: "주차장 이용 가능, 바베큐 시설 예약 필요"
    },
    meals: [
        { day: "첫째 날 저녁", type: "외식", place: "해산물 식당", menu: "해물 요리", responsible: "김철수" },
        { day: "둘째 날 아침", type: "조리", place: "숙소", menu: "간단한 샌드위치", responsible: "강동원" },
        { day: "둘째 날 점심", type: "외식", place: "카페", menu: "브런치", responsible: "자유" },
        { day: "둘째 날 저녁", type: "배달", place: "숙소", menu: "치킨과 피자", responsible: "윤재석" },
        { day: "셋째 날 아침", type: "조리", place: "숙소", menu: "계란 프라이와 토스트", responsible: "강동원" },
        { day: "셋째 날 점심", type: "외식", place: "현지 식당", menu: "제주 흑돼지", responsible: "자유" },
        { day: "셋째 날 저녁", type: "직접 요리", place: "숙소", menu: "바베큐", responsible: "강동원, 한소희" },
        { day: "넷째 날 아침", type: "조리", place: "숙소", menu: "시리얼", responsible: "각자 해결" },
        { day: "넷째 날 점심", type: "외식", place: "올레시장", menu: "시장 음식", responsible: "자유" }
    ],
    sharedItems: [
        { id: 1, name: "텐트", responsible: "김철수", checked: true },
        { id: 2, name: "돗자리", responsible: "이영희", checked: true },
        { id: 3, name: "아이스박스", responsible: "박지성", checked: false },
        { id: 4, name: "휴대용 의자", responsible: "최민지", checked: true },
        { id: 5, name: "바베큐 그릴", responsible: "정수민", checked: false },
        { id: 6, name: "블루투스 스피커", responsible: "윤재석", checked: true },
        { id: 7, name: "선크림", responsible: "한소희", checked: true },
        { id: 8, name: "구급상자", responsible: "강동원", checked: false }
    ],
    personalItems: [
        {
            person: "김철수",
            items: [
                { id: 1, name: "수영복", checked: true },
                { id: 2, name: "선글라스", checked: true },
                { id: 3, name: "충전기", checked: false },
                { id: 4, name: "비치샌들", checked: true }
            ]
        },
        {
            person: "이영희",
            items: [
                { id: 1, name: "방수 가방", checked: true },
                { id: 2, name: "수영복", checked: false },
                { id: 3, name: "물안경", checked: true }
            ]
        },
        {
            person: "박지성",
            items: [
                { id: 1, name: "운동화", checked: true },
                { id: 2, name: "셔츠 3벌", checked: true },
                { id: 3, name: "속옷 4벌", checked: false }
            ]
        },
        {
            person: "최민지",
            items: [
                { id: 1, name: "카메라", checked: true },
                { id: 2, name: "모자", checked: true },
                { id: 3, name: "물병", checked: true }
            ]
        },
        {
            person: "정수민",
            items: [
                { id: 1, name: "선크림", checked: true },
                { id: 2, name: "책", checked: false },
                { id: 3, name: "수건", checked: true }
            ]
        },
        {
            person: "강동원",
            items: [
                { id: 1, name: "조리도구", checked: true },
                { id: 2, name: "양념", checked: false },
                { id: 3, name: "앞치마", checked: true }
            ]
        },
        {
            person: "한소희",
            items: [
                { id: 1, name: "비치타올", checked: true },
                { id: 2, name: "드론", checked: false },
                { id: 3, name: "썬스틱", checked: true }
            ]
        },
        {
            person: "윤재석",
            items: [
                { id: 1, name: "보드게임", checked: true },
                { id: 2, name: "노트북", checked: true },
                { id: 3, name: "음악 플레이리스트", checked: true }
            ]
        }
    ],
    expenses: [
        { item: "숙소 비용", amount: 480000, responsible: "정수민" },
        { item: "렌터카 비용", amount: 240000, responsible: "박지성" },
        { item: "유류비", amount: 100000, responsible: "이영희" },
        { item: "식비 (공동)", amount: 320000, responsible: "김철수" },
        { item: "활동비 (카약)", amount: 120000, responsible: "최민지" },
        { item: "바베큐 재료", amount: 160000, responsible: "강동원" }
    ],
    settlement: {
        manager: "김철수",
        accountHolder: "김철수",
        bank: "신한은행",
        accountNumber: "110-123-456789",
        perPersonAmount: 177500,
        note: "5월 1일까지 송금 부탁드립니다."
    },
    paymentStatus: [
        { person: "김철수", paid: true },
        { person: "이영희", paid: true },
        { person: "박지성", paid: false },
        { person: "최민지", paid: true },
        { person: "정수민", paid: false },
        { person: "강동원", paid: true },
        { person: "한소희", paid: false },
        { person: "윤재석", paid: true }
    ],
    contents: {
        playlist: [
            "아이유 - 하루 끝",
            "다비치 - 여름 안에서",
            "에코브릿지 - 바다",
            "선우정아 - 구애",
            "혁오 - 위잉위잉"
        ],
        games: [
            "끝말잇기",
            "스무고개",
            "인생게임",
            "보드게임 (블루마블)",
            "UNO 카드"
        ],
        videos: [
            "제주도 여행 브이로그",
            "바다 다큐멘터리",
            "여행 영화 모음",
            "비치 서핑 튜토리얼",
            "캠핑 요리 가이드"
        ]
    },
    drivingInfo: [
        { title: "운전 교대 시점", content: "2시간마다 교대" },
        { title: "주유소 위치", content: "고속도로 천안휴게소, 제주 서귀포시 주유소" },
        { title: "통행료", content: "약 8,000원 (편도)" },
        { title: "주차 팁", content: "숙소 주차장은 건물 뒤편에 있으며, 차량 번호를 미리 알려주세요." }
    ],
    memos: [
        { text: "모두 여권 필수 지참! 비행기 탑승 시 필요합니다.", date: "2025-04-01" },
        { text: "태풍 예보 있으니 우산 챙기세요.", date: "2025-04-15" }
    ]
};

// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
    // 기본 정보 초기화
    initializeBasicInfo();

    // 참가자 및 차량 정보 로드
    loadParticipantsInfo();
    loadVehiclesInfo();

    // 일정 정보 로드
    loadSchedule();
    loadRainPlans();

    // 숙소 및 식사 정보 로드
    loadAccommodationInfo();
    loadMealPlans();

    // 짐 및 준비물 정보 로드
    loadSharedItems();
    loadPersonalItems();

    // 비용 및 정산 정보 로드
    loadExpenses();
    loadSettlementInfo();
    loadPaymentStatus();

    // 컨텐츠 정보 로드
    loadContentItems();

    // 기타 정보 로드
    loadDrivingInfo();
    loadMemos();

    // 탭 전환 이벤트 설정
    setupTabNavigation();

    // 사용자 상호작용 이벤트 설정
    setupUserInteractions();

    // 마지막 업데이트 시간 설정
    updateLastUpdated();
});

// 기본 정보 초기화 함수
function initializeBasicInfo() {
    document.getElementById("trip-title").textContent = tripData.tripInfo.title;
    document.getElementById("trip-name").textContent = tripData.tripInfo.title;

    const startDate = new Date(tripData.tripInfo.startDate);
    const endDate = new Date(tripData.tripInfo.endDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedStartDate = startDate.toLocaleDateString('ko-KR', options);
    const formattedEndDate = endDate.toLocaleDateString('ko-KR', options);

    const duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById("trip-date").textContent = `${formattedStartDate} ~ ${formattedEndDate} (${duration}일)`;
    document.getElementById("trip-period").textContent = `${formattedStartDate} ~ ${formattedEndDate} (${duration}일)`;
    document.getElementById("trip-destination").textContent = tripData.tripInfo.destination;
}

// 참가자 정보 로드 함수
function loadParticipantsInfo() {
    const participantsList = document.getElementById("participants-list");
    participantsList.innerHTML = "";

    tripData.participants.forEach(participant => {
        const participantCard = document.createElement("div");
        participantCard.className = "participant-card";

        const vehicleInfo = tripData.vehicles.find(v => v.id === participant.vehicle);

        participantCard.innerHTML = `
            <h3>${participant.name}</h3>
            <div class="info-item">
                <label>역할:</label>
                <span>${participant.role}</span>
            </div>
            <div class="info-item">
                <label>연락처:</label>
                <span>${participant.contact}</span>
            </div>
            <div class="info-item">
                <label>탑승 차량:</label>
                <span>${vehicleInfo ? vehicleInfo.name : "미지정"}</span>
            </div>
        `;

        participantsList.appendChild(participantCard);
    });
}

// 차량 정보 로드 함수
function loadVehiclesInfo() {
    const vehiclesList = document.getElementById("vehicles-list");
    vehiclesList.innerHTML = "";

    tripData.vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement("div");
        vehicleCard.className = "vehicle-card";

        vehicleCard.innerHTML = `
            <h3>${vehicle.name}</h3>
            <div class="info-item">
                <label>운전자:</label>
                <span>${vehicle.driver}</span>
            </div>
            <div class="info-item">
                <label>탑승자:</label>
                <span>${vehicle.passengers.join(", ")}</span>
            </div>
            <div class="info-item">
                <label>주유 계획:</label>
                <span>${vehicle.fuelPlan}</span>
            </div>
        `;

        vehiclesList.appendChild(vehicleCard);
    });
}

// 일정 정보 로드 함수
function loadSchedule() {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = "";

    tripData.schedule.forEach(day => {
        const scheduleDay = document.createElement("div");
        scheduleDay.className = "schedule-day";

        const date = new Date(day.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        const formattedDate = date.toLocaleDateString('ko-KR', options);

        let scheduleItems = "";
        day.items.forEach(item => {
            scheduleItems += `
                <div class="schedule-item">
                    <span class="schedule-time">${item.time}</span>
                    <span class="schedule-activity">${item.activity}</span>
                    <span class="schedule-location">${item.location}</span>
                </div>
            `;
        });

        scheduleDay.innerHTML = `
            <div class="schedule-day-header">${formattedDate}</div>
            <div class="schedule-items">
                ${scheduleItems}
            </div>
        `;

        scheduleList.appendChild(scheduleDay);
    });
}

// 우천 시 대체 일정 로드 함수
function loadRainPlans() {
    const rainPlansList = document.getElementById("rain-plans-list");
    rainPlansList.innerHTML = "";

    tripData.rainPlans.forEach(plan => {
        const planItem = document.createElement("div");
        planItem.className = "schedule-item";

        planItem.innerHTML = `
            <span class="schedule-time">${plan.day}</span>
            <span class="schedule-activity">${plan.activity}</span>
            <span class="schedule-location">${plan.location}</span>
        `;

        rainPlansList.appendChild(planItem);
    });
}

// 숙소 정보 로드 함수
function loadAccommodationInfo() {
    const accommodationInfo = document.getElementById("accommodation-info");
    const accom = tripData.accommodation;

    accommodationInfo.innerHTML = `
        <div class="info-item">
            <label>숙소명:</label>
            <span>${accom.name}</span>
        </div>
        <div class="info-item">
            <label>주소:</label>
            <span>${accom.address}</span>
        </div>
        <div class="info-item">
            <label>체크인:</label>
            <span>${accom.checkIn}</span>
        </div>
        <div class="info-item">
            <label>체크아웃:</label>
            <span>${accom.checkOut}</span>
        </div>
        <div class="info-item">
            <label>예약자:</label>
            <span>${accom.booker}</span>
        </div>
        <div class="info-item">
            <label>연락처:</label>
            <span>${accom.contact}</span>
        </div>
        <div class="info-item">
            <label>객실 수:</label>
            <span>${accom.roomCount}개</span>
        </div>
        <div class="info-item">
            <label>참고사항:</label>
            <span>${accom.note}</span>
        </div>
    `;
}

// 식사 계획 로드 함수
function loadMealPlans() {
    const mealPlans = document.getElementById("meal-plans");
    mealPlans.innerHTML = "";

    tripData.meals.forEach(meal => {
        const mealItem = document.createElement("div");
        mealItem.className = "info-item";

        mealItem.innerHTML = `
            <label>${meal.day}:</label>
            <span>${meal.type} - ${meal.place} (${meal.menu}, 담당: ${meal.responsible})</span>
        `;

        mealPlans.appendChild(mealItem);
    });
}

// 공용 준비물 로드 함수
function loadSharedItems() {
    const sharedItems = document.getElementById("shared-items");
    sharedItems.innerHTML = "";

    tripData.sharedItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = `checklist-item ${item.checked ? 'checked' : ''}`;
        itemElement.dataset.id = item.id;

        itemElement.innerHTML = `
            <input type="checkbox" id="shared-item-${item.id}" ${item.checked ? 'checked' : ''}>
            <label for="shared-item-${item.id}">${item.name} (담당: ${item.responsible})</label>
        `;

        sharedItems.appendChild(itemElement);
    });
}

// 개인 준비물 로드 함수
function loadPersonalItems() {
    const personalItems = document.getElementById("personal-items");
    personalItems.innerHTML = "";

    tripData.personalItems.forEach(person => {
        const accordion = document.createElement("div");
        accordion.className = "accordion";

        let itemsHTML = "";
        person.items.forEach(item => {
            itemsHTML += `
                <div class="checklist-item ${item.checked ? 'checked' : ''}" data-id="${item.id}">
                    <input type="checkbox" id="personal-item-${person.person}-${item.id}" ${item.checked ? 'checked' : ''}>
                    <label for="personal-item-${person.person}-${item.id}">${item.name}</label>
                </div>
            `;
        });

        accordion.innerHTML = `
            <div class="accordion-header">
                <span>${person.person}의 준비물</span>
                <span class="accordion-toggle">▼</span>
            </div>
            <div class="accordion-content">
                <div class="checklist">
                    ${itemsHTML}
                </div>
            </div>
        `;

        personalItems.appendChild(accordion);
    });
}

// 비용 항목 로드 함수
function loadExpenses() {
    const expensesList = document.getElementById("expenses-list");
    expensesList.innerHTML = "";

    let totalExpense = 0;

    tripData.expenses.forEach(expense => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.item}</td>
            <td>${expense.amount.toLocaleString()}원</td>
            <td>${expense.responsible}</td>
        `;

        expensesList.appendChild(row);
        totalExpense += expense.amount;
    });

    document.getElementById("total-expense").textContent = totalExpense.toLocaleString() + "원";
}

// 정산 정보 로드 함수
function loadSettlementInfo() {
    const settlementInfo = document.getElementById("settlement-info");
    const settlement = tripData.settlement;

    settlementInfo.innerHTML = `
        <div class="info-item">
            <label>정산 담당자:</label>
            <span>${settlement.manager}</span>
        </div>
        <div class="info-item">
            <label>계좌주:</label>
            <span>${settlement.accountHolder}</span>
        </div>
        <div class="info-item">
            <label>은행:</label>
            <span>${settlement.bank}</span>
        </div>
        <div class="info-item">
            <label>계좌번호:</label>
            <span>${settlement.accountNumber}</span>
        </div>
        <div class="info-item">
            <label>1인당 금액:</label>
            <span>${settlement.perPersonAmount.toLocaleString()}원</span>
        </div>
        <div class="info-item">
            <label>참고사항:</label>
            <span>${settlement.note}</span>
        </div>
    `;
}

// 송금 상태 로드 함수
function loadPaymentStatus() {
    const paymentStatus = document.getElementById("payment-status");
    paymentStatus.innerHTML = "";

    tripData.paymentStatus.forEach(status => {
        const statusItem = document.createElement("div");
        statusItem.className = `checklist-item ${status.paid ? 'checked' : ''}`;
        statusItem.dataset.person = status.person;

        statusItem.innerHTML = `
            <input type="checkbox" id="payment-${status.person}" ${status.paid ? 'checked' : ''}>
            <label for="payment-${status.person}">${status.person} - ${tripData.settlement.perPersonAmount.toLocaleString()}원</label>
        `;

        paymentStatus.appendChild(statusItem);
    });
}

// 컨텐츠 항목 로드 함수
function loadContentItems() {
    // 플레이리스트 로드
    const playlistItems = document.getElementById("playlist-items");
    playlistItems.innerHTML = "";

    tripData.contents.playlist.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.className = "content-item";
        songItem.dataset.index = index;

        songItem.innerHTML = `
            <span>${song}</span>
            <button class="remove-song">×</button>
        `;

        playlistItems.appendChild(songItem);
    });

    // 게임 목록 로드
    const gameItems = document.getElementById("game-items");
    gameItems.innerHTML = "";

    tripData.contents.games.forEach((game, index) => {
        const gameItem = document.createElement("div");
        gameItem.className = "content-item";
        gameItem.dataset.index = index;

        gameItem.innerHTML = `
            <span>${game}</span>
            <button class="remove-game">×</button>
        `;

        gameItems.appendChild(gameItem);
    });

    // 영상 목록 로드
    const videoItems = document.getElementById("video-items");
    videoItems.innerHTML = "";

    tripData.contents.videos.forEach((video, index) => {
        const videoItem = document.createElement("div");
        videoItem.className = "content-item";
        videoItem.dataset.index = index;

        videoItem.innerHTML = `
            <span>${video}</span>
            <button class="remove-video">×</button>
        `;

        videoItems.appendChild(videoItem);
    });
}

// 운전 정보 로드 함수
function loadDrivingInfo() {
    const drivingInfo = document.getElementById("driving-info");
    drivingInfo.innerHTML = "";

    tripData.drivingInfo.forEach(info => {
        const infoItem = document.createElement("div");
        infoItem.className = "info-item";

        infoItem.innerHTML = `
            <label>${info.title}:</label>
            <span>${info.content}</span>
        `;

        drivingInfo.appendChild(infoItem);
    });
}

// 메모 로드 함수
function loadMemos() {
    const savedMemos = document.getElementById("saved-memos");
    savedMemos.innerHTML = "";

    tripData.memos.forEach((memo, index) => {
        const memoItem = document.createElement("div");
        memoItem.className = "memo-item";
        memoItem.dataset.index = index;

        memoItem.innerHTML = `
            <div class="memo-text">${memo.text}</div>
            <div class="memo-date">${memo.date}</div>
            <button class="remove-memo">삭제</button>
        `;

        savedMemos.appendChild(memoItem);
    });
}

// 탭 네비게이션 설정 함수
function setupTabNavigation() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // 현재 활성화된 탭 및 콘텐츠 비활성화
            document.querySelector(".tab.active").classList.remove("active");
            document.querySelector(".tab-content.active").classList.remove("active");

            // 클릭한 탭 및 해당 콘텐츠 활성화
            this.classList.add("active");
            const tabContentId = this.getAttribute("data-tab");
            document.getElementById(tabContentId).classList.add("active");
        });
    });
}

// 사용자 상호작용 설정 함수
function setupUserInteractions() {
    // 우천 시 대체 일정 토글
    const toggleRainPlan = document.getElementById("toggle-rain-plan");
    toggleRainPlan.addEventListener("click", function () {
        const rainPlanContent = document.getElementById("rain-plan-content");
        rainPlanContent.classList.toggle("hidden");
        this.textContent = rainPlanContent.classList.contains("hidden") ? "보기" : "숨기기";
    });

    // 아코디언 토글 기능
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", function () {
            const accordion = this.parentElement;
            accordion.classList.toggle("open");
            const toggle = this.querySelector(".accordion-toggle");
            toggle.textContent = accordion.classList.contains("open") ? "▲" : "▼";
        });
    });

    // 체크리스트 아이템 체크 기능
    document.addEventListener('change', function (e) {
        const target = e.target;
        if (target.type === 'checkbox') {
            const listItem = target.parentElement;
            if (listItem.classList.contains('checklist-item')) {
                listItem.classList.toggle('checked', target.checked);

                // 데이터 업데이트
                updateChecklistData(target);
            }
        }
    });

    // 플레이리스트 추가 기능
    const addSongBtn = document.getElementById("add-song");
    addSongBtn.addEventListener("click", function () {
        const newSongInput = document.getElementById("new-song");
        if (newSongInput.value.trim() !== "") {
            // 데이터 업데이트
            tripData.contents.playlist.push(newSongInput.value.trim());

            // UI 업데이트
            loadContentItems();

            // 입력 필드 초기화
            newSongInput.value = "";
        }
    });

    // 게임 추가 기능
    const addGameBtn = document.getElementById("add-game");
    addGameBtn.addEventListener("click", function () {
        const newGameInput = document.getElementById("new-game");
        if (newGameInput.value.trim() !== "") {
            // 데이터 업데이트
            tripData.contents.games.push(newGameInput.value.trim());

            // UI 업데이트
            loadContentItems();

            // 입력 필드 초기화
            newGameInput.value = "";
        }
    });

    // 영상 추가 기능
    const addVideoBtn = document.getElementById("add-video");
    addVideoBtn.addEventListener("click", function () {
        const newVideoInput = document.getElementById("new-video");
        if (newVideoInput.value.trim() !== "") {
            // 데이터 업데이트
            tripData.contents.videos.push(newVideoInput.value.trim());

            // UI 업데이트
            loadContentItems();

            // 입력 필드 초기화
            newVideoInput.value = "";
        }
    });

    // 컨텐츠 항목 삭제 기능
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains("remove-song")) {
            const index = parseInt(e.target.parentElement.dataset.index);
            tripData.contents.playlist.splice(index, 1);
            loadContentItems();
        } else if (e.target.classList.contains("remove-game")) {
            const index = parseInt(e.target.parentElement.dataset.index);
            tripData.contents.games.splice(index, 1);
            loadContentItems();
        } else if (e.target.classList.contains("remove-video")) {
            const index = parseInt(e.target.parentElement.dataset.index);
            tripData.contents.videos.splice(index, 1);
            loadContentItems();
        } else if (e.target.classList.contains("remove-memo")) {
            const index = parseInt(e.target.parentElement.dataset.index);
            tripData.memos.splice(index, 1);
            loadMemos();
        }
    });

    // 메모 저장 기능
    const saveMemoBtn = document.getElementById("save-memo");
    saveMemoBtn.addEventListener("click", function () {
        const memoText = document.getElementById("memo-text");
        if (memoText.value.trim() !== "") {
            // 현재 날짜 가져오기
            const today = new Date();
            const formattedDate = today.toLocaleDateString('ko-KR');

            // 데이터 업데이트
            tripData.memos.push({
                text: memoText.value.trim(),
                date: formattedDate
            });

            // UI 업데이트
            loadMemos();

            // 입력 필드 초기화
            memoText.value = "";
        }
    });
}

// 체크리스트 데이터 업데이트 함수
function updateChecklistData(checkbox) {
    const listItem = checkbox.parentElement;

    // 공용 준비물 체크 업데이트
    if (checkbox.id.startsWith("shared-item-")) {
        const itemId = parseInt(listItem.dataset.id);
        const itemIndex = tripData.sharedItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            tripData.sharedItems[itemIndex].checked = checkbox.checked;
        }
    }
    // 개인 준비물 체크 업데이트
    else if (checkbox.id.startsWith("personal-item-")) {
        const parts = checkbox.id.split("-");
        const personName = parts[2];
        const itemId = parseInt(listItem.dataset.id);

        const personIndex = tripData.personalItems.findIndex(person => person.person === personName);
        if (personIndex !== -1) {
            const itemIndex = tripData.personalItems[personIndex].items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                tripData.personalItems[personIndex].items[itemIndex].checked = checkbox.checked;
            }
        }
    }
    // 송금 확인 체크 업데이트
    else if (checkbox.id.startsWith("payment-")) {
        const personName = listItem.dataset.person;
        const personIndex = tripData.paymentStatus.findIndex(status => status.person === personName);
        if (personIndex !== -1) {
            tripData.paymentStatus[personIndex].paid = checkbox.checked;
        }
    }

    // 마지막 업데이트 시간 갱신
    updateLastUpdated();
}

// 마지막 업데이트 시간 설정 함수
function updateLastUpdated() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    document.getElementById("last-updated").textContent = now.toLocaleDateString('ko-KR', options);
}