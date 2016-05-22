<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h4>Hi! {{ $user->name }}:</h4>
    <h2>{{ $title }}</h2>
    <div class="container">
        <p>{!! $m !!}</p>
    </div>
</body>
</html>