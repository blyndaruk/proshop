.PHONY: up stop bash logs ps build down test
up:
	docker-compose --env-file .env -f docker/docker-compose.yml up -d
ps:
	docker-compose --env-file .env -f docker/docker-compose.yml ps
stop:
	docker-compose --env-file .env -f docker/docker-compose.yml stop
build:
	docker-compose --env-file .env -f docker/docker-compose.yml build
down:
	docker-compose --env-file .env -f docker/docker-compose.yml down
bash:
	docker exec -it proshop_mongodb bash
logs:
	docker-compose --env-file .env -f docker/docker-compose.yml logs -f
