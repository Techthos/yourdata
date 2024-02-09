
build:
	pnpm install
	pnpm --filter @yourdata/* run build

run:
	pnpm --filter @yourdata/* run dev

publish:
	pnpm --filter @yourdata/* run build
	pnpm -r publish