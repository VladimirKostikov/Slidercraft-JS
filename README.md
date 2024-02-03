<hr>

<p align="center">
    <img src="https://github.com/VladimirKostikov/Slidercraft-JS/blob/main/logo.png?raw=true">
</p>

<hr>

<h2> About project </h2>

<p>This is a simple slider written in pure JS. Project uses classes and modules</p>

<hr>

<h2>Development environment versions</h2>

- Server version: Apache/2.4.52 (Ubuntu)
- Linux Mint 21 Vanessa

<hr>

<h2> Usage </h2>

<p>Initializing the slider is very simple. It is enough to connect the main.js file as a module and create an object of the slider class</p>

```
<script type="module">
    import slider from 'PATH TO main.js';
    var slider = new slider('CLASSNAME OR ID OF ELEMENT');
</script>
```

<p>Example:</p>

```
<div class="slider">
    <div><span>1</span></div>
    <div><span>2</span></div>
    <div><span>3</span></div>
    <div><span>4</span></div>
    <div><span>5</span></div>
</div>
```

```
<script type="module">
    import slider from './SliderCraft/js/main.js';
    var sl = new slider('.slider');
</script>
```


<hr>

<h2> Options </h2>

<p>The slider supports options. The second argument is an array of parameters. <br> Example:</p>

```
<script type="module">
    import slider from './SliderCraft/js/main.js';
    var sl = new slider('.slider', {
        timer: 5000
    });
</script>
```

<p>In this example, the “timer” parameter was specified, which is responsible for the speed of automatic scrolling. If you do not specify a parameter, the default value will be applied</p>

<hr>

<h2>List of options</h2>

| Option    | Default Value | Action |
| ------    | ------------- | -------- |
| width     | 820px         | Width of the slider
| height    | 480px         | Height of the slider
| start     | 0             | First slide after slider initialization
| timer     | 3000          | Auto scroll interval
| autoPlay  | true          | Auto scroll
| arrows    | true          | Show arrows to scroll the slider

<hr>

<h2>Modules</h2>

|   Name                    |   Action  |
|   ----                    |   ------  |
|   countSlidesInElement    |   Counts the number of slides in a slider   |
|   elementExist            |   Checks if the element where the slider will be initialized exists (the first constructor argument) |
|   prepareElement          |   A module that applies certain classes and styles to an element |
|   renderArrows            |   This module draws arrows for turning slides |
|   renderElement           |   This module renders slides  |

<hr>

<h2>Templates</h2>

<p>This project uses HTML templates. There are currently two templates: arrowLeft and arrowRight</p>

|   Name                    |   Template  |
|   ----                    |   ------  |
|   arrowLeft               |   Left arrow template  |
|   arrowRight              |   Right arrow template |

<p></p>