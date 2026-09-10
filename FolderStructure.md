```bash
result-management-client/
│
├── public/
│   ├── favicon.ico
│   └── assets/
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── routes/
│   │   │   ├── index.tsx
│   │   │   ├── PublicRoutes.tsx
│   │   │   ├── ProtectedRoutes.tsx
│   │   │   └── AdminRoutes.tsx
│   │   │
│   │   ├── providers/
│   │   │   └── AppProvider.tsx
│   │   │
│   │   └── store/
│   │       └── index.ts
│   │
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Select/
│   │   │   ├── Modal/
│   │   │   ├── Table/
│   │   │   ├── Loader/
│   │   │   ├── Badge/
│   │   │   └── Pagination/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   ├── Sidebar/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── DashboardLayout/
│   │   │
│   │   └── common/
│   │       ├── ErrorBoundary.tsx
│   │       ├── EmptyState.tsx
│   │       ├── ConfirmDialog.tsx
│   │       └── PageTitle.tsx
│   │
│   │
│   ├── features/
│   │
│   │   ├── auth/
│   │   │   ├── api/
│   │   │   │   └── authApi.ts
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── ForgotPasswordForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   ├── types/
│   │   │   │   └── auth.types.ts
│   │   │   └── pages/
│   │   │       └── Login.tsx
│   │   │
│   │
│   │   ├── student/
│   │   │   ├── api/
│   │   │   │   └── studentApi.ts
│   │   │   ├── components/
│   │   │   │   ├── StudentForm.tsx
│   │   │   │   ├── StudentTable.tsx
│   │   │   │   └── StudentProfile.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useStudent.ts
│   │   │   ├── types/
│   │   │   │   └── student.types.ts
│   │   │   └── pages/
│   │   │       ├── Students.tsx
│   │   │       └── StudentDetails.tsx
│   │   │
│   │
│   │   ├── teacher/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── department/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── types/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── subject/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── types/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── semester/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── marks/
│   │   │   ├── api/
│   │   │   │   └── marksApi.ts
│   │   │   ├── components/
│   │   │   │   ├── AddMarksForm.tsx
│   │   │   │   ├── MarksTable.tsx
│   │   │   │   └── ResultCard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useMarks.ts
│   │   │   ├── types/
│   │   │   │   └── marks.types.ts
│   │   │   └── pages/
│   │   │       ├── AddMarks.tsx
│   │   │       └── ViewResult.tsx
│   │   │
│   │
│   │   ├── attendance/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── result/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   │   ├── ResultSheet.tsx
│   │   │   │   ├── CGPACard.tsx
│   │   │   │   └── GradeTable.tsx
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   └── pages/
│   │   │
│   │
│   │   ├── admin/
│   │   │   ├── components/
│   │   │   │   ├── AdminSidebar.tsx
│   │   │   │   └── DashboardStats.tsx
│   │   │   └── pages/
│   │   │       └── AdminDashboard.tsx
│   │   │
│   │
│   │   ├── principal/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │
│   │
│   │   └── dashboard/
│   │       ├── components/
│   │       └── pages/
│   │
│   │
│   ├── services/
│   │   ├── apiClient.ts
│   │   ├── axiosInstance.ts
│   │   └── tokenService.ts
│   │
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   └── usePagination.ts
│   │
│   │
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   │
│   ├── types/
│   │   ├── common.types.ts
│   │   ├── api.types.ts
│   │   └── user.types.ts
│   │
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── calculateCGPA.ts
│   │   ├── gradeCalculator.ts
│   │   └── constants.ts
│   │
│   │
│   ├── config/
│   │   ├── env.ts
│   │   └── navigation.ts
│   │
│   │
│   └── styles/
│       ├── globals.css
│       ├── variables.css
│       └── animations.css
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```