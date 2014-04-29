<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>hangman</title>
		<!--Google Hosted Libraries: jQuery and jQueryUI-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
		<!--Sytle Libraries-->
		<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
		
		<link href="css/style.css" rel="stylesheet" type="text/css" />
		<script src="js/hangman.js"></script>
	</head>
	<body>
		<div id="header">
			<h1>Hangman</h1>
		</div>
		<div id="output">
			<p id="word">Word</p>
			<button onclick="addBlankSpaces();">Test</button>
			<p id="guesses">Guesses</p>
		</div>
		<div id="controls">
			<h3>Enter a letter</h3>
			<input type="text" id="guess" name="guess"></br></br>
			<input type="submit" id="submit" value="Guess" name="submit" class="submitButton">
		</div>
		</br>
	</body>
</html>