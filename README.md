# stickify
jQuery plugin for sticky elements

 
## Description: Simple plugin for fixing elements on scroll

### Author: Angel Petkov
### Author Website: https://quiztion.bg/

## Options:
- position (string): 'top', 'right', 'bottom', 'left' - top by default
- animationDuration (numeric): in seconds - '0.4', '0.8', '1' and etc. - 0.4 by default
- reverse (boolean): true to hide element on scroll down and show in scroll up, false to fix the element - false by default
- width (string): in pixels or percentage - 100% by default
- z-index (numeric): option to control the z-index - 9999 by default

## How to use:

Download stickify.js from src folder and add the plugin to your project.

Basic usage:

$('.selector').stickify();

Select the element you want to be fixed and call stickify method. You can add the following options (default options below): 

$('.selector').stickify({
    position: 'top',
    animationDuration: '0,4',
    reverse: false,
    width: '100%',
    z-index: '9999',
});
