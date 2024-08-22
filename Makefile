.PHONY: build watch run

build:
	staticjinja build --outpath build --static static,downloads

watch:
	staticjinja watch --outpath build --static static,downloads

run:
	python -m http.server -d build 8080
