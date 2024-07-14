include .env
export $(shell sed 's/=.*//' .env)
REGISTRY_OWNER:=fazenda
PROJECT_TAG:=$(shell date '+%d-%m-%Y-%H%M%S')

all: docker-run

test:
	@npm test

build:
	@npm run build

docker-build:
	@docker \
	buildx \
	build \
	--build-arg API=${API} \
	--file Dockerfile \
	--tag ${REGISTRY_OWNER}/correios-sdk:${PROJECT_TAG} \
	--tag ${REGISTRY_OWNER}/correios-sdk:latest \
	--load \
	.
	@echo "Built: ${REGISTRY_OWNER}/correios-sdk:${PROJECT_TAG}"

docker-publish:
	@docker \
	buildx \
	build \
	--build-arg API=${API} \
	--file Dockerfile \
	--tag ${REGISTRY_OWNER}/correios-sdk:${PROJECT_TAG} \
	--tag ${REGISTRY_OWNER}/correios-sdk:latest \
	--push \
	.
	@echo "Built: ${REGISTRY_OWNER}/correios-sdk:${PROJECT_TAG}"

docker-test: docker-build
	@docker run \
		--rm -it \
		--env API=${API} \
		${REGISTRY_OWNER}/correios-sdk:latest \
		npm test

docker-run:
	@docker-compose up --build --remove-orphans
