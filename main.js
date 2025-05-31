const tf2Classes = [
    "Scout", "Soldier", "Pyro",
    "Demoman", "Heavy", "Engineer",
    "Medic", "Sniper", "Spy"
  ];
  
  function searchTF2Class(query) {
    const results = tf2Classes.filter(cls =>
      cls.toLowerCase().includes(query.toLowerCase())
    );
  
    if (results.length === 0) {
      console.log("Класс не найден.");
    } else {
      console.log("Результаты поиска:");
      results.forEach(cls => console.log("- " + cls));
    }
  }
  
  // Пример использования:
  searchTF2Class("s");   // Найдёт Scout, Soldier, Sniper, Spy
  searchTF2Class("eng"); // Найдёт Engineer
  searchTF2Class("xyz"); // Ничего не найдёт