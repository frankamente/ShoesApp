import 'package:flutter/material.dart';
import 'package:flutter_shoes/src/widgets/custom_widgets.dart';

class ShoePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomAppBar(text: "For you"),
    );
  }
}