react-app: 
	mkdir $(name)
	cd $(name) && git clone https://github.com/sarancr/react-basic-starter.git . && rm -rf .git && rm .gitignore
	cd $(name) && code . && yarn && yarn start

run:
	cd $(name) && code . && yarn && yarn start

push:
	git add .
	git commit -m "Updated files"
	git push origin master

make help:
	cat README.md