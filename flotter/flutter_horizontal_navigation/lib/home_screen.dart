import 'package:flutter/material.dart';
import '../api_service.dart';
import '../movie.dart';
import '../actor.dart';

class HomeScreen extends StatelessWidget {
  final ApiService apiService = ApiService();

  HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Actores populares
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                'Popular Actors',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),
            SizedBox(
              height: 150, // Altura fija para el listado de actores
              child: FutureBuilder<List<Actor>>(
                future: apiService.fetchPopularActors(),
                builder: (context, snapshot) {
                  if (!snapshot.hasData) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      final actor = snapshot.data![index];
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            CircleAvatar(
                              backgroundImage: NetworkImage(
                                  'https://image.tmdb.org/t/p/w200${actor.profilePath}'),
                              radius: 50,
                            ),
                            const SizedBox(height: 8),
                            Text(
                              actor.name,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ],
                        ),
                      );
                    },
                  );
                },
              ),
            ),

            // Películas populares
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                'Popular Movies',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),
            SizedBox(
              height: 250, // Altura fija para el listado de películas
              child: FutureBuilder<List<Movie>>(
                future: apiService.fetchPopularMovies(),
                builder: (context, snapshot) {
                  if (!snapshot.hasData) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      final movie = snapshot.data![index];
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Image.network(
                              'https://image.tmdb.org/t/p/w200${movie.posterPath}',
                              height: 150,
                              width: 100,
                              fit: BoxFit.cover,
                            ),
                            const SizedBox(height: 8),
                            Text(
                              movie.title,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 14),
                            ),
                          ],
                        ),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
