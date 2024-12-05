import 'package:flutter/material.dart';

class LoginInterface extends StatelessWidget {
  const LoginInterface({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(230, 47, 22, 1.0),
      appBar: AppBar(
        title: const Text('Login Interface'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Image(
              image: NetworkImage('https://lh3.googleusercontent.com/drive-storage/AJQWtBM2NF6UI-6aDgbvwlLUQrk-kuZ7xOIq0y0UIARlKH0sd32w0yxQBbTHB_Vb7mKvLqvMLgZJx3qmBf1c60qkQSW6nopZwa1rJvhfdNoae2oTSQ=w1903-h925'),
              width: 200,
              
            ),
            const SizedBox(height: 20),
            const Text(
              'Beautiful, Private Sharing',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.normal,
                color: Color.fromARGB(108, 255, 255, 255),
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Sign Up'),
              
            ),
            const SizedBox(height: 20),
            TextField(
              decoration: InputDecoration(
                hintText: 'Password',
                icon: const Icon(Icons.lock),
                iconColor: const Color.fromARGB(125, 212, 191, 191),
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              obscureText: true,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Login'),
            ),
            const SizedBox(height: 20),
           
          ],
        ),
      ),
    );
  }
}