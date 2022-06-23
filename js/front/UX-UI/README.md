# UX-UI

37.   Figma Basics

              -  i can comment and tag team members
              -  i can write sticky notes with different colors and bold text
              -  cntr + 2finger-swipe is a good way to zoom in and out
              -  space + 2finger-swipe moves the frame around
              - the connector allows us to connect notes together(good for diagrams)
              - space bar allows hand properties
              - text tool allows me to write headings
              - zoom out and select everything to group it together using the group button

38.   Figma Plugin and Community

                  -  to access plugins:
                      user Icon > plugins > Browse plugins

                  - to use a plugin: Maaterial Design Icons for example
                      click it > duplicate it

from there i can go to filled to view the icons. they are installed on my project and they are turned into components.

                - go back using icon in upper left
                - drag material design Icons over to Udemy project

another way to install plugins is to select the community tab. I can pick from the optins I see below or search plugins in the search box.

                - search and install 'cover status' plugin.

this plugin will allow me to make cover pages very quickly.

                - in my Udemy project create a new design file named test plugin
                - Help button > keyboard shortcuts
                - to use plugin search menu:
                        'ctrl + /' then search cover Status
                - fill out text and press create
                - on the page it created , right click the box surrounding the text and select 'set it to thumbnail'.

after this exercize we delete this project

39. Affinity and mind mapping.

Exercize for organizing ideas about a product. The goal is map out as much of an idea as possible.

        help menu > keyboard shortcuts

Keyboard shortcuts!!!

40. User Persona

Organizing information about the target audience

        to save User persona as a png:
            -group the selection
            -right click and copy as png
            -open a new design file
            -paste png
            -export

i can also save a local copy for sharing

41. Customer journey mapping

Capterra is a site for compairing software, we use it in this example for sample images

42.   User Flows

          Examples in figma notes project

43.   Design Strategy

          Examples in figma notes project

44.   Spirit Planning

the MSN framework is the way I can organize and prioritize all the information gathered in previous lessons

# SEC 5 User Interface Design

45. Unity and Similarity

Unity is created when all design elements carry the same weight and look harmonized. When design elements in a composition belong together.

46. Dominance and working memory

Dominance is achieved by emphasizing on one design element. Dominance grabs users attention to one design element on the webpage.

        - a primary buttion like Add should be filled as it draws more imphasis.
        - a secondary button like cancel should just be text or outlined to be deemphasize

47. Negative Space and Complexity

Negative space is created when unnessessary design elements are removed, and the area of the layout that is left empty to increase contrast.

51.   Psychological Bariar and Proportion

          golden ration Proportion:
              .618

52.   Figma Essential Behaviors

                - we start by opening a design file instead of a fig-jam file.
                - Duplicate selection:
                              ctrl + D

If we try to export our doughnut it shows as 2 items to be exported which isint what we want. Before we export, we need to group the selection.

                - Group selection:
                               ctrl + G

Now when we export , it is as a single item.

If we undo that grouping theres another way we can achieve this

        - wrap the parts of the doughnut in a frame
                - the frame acts as a group as well

difference between group and frame?

        with a grouping the position of the object adapts to changing border size
                - stays centered
                - grows with box

        with frames the movement dosent adjust the content and the frame can even cover some of it up.
                - moves based on alignment
                - dosent change size

        download 'sort layers' from the plugin community

after duplicating the doughnut in a frame 3 times we select them all then open the plugin menu like so: ctrl + /

                - type in sort layers sort by x position
                - with the boxes selected press 'ctrl + R' to rename the file
                - in rename to box enter '$n '

this will name the frames by number starting with one based on where they are on the x axis

                - zoom to selection:
                        shift + 2

we can stop the frame from clipping by checking the box

                - next we create another page

can adjust layer passthrough for transparency

on the color panel we can turn colors from solid to gradients in the upper left hand corner

                - install lorem

53.   Figma Core Engine Concepts

in a new design file make 2 pages:

                - prototype
                - components

draw 3 squares of different shades and select them all and press the '+' on auto layout

                - duplicate the set and surround all 6 in a autolayout withe '+'
                - I can select one of the parents and duplicate it within the main autolayout

now we have a main autolayout box containing 3 parents that each contain 3 child squares

                - download 'replace layers' plugin from community

we can select a parent and reverse the order of the squares with:

                - download ' reverse layer order' also.

to reverse the layer order:

                - select the layer
                - press enter
                - ctrl + /
                - reverse order layer

what was first is now last.

we can adjust the padding on the left when main is selected

        alt + L selects the main.
        then select enter to select the 3 parents

now I can adjust space between the children of each parent because the parents are all individually selected. The space between items and the padding in this case refers to within the parents, not between them.

        now i can 'shift + enter to select the main agan and adjust padding and space between parents.

        - now we adjust the width between parents and as well as between children to 50

we can click on the main and inspect to see the css for the main box(including flexbox). I can also click between children to see space between

        select main then design in the upper right hand corner to make changes to the apperance such as:
                - fill: the background
                - Effects > Drop Shadows: box shadow
                        add padding to main to see the box shadow more clearly
                - layer passthrough: transparency

now if I pull one of the parents out of the frame it adjusts automatically. I can even take a parent and nest it within another parent and move it around inside.

currently if I try to expand main the contents dont center or grow with it. under 'Resizing' by default the horizontal and vertical axies are set to 'hug content' which is why it adapts to changes, but when I expand it , it is set to fixed width at the width I set it at.

                to center the children in a parent when mains size changes:
                        - select the parent and under 'sizeing' select option for 'hug content'.
                        - under 'auto layout' useing the 'allignment and padding' button set alignment

if we repeat this process with all the parents setting one alignment to left, another to center, and the final one to right, we can see how this works by adjusting the size of main and seeing how each parent reacts differently.

                duplicate one of the parents and inside main then expand main again and change its alignment from 'packed' to space between after centering

Change Name of main to 'Auto Layout Exercize'

# Components (9 minutes into video)

duplicate previous exercize for a starting point and label it 'Components Exercize'.

currently our parents are frames and therefore are not reusable.

                change parent from a frame to a Component:
                        - drag a parent out of main
                        - select it and selct the 'component' icon above
                                now the icon of the parent turns from the frame symbol to the diamond(component symbol)
                        - cut the new component from prototype page and paste it in component.

Create an instance of the component by holding 'alt' while dragging from the component

now the changes i make in the component are reflected in its instance. I can demonstrate this by cutting the instance and parent out of components and paste it into prototypes and make changes in components to see if they are reflected in prototype

                - in prototypes delete all other parents becides the instance
                - duplicate the instance until it overflows
                - in 'Resizing' select 'Hug Contents' to adjust vertically
                        same can be done for the horizontal axis

now when I duplicate the instances inside main the box stretches to fit

                - cut and paste the parent component from component to prototype
                to add space between the children horizontally:
                        - select parent component
                        - set 'specing between items'

to do so vertically, make space between the parents by selecting the parents container and adjusting 'space between'

                - turn component exercize back to hug
                - name it window
                - turn it into a component

right now we have one parent component and one window component that contains all the parents.

if I duplicate an instance of window and place it somewhere else then select it, there is a component icon in the name of the component that will take me to the root component

lets say I want to make a version of the window component in a different color

                - create and select a new instance of window:
                        alt + drag from window

                - detatch it:
                        ctrl + alt + b

this turns the instance of window frame

                - in the window we can change all the colors under 'selection colors'

i can select a parent in window and add its color changes to its parent component using the 3 dots next to the symbol that takes me to the parent component when the parent within window is selected:

                'push overrides to main component'

not usually a good idea so we ctrl + z to undo that

                - delete all but component and window
                - make window a component
                - name them window 1 and window 2

when we hilight them both we can select 'combine as variants'

                - set the properties for each part of window as toggle and each instance one false and one true.

now when I create an instance I have the option to toggle between variants

9. Medignition Project Part 1

lets recreate the page we see.

first we set up a grid and adjust it until it matches the margins of the original

           - grid column layout with 12 colunns
           - margin 94 (155 on mine)
           - gutter 24

# SEC 18

279.  UX Ice Berg Model - The foundastion of successful user experience is a clear well-designed strategy.

                      -DESIGN & DEVEindLOPMENT
                      -USER TESTING & FEEDBACK
                      -SKETCH & PROTOTYPE
                      -TARGET AUDIENCE
                      -BUISNESS RESEARCH

      this is a feedback loop that starts from the bottom and goes up, and is iterated as many times as it takes

280.  UX Double Diamond

when soling a single problem, imagine 2 diamonds, a definition diamond with discover at the top and define at the botton. The second diamond is for execution and contains develope and deliver

281. UX Feasibility Diagram

We have to assess how much something will cost, and how practical is our Buisness or Service or Product(BSP)

DIAGRAM:

                 left to right - fesability(cost)

                bottom to top - imporntance(effectiveness)

282.  Target Audience

                 who uses
                 what need or want
                 How Working

research levels :

                world's market
                Industry
                User

283. UX Eco-System Mapping 
-identifying dependancies and stakeholders

284. UX Journey Map

timeline where actions are devided into phases

we want to map out the pain points

* good review to understand an overview of the dev process and the roles required

285. Business SWOT Analysis

steengths compared to other Buisnesses or Services or Products (BSB)

Weaknisses as well.

Opportunities

Threats

286. Business Competitor Analysis

287. Business Growth Metrics

                aquisition
                activation
                retention
                Referral
                Revenue
288. 6 Famous Business Model

Subscription, Freemium, Fixed Rate

290. Affinity and Mind Mapping
 this is where I pick up in figma