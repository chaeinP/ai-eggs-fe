export const BootcampSort = {
  "마감 임박 순": {
    sortField: "applicationEndDate",
    orderBy: "asc",
  },
  "모집 빠른 순": {
    sortField: "applicationStartDate",
    orderBy: "asc",
  },
  "개강 빠른 순": {
    sortField: "courseStartDate",
    orderBy: "asc",
  },
  "가격 낮은 순": {
    sortField: "originalPrice",
    orderBy: "asc",
  },
  "가격 높은 순": {
    sortField: "originalPrice",
    orderBy: "desc",
  },
} as const;
