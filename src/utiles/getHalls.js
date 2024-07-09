async function getHalls() {
    const response = await fetch('http://localhost:5000/halls');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }