# Gamila website
This repository provides the website for www.gamila.ch and is automatically deployed on a push to the main-branch.

## Developing
The main-branch is protected against a direct push, so the development happens on the develop-branch.

To develop on the website, check out the develop-branch with the following command:
```bash
# create a new folder for the gamila project 
mkdir gamila
# switch to the new folder
cd gamila
# checkout the develop-branch of the repository
git clone -b develop git@github.com:haesena/gamila-site.git
```
You can now work on the website and push your changes to the develop-branch:

```bash
# commit the changes
git commit -m "[description of your changes]"
# push the changes to the remote
git push -u origin develop
```

To deploy the changes, create a pull-request for the develop-branch in GitHub to merge it to the master branch.
