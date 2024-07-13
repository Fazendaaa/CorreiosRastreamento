include .env
export $(shell sed 's/=.*//' .env)
REGISTRY_OWNER:=fazenda
PROJECT_TAG:=$(shell date '+%d-%m-%Y-%H%M%S')

test:
	@npm test

build:
	@npm run build
