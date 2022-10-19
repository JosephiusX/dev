Sec 5

        git commit --ammend : allows me to change last most recent commit

        .gitignore
        1. make a .gitignore file preferably in the root directory
        2. in that file I can write files and patterns that i want git to ignore like so :
        node_modules/

Sec 6

        L44. Every commit has a unique hash that corrisponds to the contents of the commit among other things

L43. Head refers to the tip of a given branch

        a brabcg is a reffrence to a commit

L44. Viewing branches

git branch : tells me what branch im on
the one thats active has \* next to it

L45. Creating Branches
q tp exit git log
git branch <branch-name> : creates a branch
this makes the branch but does not switch to the branch for me
git switch <branch-name> : switch to a branch

    I can not see the message in this file that is on the first-branch

    It does matter where I branch from

L47. Another Option: Git Checkout Vs. Git Switch
git checkout <branch-name> : acts just like switch

L48. Must add and commit before switching
we could stash them but that topic is covered in a few sections
when switching branches, sometimes if I have unstaged changes, they will come with me.
other times if theyre in conflict I will get a message about commiting changes.

L49. Deleting & Renaming Branches
-d of --delete :
Ex: switch -c deleteMe to create a new branch
git branch -d deleteMe : cannot delete branch im currently Viewing
git switch main : to exit the branch
git branch -d deleteMe : if this dosent work it may not be merged
run it again with a uppercase -D

    Rename a branch
    git checkout recentish-music : move to branch
    git branch -m 2000s : rename branch to 2000s

L50. 50. How Git Stores HEAD & Branches
Head is a pointer that refers to the current "location" in my repository. It points to a particular branch reference.

    So far, HEAD always points to the latest commit you made on the master branch, but soon we'll see that we can move around HEAD will change.

L51. Branching Exercise 1. Make a new folder called Patronus
mkdir Patronus

    2. Make git repo inside the folder (make sure im not in an existing repo)
        cd Patronous
        git init

    3. Create a nnew file called patronus.txt (leave it empty for now)
        touch patronous.txt

    4. Add and commit the empty file, with the message 'add empty patronus file'
        git add patronus.txt
        git commit -m ' add empty patronus'

    5. Immidietly make a new branch called harry and another branch called snape ( both based on the master branch )
        (im currently on master)
        git branch harry
        git branch snape

    6. Move to the harry branch using the "new" command to change branches.
        git switch harry

    7. In the patronus.txt file, add the following:
        ```
    HARRY'S PATRONUS

    /|       |\
    `__\\       //__'
    ||      ||
    \__`\     |'__/
    `_\\   //_'
    _.,:---;,._
    \_:     :_/
        |@. .@|
        |     |
        ,\.-./ \
        ;;`-'   `---__________-----.-.
        ;;;                         \_\
        ';;;                         |
        ;    |                      ;
        \   \     \        |      /
            \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
            | || |           | |   | |
            | || |           | |   | |
            | || |           | |   | |
            |_||_|           |_|   |_|
            /_//_/           /_/   /_/
        Use code . : to open the file in vscode

    8. Add and commit the changes, with the commit message "add harry's stag patronus"
        git add patronus.txt
        git commit -m "add harry's stag patronus"

    9. Move over to the snape branch using the "older" command to change branches.
        git checkout snape
        git log : to see that we have 2 commits on this branch

    10. Put the following text in the patronous.txt file:

    SNAPE'S PATRONUS
                   .     _,
                   |`\__/ /
                   \  . .(
                    | __T|
                   /   |
      _.---======='    |
     //               {}
    `|      ,   ,     {}
     \      /___;    ,'
      ) ,-;`    `\  //
     | / (        ;||
     ||`\\        |||
     ||  \\       |||
     )\   )\      )||
     `"   `"      `""

     11. Add and commit the changes on the `snape` branch with the commit message "add snape's doe patronus"
        git add patronus.txt
        git commit -m "add snape's doe patronus"

     12. Next, create a new branch based upon the `snape` branch called `lily`
        (im on snape)

     13. Move to the `lily` branch
        git switch -c lily

     14. Edit the `patronus.txt` file so that it says `LILY'S PATRONUS` at the top instead of `SNAPE'S PATRONUS` (leave the doe ascii-art alone)

     15. Add and commit the change with the message "add lily's doe patronus"
        git add patronus.txt
        git commit -m 'add lily's doe patronus'


     16. Run a git command to list all branches (you should see 4)
        git branch

     17. **Bonus:** delete the `snape` branch
        git branch -d snape

Sec 7

        Git Merging Exercize

        mkdir Merging-Exercize
        cd Merging-Exercize
        git status : make sure im not in a git repo
        git init : initalize git repo
        touch greetings.txt
        git add greetings.txt
        commit -m "add greeting file"

        git switch -c spanish : make and switch to a new branch called spanish
        code . : open the file in vsCode
        add hola to the txt file
        git add greetings.txt
        git commit -m "add spanish greeting"

        git switch master
        git merge spanish : creating fastforward

        git switch -c french : create and switch branch
        write Bonjour to greetings.txt
        git add greetings.txt
        git commit -m 'add french greeting'

        git switch master

        creat farewells.txt file
        write goodbye in it
        git add farewells.txt
        git commit -m 'add farewells file

        git status : make sure there are no uncomitted changes
        thease commits are in diffrent files so there wont be conflicts
        their also may be changes in the same file with no conflict.

        git merge french

sec 8 git diff

71. Diff exercize

        compare branches:
            git diff <branchname> <otherbranch>

        compare branches for a specific file
            git diff <branch1> <branch2> <filename>

        to quit a git log or something like that in the terminal:
            p

        compare commit to prior commit:
            git diff HEAD HEAD~1
                OR
            git diff HEAD~1

        show unstaged changes:
            git diff

        show staged changes:
            git dif --staged

        compare staged and unstaged changes
            git dif HEAD

sec 9 The ins and outs of Stashing

79. Stashing Exercise

            make stash-diary directory
            in it touch diary.txt

            in it  write i love my boss

            create the-truth branch:
                git switch -c the-truth
            in it write i hate my boss several times

            boss walks up and I switch to master right quick
            Oh no the changes i made came over

            stash the changes reverting master back to 'i love my boss ' , saving the changes to stash.:
                git stash

            a can add a few lines to master , add and commit

            switch back to the-truth branch:
                git switch the-truth

            we can see that it says i love my boss again because the truth text is stashed

            retreve the changes that are stashed away:
                git stash pop

            now i can make more changes or add and if i want to commit:
                git add .
                git commit -m 'add the truth'

sec 10 Undoing changes

89. undoing changes exercize

        start by cloning yesterday-exercise directory:
            git clone https://github.com/Colt/yesterday-exercise

        look at the commits we have logged:
            git log --oneline

        copy the hash from the commit we want to check out
        takes us to the commit:
            git checkout 485a339

        go back to the branch I was on:
            git master master

        find hash " finish original lyrics " and copy :
            git log
        to excape log:
            q

        go back to finish original lyrics:
            git checkout cdd927c
        make a branch based off of it:
            git switch -c scrambled-eggs

        switch back to master to see we dont have thoe changes there:
            git switch master

        delete contents of master lyrics

        oops , to undo that:
        git restore lyrics.txt
            or
        git checkout HEAD lyric.txt

        next replace contents of lyrics with the 404 text
        add and commit:
            git add.
            git commit -m 'begin 404 lyrics'

        add second part of 404 txt to file
        add , commit:
            git add .
            git commit -m 'finish 404'

        then we realize that was a mistake, shouldnt have done that on the master branch. so i wanna move them to a branch called 404, but I already made the commits on the master branch. So Im going to undo them on master.

        undo them on master by finding the commit id
            git log --oneline
                exit log:
                    q

        keep the changes in working directory, just undo the two commits:
            git reset f199959

        if i do a git log we dont see those 404 commits

        make new 404 branch :
            git switch -c 404

        check that the changes have indeed come over to this branch with me:

        add and commit ' write 404 parody lyrics '

        navigate to master:
            git switch master

        now we have original lyrics

sec11: Github: The Basics

105.  github basics exercise

             mkdir favorites
             cd into it and initalize repo(assuming it hasent been already)

             on github.com create a new repository

             connect local repo to github repo:
                 git remote add origin https://github.com/JosephiusX/gh-fovorites-exercise.git
             name master branch to main
                 git branch -M main

             make first file and commit:
                 touch favorites.txt
                 git add favorites.txt
                 git commit -m "add empty favorites file"

      ****\***** somehow he switched from master to main, yet im already at main.

             push to repo:
                 git push origin main

             create branches foods , and movies
                 git branch foods
                 git branch m0ovies

             switch to foods:
                 git switch foods

             in favorites file add 3 foods
             add and commit

             switch to moovies branch:
                 git switch moovies

             write 3 movie titles, add and commit

             push the food branch to github:
                 git push origin foods

             push up moovies branch
                 git push origin moovies

             switch to main:
                 git switch main

             merge in foods:
                 git merge foods

             combine main with moovies
                 git merge moovies
                 git add .
                 git commit -m 'merge movies and foods into main'

                 git push origin main

sec 12: Fetching & Pulling
