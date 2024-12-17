import 'package:flutter/material.dart';
import 'package:star_wars_people_list/models/people_response.dart';
import 'package:http/http.dart' as http;
import 'package:star_wars_people_list/screens/people_deatil_screen.dart';


class PeopleScreen extends StatefulWidget {
  const PeopleScreen({super.key});

  @override
  State<PeopleScreen> createState() => _PeopleScreenState();
}

class _PeopleScreenState extends State<PeopleScreen> {
  late Future<PeopleResponse> peopleResponse;

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Image.network(
          'https://logoeps.com/wp-content/uploads/2013/05/star-wars-eps-vector-logo.png',
          height: 150,
          width: 400,
        ),
        backgroundColor: Colors.black,
      ),
      backgroundColor: Colors.black,
      body: FutureBuilder<PeopleResponse>(
        future: peopleResponse,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return _buildPeopleGrid(snapshot.data!);
          } else if (snapshot.hasError) {
            return Center(
              child: Text(
                '${snapshot.error}',
                style: const TextStyle(color: Colors.white),
              ),
            );
          }

          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }

  Future<PeopleResponse> getPeople() async {
    final response = await http.get(Uri.parse('https://swapi.dev/api/people'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load people');
    }
  }

  Widget _buildPeopleGrid(PeopleResponse peopleResponse) {
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 12.0,
        mainAxisSpacing: 12.0,
        childAspectRatio: 0.75,
      ),
      itemCount: peopleResponse.results!.length,
      itemBuilder: (context, index) {
        return _buildPersonCard(peopleResponse, index);
      },
    );
  }

  Widget _buildPersonCard(PeopleResponse peopleResponse, int index) {
    final person = peopleResponse.results![index];
    final heroTag = 'person_${person.name}';
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => PeopleDetailScreen(peopleItem: person, heroTag: heroTag),
          ),
        );
      },
      child: Card(
        elevation: 10.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        color: Colors.grey[850],
        child: Column(
          children: [
            Hero(
              tag: heroTag,
              child: ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
                child: Image.network(
                  'https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg',
                  width: double.infinity,
                  height: 170,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                person.name!,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Text(
              'Género :  ${person.gender}',
              style: const TextStyle(fontSize: 14, color: Colors.grey),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}