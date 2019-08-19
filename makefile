dist:
	mkdir -p dist && cd extension/ && zip -vr -FS ../dist/untab.zip * --exclude .*

.PHONY: dist
