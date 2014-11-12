<!doctype html>
<!--[if lt IE 7 ]><html itemscope itemtype="http://schema.org/Product" id="ie6" class="ie ie-old" lang="en-US" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 7 ]>   <html itemscope itemtype="http://schema.org/Product" id="ie7" class="ie ie-old" lang="en-US" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 8 ]>   <html itemscope itemtype="http://schema.org/Product" id="ie8" class="ie ie-old" lang="en-US" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 9 ]>   <html itemscope itemtype="http://schema.org/Product" id="ie9" class="ie" lang="en-US" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if gt IE 9]><!--><html itemscope itemtype="http://schema.org/Product" lang="en-US" prefix="og: http://ogp.me/ns#"><!--<![endif]-->
<head>

    <!-- Meta -->
    <meta charset="utf-8">

    <title>test1</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- Favicons -->

    <!-- Styles -->

    <!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

<script src="js/swirly.js"></script>

<script>
//var interval;

$( document ).ready(function() {
 
    // Your code here.
 
    // Setup your options, which can be generated from the demo shown above
 options = {
    phaseShift:90,
    swirlySize:28,
    reverseX:-1,
    reverseY:-1,
    initialX:65,
    initialY:65,
    frequencyX:2100,
    frequencyY:2240,
    offset:10,
    scale: 40,
    colors:['red','green']
};
     
    // Execute swirly on the specified element
    var interval = $("#example1").swirly(options);

/*interval = $("#monochrome").swirly({
            colors:["red","blue"]
        });
*/
// To hide and show use the regular jquery toggle
//$("#monochrome").toggle();

// To completely remove the swirly loading motion
//$("#your-target-div").remove(interval, $("#your-target-div"));

});

</script>

<style type="text/css">

div.swirly-box
{
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    background-color: grey;
    padding: 10px;
    border: 1px solid #E1E1E8;
    min-height:200px;
    min-width:200px;
    width:200px;
}    
</style>
</head>

<body>

<div class="swirly-box">
 <div id="example1">
 Hello world!
 </div>
 </div>

</body>
</html>
