import 'package:flutter/material.dart';

class ShoePreview extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 5),
      child: Container(
        width: double.infinity,
        height: 430,
        decoration: BoxDecoration(
          color: Color(0xffFFCF53),
          borderRadius: BorderRadius.circular(50),
        ),
        child: ShoeWithShadow(),
      ),
    );
  }
}

class ShoeWithShadow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(50.0),
      child: Stack(
        children: <Widget>[
          Positioned(
            bottom: 100,
            right: 0,
            child: ShoeShadow(),
          ),
          Image.asset("assets/imgs/amarillo.png"),
        ],
      ),
    );
  }
}

class ShoeShadow extends StatelessWidget {
  const ShoeShadow({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: -0.5,
      child: Container(
        width: 230,
        height: 120,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(100),
            boxShadow: [BoxShadow(color: Color(0xffEEAA14E), blurRadius: 40)]),
      ),
    );
  }
}
