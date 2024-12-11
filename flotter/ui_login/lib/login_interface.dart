import 'package:flutter/material.dart';

class LoginInterface extends StatelessWidget {
  const LoginInterface({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFE62F16), 
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Spacer(),

            const Center(
              child: Image(
                image: NetworkImage('https://lh3.googleusercontent.com/drive-storage/AJQWtBNFnvqNRytFoT5-8qOxHUz_0tiJ5VeWUYfQOeEZ4LB4Aq4q7ABlLlwnbfOabegSfd44NxnYjcPao9bg-yn0q3H5VEVymM9UpPqubqLe3L1GAyo=w1903-h925'),
                width: 250,
                
              ),
            ),
            const SizedBox(height: 10),

            // Subtítulo<
            const Center(
              child: Text(
                'Beautiful, Private Sharing',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.white70,
                ),
              ),
            ),
            const Spacer(),


            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: const Color(0xFFE62F16),
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
              ),
              child: const Text(
                'Sign Up',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              ),
            ),
            const SizedBox(height: 20),


            const Center(
              child: Text(
                'Already have a Path account?',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.white70,
                ),
              ),
            ),
            const SizedBox(height: 10),

            // Botón "Login"
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent,
                foregroundColor: const Color.fromARGB(100, 255, 255, 255),
                side: const BorderSide(color: Color.fromARGB(137, 255, 255, 255), width: 1.5),
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
              ),
              child: const Text(
                'Login',
                style: TextStyle(fontSize: 16),
              ),
            ),
            const SizedBox(height: 20),

            // Términos y condiciones
            const Center(
              child: Text(
                'By using Path, you agree to Path\'s\nTerms of Use and Privacy Policy.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.white70,
                ),
              ),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}