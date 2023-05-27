# React Router

    *yarn add react-router-dom@4.1.2

Looks like step one is getting the routes and pages in order in order

    ?what pages do we need
    * for now just AddTopicPage, EditTopicPage, Header, NotesPage, NotFoundPage, TopicsDashboardPage wll with just dummy text for now
Export files to AppRouter and use them with BrowserRouter, Switch, and, Route from react-dom-router to create routes to the pages

Create the corrispondant links in the Header Component

see docs for more:

    https://reactrouter.com/en/main

#2 Redux

#3 Redux with Router

        I have actions filters reducers selectors along with the store and app router all pluged in together


#* Heres where I need to simplify

working on Notes Components as well as actions, reducers, selectors before adding to AppRouter

Note List is visible. 

    now we just to place a link to a add notes page

when creating note i am redirected to Note List page as desired, 
    
    ? not seeing any notes displayed

Lets get rid of amount to help simplify

    start with actions: done
    reducers : no ref found
    selectors : done
    NoteForm: done
    NoteListFilters: done
    NoteListItem: done

EditNotePage needed in pages

    add it to router
    
    ? checking for refs in components

Need to make store entries unique for Notes

    in actions/notes:  swapping 'message' to 'note'
                                'discription' to 'title'
                        check reducer:
                        check srelector:
                        check components to make changes to instances:
             /topics : 'description' to 'topic'
                reduced topics to 'topic'
                
        changing ' /' to either '/topics' or '/notes' 

    changing 'topic' to 'discription' in topics actions
        same with the topic form

I think im on to something with this form but now I cant enter anything into either of the text inputs for adding a topic

    now I can enter the text in (description is working) but nothing is being saved

    fixed spelling of discription in topics actions

ITS ALIVE !!!!!!!!!
im now able to save multiple notes and multiple topics (currently with a paragraph of phrases) each with timestamps

Lets remove datepicker from topics

    CHANGES TO COMMIT

Edit Notes is working along with Topics. good time to save in 

# Working on Phrases

in actions/topics.js, turned phrases into an array

# working on phraselist and phraseListItem in Topics

I want to remove the option to add pharase originally until redirected after the topic is created.

    - removed phrases from topics actions

the form   

    - create TopicPhrasesForm.js
    - remove the phrases code from TopicForm and impliment it in TopicPhrasesForm

now I want to redirect to TopicPhraseForm once the topic is created 

    - make phrase folder in components: done
    - move over - PhraseForm -PhraseList 
    - PhraseListItem: done

    - AddPhrasePage.js:done
    EditPhrasePage.js: done
    PhrasesPage.js: done
    PhraseListFilters.js done

# adding Phrase routes

    