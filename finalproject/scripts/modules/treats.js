export async function loadTreats() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading treats:', error);
    return [];
  }
}
