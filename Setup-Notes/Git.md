https://www.notion.so/zarkom/Introduction-to-Git-ac396a0697704709a12b6a0e545db049#3d067e361bbf48d18d7b543421fc2923

https://www.youtube.com/watch?v=ecK3EnyGD8o&ab_channel=Fireship

    skip git add: 
        git commit -am "message"

    configure shortcut:
        git config --global alias.ac "commit -am"

    update latest commit:
        git commit --amend -m "message"

    update last commit with new files: (if not yet repoed)
        git commit --amend --no-edit

    if is pushed to repo:
        git push origin master --force
            overrides the remote commit with the state of the local code.
                however ! if there are commits on the remote branch we dont have, we will lose them together 

    stash changes for later:
        git stash

    reinterject stashed code:
        git pop 

    delete branch locally:
        git branch -d localBranchName
        git branch -D localBranchName (unmerged)

    