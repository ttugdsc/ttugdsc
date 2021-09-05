
<img src='../lockup.jpg' width='100%' align='center' />
<br/>
<br/>

# How to use the CSS  Classes

## Table of Contents:
1. [Using the Grid](#using-the-grid)
2. [Utility Classes](#utility-classes)


If you have any questions or concerns about the CSS or run into any problems contact jaxcksn on discord.
## Using the Grid
---
<br />

**It is recommended to learn about bootstrap and how the in it grid system works, as lots of the utility classes and grid is based on that framework.**

### Breakpoints:
Modern websites have an attribute known as responsiveness. They should be designed with all devices in mind. Therefore, we need to understand breakpoints.

A "breakpoint" is a set screen width at which we change the website to better fit the widths. Our website has 3 main breakpoints.

1. Breakpoint SM (width: 576px) is used for mobile devices and small screens
2. Breakpoint MD (width: 768px) is used for tablets and small computers.
3. Breakpoint LG (width: 992px) is used for anything larger than the other two breakpoints. Mainly desktop computers.
<br />

### The Responsive Grid
To accomplish a responsive website, it is split into a grid of 12 columns. These columns, once we reach certain smaller breakpoints will collapse into 1 single column, which is what makes the page responsive. You can resize the index page of the website to see this in action.

When designing a page for the website, the first thing we must do is wrap everything in a div with the ```container``` class:

```html
<template>
    <div class="container">
        <!--- This is a container --->
    </div>
</template>
```
If you want the container to span the entire width of the page, you must change the class to `container-fluid`.

Then, when we want to add content, we should put it in a row:
```html
<template>
    <div class="container">
        <div class="row">
            <!--- Wrapped in a row! --->
        </div>
    </div>
</template>
```
After the row is made, we can start using the grid. Because the row has 12 columns available, we can split into columns, as long as the total number of columns is 12. To make a column, we use the ` col-(width)` css class. 

For example, to make a row with 2 columns that each take up half of the container:
```html
<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <p>A column with width 6</p>
            </div>
            <div class="col-6">
                <p>A column with width 6</p>
            </div>
        </div>
    </div>
</template>
```

If we wanted two columns, but one takes up 1/4 of the container, and the other takes up 3/4 of the container:
```html
<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <p>A column with width 3</p>
            </div>
            <div class="col-9">
                <p>A column with width 9</p>
            </div>
        </div>
    </div>
</template>
```
It's important to remember that the columns will eventually set their width to 1 once the screen becomes two small for the columns to exist. However, if you want columns that still show at small breakpoints, there is a class for that. Just append `-sm` to the end of the column class.

For example:
```html
<template>
    <div class="container">
        <div class="row">
            <div class="col-3-sm">
                <p>A column with width 3</p>
            </div>
            <div class="col-9-sm">
                <p>A column with width 9</p>
            </div>
        </div>
    </div>
</template>
```

Make sure you test your site at all breakpoints to make sure it looks good, and adjust the columns and classes accordingly.

## Utility Classes
---
There is also a variety of CSS classes you can use to accomplish basic styling.

### Margin Utility
There are 5 preset margins you can apply, the syntax is:
``` html
<div class="m{?location}-{1 to 5}-{?breakpoint}">
```

1. {location}: There are couple different locations to apply the margin:
    - mt : applies to the top
    - mb : applies to the bottom
    - my : applies to the top and bottom
    - ml : applies to the left
    - mr : applies to the right
    - mx : applies to the left and right
    - m : applies to every side

2. {1 to 5}: These are the magnitudes of the margin that you can set the margin too. They also match the padding values.

3. {breakpoint}: you can also specify a breakpoint to apply the margin to. 
    - sm : will only apply to widths below the small breakpoint.
    - md : will only apply to widths below the medium breakpoint.


### Padding Utility
There are 5 preset paddings you can apply, the syntax is:
```html
<div class="p{?location}-{1 to 5}-{?breakpoint}">
```

1. {location}: There are couple different locations to apply the padding:
    - pt : applies to the top
    - pb : applies to the bottom
    - py : applies to the top and bottom
    - pl : applies to the left
    - pr : applies to the right
    - px : applies to the left and right
    - p : applies to every side

2. {1 to 5}: These are the magnitudes of the padding that you can set the margin too. They also match the margin values.

3. {breakpoint}: you can also specify a breakpoint to apply the padding to. 
    - sm : will only apply to widths below the small breakpoint.
    - md : will only apply to widths below the medium breakpoint.

### Color Utilities
You can apply both text colors and background colors with utility classes as well:

#### For text colors:
```html
<p class="{color}">
```
1. {color} : 
    - primary: the blue color set in the branding guidelines
    - red: the red color set in the branding guidelines
    - yellow: the yellow color set in the branding guidelines
    - green: the green color set in the branding guidelines
    - black: a slightly off black color
    - white: a pure white color

#### For background colors:
```html
<div class="bg-{color}">
```
1. {color} : 
    - primary: the blue color set in the branding guidelines
    - red: the red color set in the branding guidelines
    - yellow: the yellow color set in the branding guidelines
    - green: the green color set in the branding guidelines
    - black: a slightly off black color
    - white: a pure white color
