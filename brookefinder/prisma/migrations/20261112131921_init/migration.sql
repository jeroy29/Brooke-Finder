-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "LotStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD', 'HOLD', 'CLOSED');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('RESERVATION', 'DOWN_PAYMENT', 'AMORTIZATION');

-- CreateTable
CREATE TABLE "blocks" (
    "id" SMALLSERIAL NOT NULL,
    "block_no" SMALLINT NOT NULL,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lot_types" (
    "id" SMALLSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price_per_sqm" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "lot_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lots" (
    "id" UUID NOT NULL,
    "block_id" SMALLINT NOT NULL,
    "lot_no" SMALLINT NOT NULL,
    "lot_type_id" SMALLINT NOT NULL,
    "sqm" DECIMAL(8,2) NOT NULL,
    "status" "LotStatus" NOT NULL DEFAULT 'AVAILABLE',
    "street_name" TEXT,
    "map_shape" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "lots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homeowners" (
    "id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "home_address" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "homeowners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_terms" (
    "term_months" SMALLINT NOT NULL,
    "interest_rate" DECIMAL(6,4) NOT NULL,

    CONSTRAINT "payment_terms_pkey" PRIMARY KEY ("term_months")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" UUID NOT NULL,
    "lot_id" UUID NOT NULL,
    "homeowner_id" UUID NOT NULL,
    "term_months" SMALLINT NOT NULL,
    "reservation_fee" DECIMAL(12,2) NOT NULL,
    "orig_tcp" DECIMAL(12,2) NOT NULL,
    "dp_amount" DECIMAL(12,2) NOT NULL,
    "dp_monthly" DECIMAL(12,2) NOT NULL,
    "balance_amount" DECIMAL(12,2) NOT NULL,
    "monthly_amort" DECIMAL(12,2) NOT NULL,
    "total_tcp" DECIMAL(12,2) NOT NULL,
    "start_date" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" UUID NOT NULL,
    "contract_id" UUID NOT NULL,
    "recorded_by" UUID NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "paid_on" DATE NOT NULL,
    "payment_type" "PaymentType" NOT NULL,
    "reference_no" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "clerk_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image_url" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blocks_block_no_key" ON "blocks"("block_no");

-- CreateIndex
CREATE UNIQUE INDEX "lot_types_name_key" ON "lot_types"("name");

-- CreateIndex
CREATE INDEX "lots_status_idx" ON "lots"("status");

-- CreateIndex
CREATE UNIQUE INDEX "lots_block_id_lot_no_key" ON "lots"("block_id", "lot_no");

-- CreateIndex
CREATE INDEX "homeowners_full_name_idx" ON "homeowners"("full_name");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_lot_id_key" ON "contracts"("lot_id");

-- CreateIndex
CREATE INDEX "contracts_homeowner_id_idx" ON "contracts"("homeowner_id");

-- CreateIndex
CREATE INDEX "payments_contract_id_paid_on_idx" ON "payments"("contract_id", "paid_on");

-- CreateIndex
CREATE UNIQUE INDEX "users_clerk_id_key" ON "users"("clerk_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "lots" ADD CONSTRAINT "lots_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lots" ADD CONSTRAINT "lots_lot_type_id_fkey" FOREIGN KEY ("lot_type_id") REFERENCES "lot_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "lots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_homeowner_id_fkey" FOREIGN KEY ("homeowner_id") REFERENCES "homeowners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_term_months_fkey" FOREIGN KEY ("term_months") REFERENCES "payment_terms"("term_months") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_recorded_by_fkey" FOREIGN KEY ("recorded_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
