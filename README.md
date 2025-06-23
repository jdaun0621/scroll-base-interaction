
# Portfolio Project #1

**카드 셔플 / 스크롤 인터랙션 / 레이아웃 트랜지션** 기반 인터랙티브 웹 사이트입니다.  


---

##  사용 기술

- **Next.js 15 (App Router)**
- **TypeScript**
- **Framer Motion** (모션 애니메이션)
- **Tailwind CSS** (스타일링)
  

---

##  주요 기능

### 1. 카드 셔플
- 상담 필터(`ALL / DESIGN / DEV`) 클릭 시
- 해당 카테고리의 카드만 부드럽게 정렬 및 전환

### 2. 스크롤 인터랙션
- 스크롤 위치에 따라 제목, 필터버튼이 점점 나타남
- `Framer Motion + useScroll` 활용

### 3. 레이아웃 트랜지션
- 카드 클릭 시 상세 팝업 등장
- `layoutId` 활용하여 자연스럽게 카드 → 팝업 전환

---

##  설치 및 실행 방법

\`\`\`bash
pnpm install    # 패키지 설치
pnpm dev        # 개발 서버 실행 (http://localhost:3000)
\`\`\`

> `npm`, `yarn`, `bun` 사용 가능

---

##  개발 구조

\`\`\`bash
src/
├── app/
│   └── page.tsx       # 메인 페이지 (모션 포함)
├── components/
│   └── PortfolioCards.tsx # 카드 셔플/모달 컴포넌트
├── styles/
└── ...
\`\`\`

---

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
"@ | Out-File -Encoding UTF8 README.md
