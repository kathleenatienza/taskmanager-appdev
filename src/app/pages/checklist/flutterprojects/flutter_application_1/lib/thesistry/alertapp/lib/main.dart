import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
class Post {
  String body;
  String author;
  int likes = 0;
  bool userLiked = false;

  Post (this.body, this.author);

  void likePost(){
  this.userLiked = !this.userLiked;
  if(this.userLiked){
    this.likes +=1;
  } else {
    this.likes -=1;
  }
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(

        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: Text ('Hello')));
  }
}

