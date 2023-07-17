.PHONY: build run

build:
	staticjinja build --outpath build --static static,downloads

run:
	python -m http.server --directory build