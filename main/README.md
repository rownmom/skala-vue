# Skala Vue 종합실습

Vue 3 + Vite 기반으로 진행한 SKALA Vue.js 종합실습 프로젝트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

실행 전 프로젝트 루트에 `.env.local` 파일을 만들고 아래 내용을 추가해야 날씨 관련 실습이 정상 동작합니다.

```
VITE_OPENWEATHER_API_KEY=본인의_OpenWeatherMap_API_KEY
```

## 배포 주소

- Vercel (날씨 대시보드 클린 버전): https://skala-vue-rownmom.vercel.app

## 구현 기능

### 1. Vue 기본 문법
- 템플릿 문법, 데이터 바인딩 (SampleOne, SampleTwo)
- 이벤트 핸들링: 기본 이벤트, 이벤트 객체, 이벤트 수식어 (EventBasic, EventObject, EventModifier)
- v-model 양방향 바인딩 및 수식어 (ModelBasic, FormElements, ModelModifiers)
- 클래스/스타일 바인딩 (StyleExample)

### 2. 반응형 데이터
- computed와 method 비교 (MethodVsComputed)
- watch, 다중 소스 감시, 깊은 감시, watchEffect (WatchBasic, WatchMultiSource, WatchDeep, WatchReactive, WatchEffectBasic)
- 날씨 검색 필터링 실습 (WeatherComposition)

### 3. 컴포넌트 라이프사이클
- onMounted 등 라이프사이클 훅 실습 (LifecycleDemo)

### 4. 컴포넌트 통신
- Props와 Emit을 이용한 부모-자식 컴포넌트 통신 (EmitDemo1, EmitDemo2, PropsEmitsParent)
- Slot: 기본 슬롯, 이름 있는 슬롯, 스코프 슬롯 (SlotDefaultParent, SlotNamedParent, SlotScopedParent)
- 날씨 카드 컴포넌트 분리 실습 (WeatherParent, BaseDashboardCard, SearchBar, WeatherCard)

### 5. Vue Router
- 라우터 기반 페이지 이동 (날씨 대시보드, 서비스 소개, 404 페이지)
- 동적 라우트 파라미터를 이용한 상세 페이지 (WeatherDetailView)

### 6. Pinia 상태 관리
- 카운터 스토어 실습 (StoreCounter)
- 전역 상태로 섭씨/화씨 단위 전환 (configStore, UnitToggler)

### 7. Axios API 연동
- JSONPlaceholder를 이용한 CRUD 실습 (AxiosJson)
- OpenWeatherMap 실제 API 연동 실습 (AxiosWeather)
- 날씨 대시보드에 실시간 API 데이터 적용 (WeatherHomeView, WeatherDetailView)

### 8. Element Plus UI 라이브러리
- 회원가입 폼 검증 (RegisterForm)
- 상품 수량 및 평점 위젯 (ProductWidget)
- 피드백 메시지 및 프로그레스 바 (FeedbackProgress)

### 9. 코드 품질 및 배포
- ESLint / Prettier를 이용한 코드 스타일 관리
- Vite 환경 변수 분리 (.env.local, .env.staging, .env.production)
- npm run build를 통한 프로덕션 빌드
- Vercel을 이용한 배포
