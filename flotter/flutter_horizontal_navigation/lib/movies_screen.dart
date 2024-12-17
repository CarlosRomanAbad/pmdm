import 'package:flutter/material.dart';
import '../api_service.dart';
import '../movie.dart';

class MoviesScreen extends StatelessWidget {
  final ApiService apiService = ApiService();

  MoviesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Movies')),
      body: FutureBuilder<List<Movie>>(
        future: apiService.fetchPopularMovies(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return const Center(child: CircularProgressIndicator());
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              final movie = snapshot.data![index];
              return ListTile(
                leading: Image.network('https://image.tmdb.org/t/p/w200${movie.posterPath}'),
                title: Text(movie.title),
              );
            },
          );
        },
      ),
    );
  }
}
