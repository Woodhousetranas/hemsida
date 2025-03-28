// /src/app/api/contact/route.js
export async function POST(request) {
    try {
      const data = await request.json();
      // Här kan du lägga till logik för att t.ex. skicka ett email eller spara i en databas.
      console.log('Contact Form Submission:', data);
  
      return new Response(
        JSON.stringify({ message: 'Form submitted successfully' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return new Response(
        JSON.stringify({ message: 'Submission failed' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }
