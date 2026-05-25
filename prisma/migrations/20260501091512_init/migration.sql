-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "ral" REAL NOT NULL,
    "modality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'applied',
    "appliedAt" TEXT NOT NULL,
    "nextStep" TEXT,
    "contact" TEXT,
    "link" TEXT NOT NULL,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stack" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    CONSTRAINT "Stack_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
