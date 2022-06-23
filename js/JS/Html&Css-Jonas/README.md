# Html5-Css-Jonas

# Sec3 Css Fundamentals

## 28. Psudo classes

    li:first-child:
        first child of a list

    li:last-child:
        last child of a list

    li:nth-child(2):
        second child

    li:nth-child(odd):
        selects the odds in the list order

    article p:last-child :
        selects article paragraphs last child

if we mix multiple elements inside of a parent elememt the psudo classes dont work so well

    article p:first-child :
        dosent work with our html because there are multiple element types inside of parent

## 29. Styling Hyperlinks

    a {
        color: #103333
    }

above works but its not good practice, instead we should target a psudo element that will allow us to target state

    a:link { // this way we select only a tags that have hrefs in them
        color: #999
    }

    a:visited { // visited links
        color: #999
    }


    a:hover { // makes changes on hover
        color: orangered:
        font-weight: bold;
        text-decoration: underline dotted orangered:
    }

    a:active { // during duration of the click
        background-color: black; font-style: italic;
        }

## 31. Css Theory#1: Conflicts Between Selectors

### Resolving Conflicting Declarations

    Highest Priority

        5 Declarations marked !imporntant (not good practice generally)

        4 Inline styles ( shouldnt be using anyway)

        3 ID (#) selector

        2 Class(.)or pseudo-class(:)selector

        1 Element selector (p, div, li, etc.)

        0 Universal selector(*)

    Lowest Priority

for the id, class/Psudo, and Element selectors, if there are multiples of either of those precident goes to the last one in the code.(lowest)

## 32. Inheritence and the universal selector

all the elements in an html body tag can inherit things from the body (mostly for text)

    body { // setting things for the children of the body
        color:#444392;
        font-family: sans-serif;
    }

## 39. Types of boxes

### Block-level

        -elements formatted visually as blocks
        -100% of parent's width
        -Vertically, one after another
        -Box-model applies as showed

### Inline

        -Occupies only content's space
        -Causes no line-breaks
        -Box model is different: heights and widths do not apply
        -Paddings and margins only horizontal(left and right)

### Inline-block

        -Looks like inline from the outside, behaves like block-level on the inside
        -Occupies only content's space
        -Causes no line-breaks
        -Box-model applies as showed

## 40. Absolute Positioning

### Normal Flow

    -Default positioning
    -Elements "in flow"
    -Elements are simply laid out according to their order in the HTML code

    usage
        position: relative

### Absolute Positioning

    -Element is removed from the normal flow: "out of the flow"
    -No impact on surrounding elements, might overlap them
    -We use top, bottom, left or right to offset the element from its relatively positioned container

    usage
        position: absolute

if we set the position of a button to absolute with bottom 50px and right 50px the button will appear at the bottom right of the viewport unless we set its parent to relative. Then it appears at the bottom right of the page instead.

generally we use this method for small things like buttons, not for layouts.

## 41.Pseudo-elements

dont exist in html but that we can still select and style in css

        h1::first-letter {
            // change style of first letter of html
        }

        p::first-line {
            // select first line of all paragraphs
        }

        h3 + p::first-line { // + adjacent sibling selector
            // only paragraphs after h3 are selected
        }

        h2::after { // creating content after h1
            content: "TOP";
            display: inline-block
            padding: 5px 10px
        } // a good use for inline-block so we can add padding all around

## 47. Using floats

### floats

            Element is removed romt the normal flow: " out of the flow (like absolute positioning)

            Test inline elements will wrap around the floated element ( unlike absolute positioning )

        usage
            float: left
            float: right

## 48. Clearing Floats

## 50 box-sizing border-box

if i add padding to s box it is added to the width that the box already is

            box-sizing: border-box;

            // padding and borders that we do specify will now reduce inner width of content area

this sets size no matter what padding is added, the default setting(content-box) is not as useful

            we can add the setting to the universal selector to apply it to all boxes, not the body tho because its not inherited

## 52. Intro to flexbox

## 53. A Flexbox Overview

            flex container, box within which children are moved around, in parent:
                display:flex

            Items within the container:
                flex items

            the default direction which the flex items are laid out (left to right)
                main axis

            the default perpendicular axis is called the cross axis (top to bottom)

            to use flexbox set display:flex on a container element to start

### Flex container

                    gap: spaces between items without using margins
                        0

                    justify-content: align by main axis
                        flex-start | flex-end | space-between | space-around | space-evenly

                    align-items: align allong cross axis
                        stretch | flex-start | flex-end | center | baseline

                    flex-direction: defines the main axis
                        row | row-reverse | column | column-reverse

                    flex-wrap: (advanced)- wrap to new line
                        nowrap | wrap | wrap-reverse

                    align-content: applies to multiple lines
                        stretch | flex-start | flex-end | center | space-between | space-around

### Flex Items

                    align-self: overwrite align-items for individual items
                        auto | stretch |flex-start | flex-end | center | baseline

                    flex-grow:  allow an element to grow
                        0 | <integer>

                    flex-shrink:  allow an element to shrink
                        1 | <integer>

                    flex-basis : define items width, instead of width property
                        auto | <length>

                    flex: shorthand for flex-grow, -shrink, -basis
                        0 1 auto | <int> <int> <int>

                    order: change the order of items in the container
                        0 | <integer>

## 54. Spacing and aligining flex items

the order is 0 by default, to ensure that a flex item is first, give it a value lower than 0 like -1

instead of putting a margin on the elements to space them out , I can use gap to make space between flex items

## 60. A CSS Grid Overview

whereas flexbox is good for one demensional layouts , grid is the goto for 2 dememsional layouts. and the work together well

            grid container
            grid items
            column axis
            row axis

            usage:
                display grid

            unlike flexbox the axises can not be changed

            gridlines
            grid cells

a grid of 6 cells can have less grid items, the cells just define the grid

            gutters: spaces between gaps
            grid tracks, columns or rows

## Grid container basics

            grid-template-rows: <track size>*
            grid-template-columns: <track size>*
                to establish the grid row and column tracks.

            row-gap: 0 | <length>
            column-gap: " "
            gap: " "
                to create empty spaces between tracks

            justify-items: stretch | start | center | end
            align-items:  "  "
                to align items inside rows / columns (horizontally / vertically)

            justify-content: start | center | end | ...
            align-content:  " "
                align entire grid inside grid container, only applies if container is larger than grid

## Grid items basics

            grid-column: <start line> / <end line> | span <number>
            grid-row: <start line> / <end line> | span <number>
                to place grid item into a specific cell, based on line numbers.
                span keyword can be used tospan an iter across more cells

            justify-self: stretch | start | center | end
            align-self: stretch | start | center |ene
                to overwrite justify-items/align-items for single items

## 61. Sizing Grid Columns and rows

            grid-template-columns: | grid-template-rows :
                units of measurement:
                    px
                    em
                    rem
                    fr
                    auto
                    repeat(4, 1fr); // 4 rows/columns one fractional unit width/heigth

## 62. Placing and Spanning Grid items

manually placing items in a grid cell other than the predefined one

            	grid-column: 2 / 3;
                    column between column gap one and column gap 2

    			grid-row: 1 / 2;
                    first row

                1 / span 3:
                    start at 1 and span to 3

                2 / -1
                    -1 represents the end like in js arrays

if the second number is one more than the first we can omit it like so:

                grid-column: 1;
    			grid-row: 2;

            this is the same as:
                grid-column: 1 / 2;
    			grid-row: 2 / 3;

## 63. Aligning Grid Items and Tracks

we can use justify content just like on flexbox

align content works differently than in flexbox thouth

            end | center | start

this all only makes sence when the grid container is larger than the area of the items(space to move around)

aligning items INSIDE cells

            align-items: center;
                align vertically

            justify-items: centr;
                align horizontally
