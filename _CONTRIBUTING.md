# Contributing

## General Workflow

  To start...
    1. Fork this repo, then clone your fork. `git clone https://github.com/{your_github_handle}/newnews.git`
    2. Add a remote upstream to the original repo (not your forked repo). `git remote add upstream https://github.com/dotConnection/newnews.git`
    3. Install dependencies. `npm install` 

  Ongoing...
    1. When you start working, or after receiving a notice of recently merged code, run `git pull --rebase upstream master` to get the latest code.
    2. Commit changes regularly with clear commit messages...(added 'feature', fixed 'issue' refactored 'file', etc.).
    3. To add your code to the main repo, first `git pull --rebase upstream master` and resolve any merge conflicts. 
    4. Push up your code to your forked master. 
    4. Make a pull request to the main repo and notify.
    5. Once the code reviewer approves your code and resolves any conflicts, it will be merged into the code base. 

            