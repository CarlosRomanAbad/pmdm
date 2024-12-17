import 'package:flutter/material.dart';
import 'package:star_wars_people_list/models/people.dart';

class PeopleDetailScreen extends StatefulWidget {
  final People peopleItem;
  final String heroTag;
  const PeopleDetailScreen({super.key, required this.peopleItem, required this.heroTag});

  @override
  State<PeopleDetailScreen> createState() => _PeopleDetailScreenState();
}

class _PeopleDetailScreenState extends State<PeopleDetailScreen> {
  late String characterId;

  @override
  void initState() {
    super.initState();
    characterId = _extractIdFromUrl(widget.peopleItem.url!);
  }

  String _extractIdFromUrl(String url) {
    final uri = Uri.parse(url);
    return uri.pathSegments[uri.pathSegments.length - 2];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.peopleItem.name!,
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        backgroundColor: const Color(0xFF1C1C1C), // Dark background for AppBar
        elevation: 0,
      ),
      backgroundColor: Colors.black,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Hero(
              tag: widget.heroTag,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Image.network(
                  'https://starwars-visualguide.com/assets/img/characters/$characterId.jpg',
                  width: double.infinity,
                  height: 300,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const SizedBox(height: 20),
            Text(
              widget.peopleItem.name!,
              style: const TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Colors.white,
                shadows: [
                  Shadow(
                    blurRadius: 10.0,
                    color: Colors.black,
                    offset: Offset(2.0, 2.0),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 10),
            _buildBadge('Height', widget.peopleItem.height!),
            _buildBadge('Mass', widget.peopleItem.mass!),
            _buildBadge('Hair Color', widget.peopleItem.hairColor!),
            _buildBadge('Skin Color', widget.peopleItem.skinColor!),
            _buildBadge('Eye Color', widget.peopleItem.eyeColor!),
            _buildBadge('Birth Year', widget.peopleItem.birthYear!),
            _buildBadge('Gender', widget.peopleItem.gender!),
          ],
        ),
      ),
    );
  }

  Widget _buildBadge(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Chip(
            label: Text(
              label,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            backgroundColor: Colors.blueGrey.shade800,
          ),
          Chip(
            label: Text(
              value,
              style: const TextStyle(
                fontSize: 16,
                color: Colors.white,
              ),
            ),
            backgroundColor: Colors.blueGrey.shade800,
          ),
        ],
      ),
    );
  }
}
