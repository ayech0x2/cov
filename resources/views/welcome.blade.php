<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Covoiturage</title>

        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>

      <h1 class="text-center"><a href="/login"> Login or Register;</a></h1>

      <div id="HomePage"></div>

      <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
