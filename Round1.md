# 100 Days Of Code - Round 1

The log of my #100DaysOfCode challenge. 
Started on [December 9, Thursday, 2021].

## Day 0: freecodecamp Basic HTML and HTML5 28/28

### **Today's Progress**

1. Vim: Learn about the :substitute (:s) command.
2. Have a preliminary knowledge of Bootstrap.
3. Review the basic components in a HTML form, like label&radio.
4. Import [GoogleFonts](https://fonts.google.com/) instead of using locals. 

### **For tomorrow's review**

1. Code a grid with 4 cols in large screen and 2 cols in smaller one.
    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    ```
2. Code this

    ![image-20211209181130008](https://s2.loli.net/2021/12/09/FB5kiEXswu4Gmgn.png)

## Day 1: freecodecamp Basic CSS 31/44

### **Today's Progress**
1. Negative margins to further grow the box.
2. Attribute selector.

    ```css
      [type="checkbox"]{background:blue;} 
    ```

3. ColorHexa
   
    | Color<br>case-insensitive | Short Hex Code |
    | :-----------------------: | :------------: |
    |            Red            |      #F00      |
    |          Yellow           |      #FF0      |
    |           Green           |      #0F0      |
    |           Cyan            |      #0FF      |
    |           Blue            |      #00F      |
    |          Fuchsia          |      #F0F      |

### **For tomorrow's review**

1. CSS selectors includes: 
    
    id/class/tag/attr/pseudo-class selector 

2. What's the precedence order of CSS styling?

    **!important**>inline>id>class>tag>top-bottom order

## Day2: freecodecamp Applied Visual Design 11/52

### **Today's Progress**

1. How css variables plays a role in media queries.
2. Tags and corresponding text-altering styles.
   
    ```html
    <strong>font-size: bold;</strong>
    <em>font-style: italic;</em>
    <u>font-decoration: underline;</u>
    <s>font-decoration: line-through;</s>
    ```

### **For tomorrow's review**

1. Code this - [Card](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/add-a-box-shadow-to-a-card-like-element)
    
    <img alt="" src="https://s2.loli.net/2021/12/11/h3WS5VmJdnAlyfH.png" width="300">

## Day 3: freecodecamp review

### **Today's Progress**

1. Review previous learnt points by coding.

## Day 4: freecodecamp Applied Visual Design 29/52

### **Today's Progress**

1. More about positioning
    eg.relative/absolute/fixed/**sticky**

    ```css
    .sticky {
        background-color: lavender;
        position: sticky;
        left: 140px;
        top: 150px;
    }
    ```

2. On how to center an elm vertically if the use of padding and line-height is out of the question.
3. Introduced to some color terminology and schemes to make sites more appealing.
4. Give a touch of smooth transition and integration of colors.

### **For tomorrow's review**

1. Use position and flex box repectively to center an elm vertically.
2. What is a tertiary color?
3. What is split-complement scheme? Give an example.
4. Use hsl(?, ?, ?) for a incessantly color-changing effect (with a pinch of javascript). Try single-factor altering, namely h/s/l one at a time.
5. Code this - [Linear Gradient](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient)
6. CSS angle unit(full circle): 360deg, 1turn, ?rad, 400grad;

    <img alt="" src="https://s2.loli.net/2021/12/14/zfuKGZUebLDc7xg.png" width="200">

6. Code this - [Striped Elem](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-css-linear-gradient-to-create-a-striped-element)

    <img src="https://s2.loli.net/2021/12/14/ZRVnL3SHUjXTJ6i.png" width="200" alt="">

## Day 5: freecodecamp Applied Visual Design 29/52

### **Today's Progress**

1. Review what have been learnt so far.

## Day 6: freecodecamp Applied Visual Design 42/52

### **Today's Progress**
1. Creativity with box-shadow.
2. Put pseudo class selectors (::after&::before) into practice.
3. Instructions on CSS animation.

### **For tomorrow's review**
1. Code this - [Moon](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css)

    <img src="https://s2.loli.net/2021/12/15/BMbRu1fJUj75aOz.png" width="120" alt="">

2. Code this - [Heart](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html)

    <img src="https://s2.loli.net/2021/12/15/6seKxGhzdkw8F7t.png" width="120" alt="">

3. Code this - [Pumping Heart](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count)

## Day 7: freecodecamp Applied Accessibility 13/22

### **Today's Progress**
1. Mimic animation-timing-function keywords using cubic-bezier()
    See [cubic-bezier()](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-bezier-curve-to-move-a-graphic)
2. Use cubic-bezier() to stimulate the juggling ball.
3. How to get md pictures uniformly-sized?
    See [Changing image size in markdown](https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown)
4. New features in HTML5.
    - Sematic Markups
        - fieldset and legend
        - figure and figcaption
        - ...
    - ```<a href="mailto:?"></a>```
    - Use cases of \<header\> and \<hgroup\>
    - Meida play before HTML5 requires plugin.
    - **Do not** abuse sematic tags. See [ill-ordered hgroup](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content)

        ```html
        <main>
            <h2>Learn the Art of Moving Stealthily</h2>
            <h5>How to Hide in Plain Sight</h5>
            <h5>How to Climb a Wall</h5>

            <h2>Learn the Art of Battle</h2>
            <h5>How to Strengthen your Body</h5>
            <h5>How to Fight like a Ninja</h5>

            <h2>Learn the Art of Living with Honor</h2>
            <h5>How to Breathe Properly</h5>
            <h5>How to Simplify your Life</h5>
        </main>
        ```

### **For tomorrow's review**
1. Code [Juggling Balls](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-motion-more-natural-using-a-bezier-curve)
2. What's new about HTML5?
3. Code this

    <img alt="" src="https://s2.loli.net/2021/12/16/5vtLJPwmSeQ16Zn.png" width="300">

## Day 8: freecodecamp Applied Accessibility 22/22

### **Today's Progress**
1. Supernoting with ```September 15<sup>th</sup>```
2. HTML offers the **accesskey** attribute to specify a shortcut key to activate or bring focus to an element.

### **For tomorrow's review**
1. Why do we need ```<time datetime=""></time>```?
2. What's the use of accesskey?

## Day 9: Responsive Web Design Principle 4/4 + CSS Flex 3/17

### **Today's Progress**
1. The use of @media to designate which style to present if the media query match.
2. Have a try on an alternative CSS layout - flex.

### **For tomorrow's review**
1. Why these tow rules to make images responsive with CSS? [Answer](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-an-image-responsive)
    ```css
    img {
        max-width: 100%;
        height: auto;
    }
    ```
2. What's the difference between viewport units and percentages?
3. Describe the four different viewport units. [Answer](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-typography-responsive)

## Day 10: freecodecamp CSS Flex 17/17

### **Today's Progress**
1. More on Flex Layout.

### **For tomorrow's review**
1. Differentiate the six attrs of justify-content.
2. Differentiate the five attrs of align-items.
3. What are justify-content and align-items for?
4. When does Flex Item shrink?
    
    Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

## Day 11: freecodecamp CSS Flex 17/17+

### **Today's Progress**
1. Practice on Flex Layout.
2. Game-aided Flexbox learning on [flexboxfroggy](https://flexboxfroggy.com/)

### **For tomorrow's review**
1. When to use the **order** property? And how to use it? [Answer](https://flexboxfroggy.com/)
2. When to use the **align-self** property and how to use it?
3. What's the shorthand for flex-direction and flex-wrap?
4. Try again Challenge 24 on [flexboxfroggy](https://flexboxfroggy.com/)

Take a day off on 2021-12-21

## Day 12: codepip Flexboxfroggy

### **Today's Progress**
1. Reinforce my acquisiton of flexbox using codepip flexboxfroggy.
2. Follow the instruction of the sourceress and get to know some basic incantations to summon html tag pairs.

    <img src="https://s2.loli.net/2021/12/22/dvVRy9FmqoBcrDJ.png" width="300">

### **For tomorrow's review**

## Day 13: codepip CSS Scoops

### **Today's Progress**
1. Mess around with CSS selectors and combinators.

    <img width="300" src="https://s2.loli.net/2021/12/23/pBlGQ8zivmRhqNA.png" alt="">

### **For tomorrow's review**
1. What's the use of descentant/child/general sibling/adjacent sibling combinators?
2. Name a few selectors.

    type/id/class/pseudo-class/universal/attribute

3. What's the difference between :is() and :where()?

## Day 14: codepip

### **Today's Progress**
1. [CSS Surgeon](https://codepip.com/games/css-surgeon/) accomplished.
2. [Nth Cart](https://codepip.com/games/nth-cart/) accomplished.
3. Find this [example.org](https://example.org/) while browsing mdn. It's used to exemplify how to nest another browsing context inside the current one with \<iframe\>.
4. Learn about CSS counter. It's typically used as follows:
    - counter-reset: countername;
    - counter-increment: countername;
    - content: counter(countername);

## Day 15: freecodecamp Regular Expression 22/33

### **Today's Progress**
1. In javascript, test() and match() are the functon-pair for the use of Regular Expression.
    - test() return Boolean
    - match() return Array (Null if not found)
2. Regex literals come in the form of **/Regex/** + flags
    - i - ignore cases
    - g - global match
3. Preliminary practice on wildcards.
    - \+ - one or more occurance
    - \* - zero or more occurance
4. Regex uses greedy matching by default.
5. Range matching by character set and the hyphen - combinator.

### **For tomorrow's review**
1. What's the two matching patterns in Regex?
2. What's the closest character class in JavaScript to match the alphabet? And what does it match exactly?
3. Try again [usernameCheck](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

## Day 16: freecodecamp Regular Expression 33/33

### **Today's Progress**
1. Difference between outline and border.
    - Outline takes up no space.
    - Outline may be non-rectangular?
2. Get acquanted with escape sequences.
    - \r: carriage return
    - \n: new line
    - \f: form feed
    - \t: tab
    - \v: vertical tab
3. 

### **For tomorrow's review**
1. Why we shouldn't remove the default focus outline?

    Defining focus to navigation elements is an **accessibility** requirement, it's clearly stated in the Web Content Accessibility Guidelines:

    2.4.7 **Focus Visible**: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

    This is especially useful for folks who can't use a mouse or have a visual impairment. If you remove the outline you are making your site inaccessible for these people.
2. Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

    ```let favRegex = /favou?rite/;```

3. What's Lookaheads and why we need them?

## Day 17: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 18: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 19: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 20: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 21: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 22: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 23: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 24: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 17: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 17: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
## Day 17: freecodecamp 

### **Today's Progress**

### **For tomorrow's review**
    
<!-- ## Day 1: June 27, Monday

### **Today's Progress**: I've gone through many exercises on FreeCodeCamp.

### **Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

### **Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence) --> 

## Challenges
1. Code this

    <img alt="" src="https://s2.loli.net/2021/12/14/qUhASpZLg6lY1js.png" width="400">

2. Code this horizontal [progress bar](https://html.com/html5/) that gives a reading of how far you've been through the article.
