import 'package:flutter/material.dart';

class ActorsHorizontalList extends StatelessWidget {
  const ActorsHorizontalList({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Best Spanish Actors'),
      ),
      body: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: const Image(
                    image: NetworkImage('https://www.ecartelera.com/images/sets/14700/14786.jpg'),
                    width: 160.0,
                    height: 200.0,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 8.0),
                const Text('Javier Gutierrez'),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: const Image(
                    image: NetworkImage('https://www.ecartelera.com/images/sets/14700/14786.jpg'),
                    width: 160.0,
                    height: 200.0,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 8.0),
                const Text('Javier Gutierrez'),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: const Image(
                    image: NetworkImage('https://www.ecartelera.com/images/sets/14700/14786.jpg'),
                    width: 160.0,
                    height: 200.0,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 8.0),
                const Text('Javier Gutierrez'),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: const Image(
                    image: NetworkImage('https://www.ecartelera.com/images/sets/14700/14786.jpg'),
                    width: 160.0,
                    height: 200.0,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 8.0),
                const Text('Javier Gutierrez'),
              ],
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: const Image(
                    image: NetworkImage('https://www.ecartelera.com/images/sets/14700/14786.jpg'),
                    width: 160.0,
                    height: 200.0,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 8.0),
                const Text('Javier Gutierrez'),
              ],
            ),
          ),
        ],
      ),
    );
  }
}