Tony Finals 

MEAN Apps

The MEAN final project consists of CRUD for the posts.
Sign-up view.
Sign-in view.
The main paige consists of CSS coding and image url.

## Installation
Install using npm:
```
npm install bower
npm install mongoose
npm install ejs
npm install morgan
npm install passport
npm install body-parser
npm install method-override

```

## Coding sameple
```
<body>
	<% for(var i in messages) { %>
	   <div class="flash"><%= messages[i] %></div>
	<% } %>
<div class="jumbotron">

<form class="form-horizontal" role="form" method="POST" action="/signup">

  <div class = "form-group">
      <label for = "firstName">First Name:</label>
      <input type = "text" class = "form-control" name = "firstName" placeholder = "First Name" required>
   </div>
   <div class = "form-group">
      <label for = "lastName">Last Name:</label>
      <input type = "text" class = "form-control" name = "lastName" placeholder = "Last Name" required>
   </div>
   <div class = "form-group">
      <label for = "email">Email:</label>
      <input type = "email" class = "form-control" name = "email" required placeholder = "Email">
   </div>
   <div class = "form-group">
      <label for = "username">UserName:</label>
      <input type = "text" class = "form-control" name = "username" placeholder = "Username" required>
   </div>
   <div class = "form-group">
      <label for = "password">Password:</label>
      <input type = "password" class = "form-control" name = "password" placeholder = "Password" required>
   </div>
   
   <button type="Sign up" class="btn btn-primary btn-md">Submit</button>
   <a href="https://tonyfinals-tonyvangvanh.c9users.io/#!/" class="btn btn-primary active"><i class="icon-white icon-home"></i> Go Back</a>
  
</form>
</div>

<a href="/oauth/facebook" class="btn btn-primary"><span class="fa fa-facebook-official"></span> Sign up with Facebook</a>
<a href="/oauth/twitter" class="btn btn-info"><span class="fa fa-twitter-square"></span> Sign up with Twitter</a>
<a href="/oauth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Sign up with Google+</a>

</body>
</html>

```
## Coding sample

```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">

</head>
<body>

	<% for(var i in messages) { %>
	   <div class="flash"><%= messages[i] %></div>
	<% } %>

<div class="jumbotron">
<form class="form-horizontal" role="form" method="POST" action="/signin">
  <div class = "form-group">


	  <div class = "form-group">
      <label for = "username">Username:</label>
      <input type = "text" class = "form-control" name = "username" placeholder = "Username" required>
       </div>
	

    	 <div class = "form-group">
      <label for = "password">Password:</label>
      <input type = "password" class = "form-control" name = "password" placeholder = "Password" required>
      </div>
			
	<button type="Sign In" class="btn btn-primary btn-md">Submit</button>
	<a href="https://tonyfinals-tonyvangvanh.c9users.io/#!/" class="btn btn-primary active"><i class="icon-white icon-home"></i> Cancel</a>

		</div>
	</form>


<a href="/oauth/facebook" class="btn btn-primary"><span class="fa fa-facebook-official"></span> Sign in with Facebook</a>
<a href="/oauth/twitter" class="btn btn-info"><span class="fa fa-twitter-square"></span> Sign in with Twitter</a>
<a href="/oauth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Sign in with Google+</a>

```