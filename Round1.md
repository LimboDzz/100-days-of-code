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

## Day 12: freecodecamp CSS Grid ?/22

### **Today's Progress**
1. 
2. 
3. 

### **For tomorrow's review**
1. Illustrate ```grid-template-columns: auto 50px 10% 2fr 1fr;```

    This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.
2. 
3. 
## Day 13: freecodecamp Applied Accessibility ?/22

### **Today's Progress**
1. 
2. 
3. 

### **For tomorrow's review**
1. 
2. 
3. 
## Day 14: freecodecamp Applied Accessibility ?/22

### **Today's Progress**
1. 
2. 
3. 

### **For tomorrow's review**
1. 
2. 
3. 
## Day 15: freecodecamp Applied Accessibility ?/22

### **Today's Progress**
1. 
2. 
3. 

### **For tomorrow's review**
1. 
2. 
3. 
## Day 16: freecodecamp Applied Accessibility ?/22

### **Today's Progress**
1. 
2. 
3. 

### **For tomorrow's review**
1. 
2. 
3. 

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
