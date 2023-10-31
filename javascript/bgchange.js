<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
</head>
<body>
    HELLO FRANDS
</body>
<script> 
    function changeBg () {
    const colors = ["teal", "purple", "orange", "pink"];
    const randomColors = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColors];
}

setInterval(changeBg, 1000);

</script>
</html>
