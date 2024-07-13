include .env
export $(shell sed 's/=.*//' .env)
REGISTRY_OWNER:=fazenda
PROJECT_TAG:=$(shell date '+%d-%m-%Y-%H%M%S')

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
	--tag ${REGISTRY_OWNER}/correios-api:${PROJECT_TAG} \
	--load \
	.
	@echo "Built: ${REGISTRY_OWNER}/correios-api:${PROJECT_TAG}"

docker-publish:
	@docker \
	buildx \
	build \
	--build-arg API=${API} \
	--file Dockerfile \
	--tag ${REGISTRY_OWNER}/correios-api:${PROJECT_TAG} \
	--push \
	.
	@echo "Built: ${REGISTRY_OWNER}/correios-api:${PROJECT_TAG}"

docker-test: docker-build
	@docker run \
		--rm -it \
		--env API=${API} \
		${REGISTRY_OWNER}/correios-api:${PROJECT_TAG} \
		npm test

docker-run:
	@docker-compose up --build
